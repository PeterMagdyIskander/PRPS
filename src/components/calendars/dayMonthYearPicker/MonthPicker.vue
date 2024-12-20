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
          v-for="(month, index) in months"
          :key="index"
          :class="['picker-item', { selected: index === selectedMonth }]"
          :style="{ opacity: getOpacity(index) }"
        >
          {{ month }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedMonth: new Date().getMonth(), // Current month (0 = January)
        months: [
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
        isDragging: false,
        dragStartY: 0,
      };
    },
    methods: {
      onScroll(event) {
        const delta = Math.sign(event.deltaY);
        if (delta > 0) {
          this.selectedMonth = (this.selectedMonth + 1) % 12;
        } else {
          this.selectedMonth =
            (this.selectedMonth - 1 + 12) % 12; // Wrap around backwards
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
            this.selectedMonth = (this.selectedMonth - 1 + 12) % 12;
          } else {
            this.selectedMonth = (this.selectedMonth + 1) % 12;
          }
          this.dragStartY = event.clientY;
        }
      },
      stopDrag() {
        this.isDragging = false;
      },
      getOpacity(index) {
        const diff = Math.abs(index - this.selectedMonth);
        return diff === 0 ? 1 : diff === 1 ? 0.6 : diff === 2 ? 0.3 : 0;
      },
    },
  };
  </script>
  
  <style scoped>
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
  