<template>
  <div
    class="picker"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="stopDrag"
    @mouseleave="stopDrag"
    @wheel="onScroll"
  >
    <div class="picker-wrapper">
      <div
        v-for="(month, index) in visibleMonths"
        :key="month"
        :class="['picker-item', { selected: month === selectedMonth }]"
        :style="{ opacity: getOpacity(index) }"
      >
        {{ monthNames[month] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMonth: new Date().getMonth(), // Default to the current month
      range: 2, // Number of months to show above and below
      visibleMonths: [],
      isDragging: false,
      dragStartY: 0,
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  mounted() {
    this.updateVisibleMonths();
  },
  watch: {
    selectedMonth: "updateVisibleMonths",
  },
  methods: {
    updateVisibleMonths() {
      // Generate the list of visible months with wrapping
      this.visibleMonths = Array.from(
        { length: this.range * 2 + 1 },
        (_, i) => (this.selectedMonth - this.range + i + 12) % 12
      );
      this.$emit('selectedMonth',this.visibleMonths[2])
    },
    onScroll(event) {
      const delta = Math.sign(event.deltaY);
      if (delta > 0) {
        // Scroll down
        this.selectedMonth = (this.selectedMonth + 1) % 12;
      } else {
        // Scroll up
        this.selectedMonth = (this.selectedMonth - 1 + 12) % 12;
      }
    },
    startDrag(event) {
      this.isDragging = true;
      this.dragStartY = event.clientY;
    },
    onDrag(event) {
      if (!this.isDragging) return;
      const dragDistance = event.clientY - this.dragStartY;
      if (Math.abs(dragDistance) > 30) {
        if (dragDistance > 0) {
          // Drag down
          this.selectedMonth = (this.selectedMonth - 1 + 12) % 12;
        } else {
          // Drag up
          this.selectedMonth = (this.selectedMonth + 1) % 12;
        }
        this.dragStartY = event.clientY;
      }
    },
    stopDrag() {
      this.isDragging = false;
    },
    getOpacity(index) {
      const diff = Math.abs(index - this.range); // Middle is at this.range
      return diff === 0 ? 1 : diff === 1 ? 0.6 : diff === 2 ? 0.3 : 0;
    },
  },
};
</script>

<style scoped>
/* Same styles as the DayPicker */
.picker {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  overflow: hidden;
  cursor: grab;
}

.picker:active {
  cursor: grabbing;
}

.picker-wrapper {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
}

.picker-item {
  font-size: 1.2rem;
  text-align: center;
  transition: opacity 0.3s;
}

.picker-item.selected {
  font-weight: bold;
  font-size: 1.6rem;
}
</style>
