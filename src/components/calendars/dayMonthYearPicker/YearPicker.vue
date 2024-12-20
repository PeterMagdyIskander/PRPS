<template>
    <div
      class="year-picker"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @wheel="onScroll"
    >
      <div class="picker-wrapper">
        <div
          v-for="year in visibleYears"
          :key="year"
          :class="['picker-item', { selected: year === selectedYear }]"
          :style="{ opacity: getOpacity(year) }"
        >
          {{ year }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedYear: new Date().getFullYear(), // Current year
        visibleYears: [], // Years in view
        range: 5, // Number of years to display above and below
        isDragging: false, // Drag state
        dragStartY: 0, // Start position for drag
        dragOffset: 0, // Drag offset
      };
    },
    created() {
      this.initializeYears();
    },
    methods: {
      initializeYears() {
        this.updateVisibleYears();
      },
      updateVisibleYears() {
        this.visibleYears = Array.from(
          { length: this.range * 2 + 1 },
          (_, i) => this.selectedYear - this.range + i
        );
      },
      onScroll(event) {
        event.preventDefault();
        const delta = Math.sign(event.deltaY);
        if (delta > 0) {
          // Scroll down
          this.selectedYear++;
        } else {
          // Scroll up
          this.selectedYear--;
        }
        this.updateVisibleYears();
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
            // Dragging down
            this.selectedYear--;
          } else {
            // Dragging up
            this.selectedYear++;
          }
          this.dragStartY = event.clientY; // Reset for continuous drag
          this.updateVisibleYears();
        }
      },
      stopDrag() {
        this.isDragging = false;
      },
      getOpacity(year) {
        const diff = Math.abs(year - this.selectedYear);
        return diff === 0 ? 1 : diff === 1 ? 0.6 : diff === 2 ? 0.3 : 0;
      },
    },
  };
  </script>
  
  <style scoped>
  .year-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    overflow: hidden;
    cursor: grab;
  }
  
  .year-picker:active {
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
  
  .picker-item:not(.selected) {
    pointer-events: none;
  }
  </style>
  