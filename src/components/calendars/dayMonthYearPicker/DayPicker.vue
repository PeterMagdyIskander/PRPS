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
        v-for="day in visibleDays"
        :key="day"
        :class="['picker-item', { selected: day === selectedDay }]"
        :style="{ opacity: getOpacity(day) }"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    month: { type: Number, required: true }, // 0 = January
    year: { type: Number, required: true }, // Needed for leap year logic
  },
  data() {
    return {
      selectedDay: 1, // Default to the 1st day
      range: 2, // Number of days to show above and below
      visibleDays: [],
      isDragging: false,
      dragStartY: 0,
    };
  },
  watch: {
    // Update visible days when month or year changes
    month: "updateVisibleDays",
    year: "updateVisibleDays",
    selectedDay: "updateVisibleDays",
  },
  mounted() {
    this.updateVisibleDays();
  },
  computed: {
    daysInMonth() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
  },
  methods: {
    updateVisibleDays() {
      this.visibleDays = Array.from(
        { length: this.range * 2 + 1 },
        (_, i) => this.selectedDay - this.range + i
      ).map((day) => {
        if (day < 1) return this.daysInMonth + day; // Wrap to previous month
        if (day > this.daysInMonth) return day - this.daysInMonth; // Wrap to next month
        return day;
      });
    },
    onScroll(event) {
      const delta = Math.sign(event.deltaY);
      if (delta > 0) {
        // Scroll down
        this.selectedDay =
          this.selectedDay === this.daysInMonth ? 1 : this.selectedDay + 1;
      } else {
        // Scroll up
        this.selectedDay =
          this.selectedDay === 1 ? this.daysInMonth : this.selectedDay - 1;
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
          this.selectedDay =
            this.selectedDay === 1 ? this.daysInMonth : this.selectedDay - 1;
        } else {
          this.selectedDay =
            this.selectedDay === this.daysInMonth ? 1 : this.selectedDay + 1;
        }
        this.dragStartY = event.clientY;
      }
    },
    stopDrag() {
      this.isDragging = false;
    },
    getOpacity(day) {
      const diff = Math.abs(day - this.selectedDay);
      return diff === 0 ? 1 : diff === 1 ? 0.6 : diff === 2 ? 0.3 : 0;
    },
  },
};
</script>

<style scoped>
/* Same styles as the Year Picker */
.picker {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
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
