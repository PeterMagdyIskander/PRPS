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
          v-for="day in daysInMonth"
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
      month: { type: Number, required: true,default:0 }, // 0 = January
      year: { type: Number, required: true,default:2024 }, // Needed for leap year
    },
    data() {
      return {
        selectedDay: 1, // Default to the 1st day
        isDragging: false,
        dragStartY: 0,
      };
    },
    computed: {
      daysInMonth() {
        const days = new Date(this.year, this.month + 1, 0).getDate();
        return Array.from({ length: days }, (_, i) => i + 1);
      },
    },
    methods: {
      onScroll(event) {
        const delta = Math.sign(event.deltaY);
        if (delta > 0) {
          this.selectedDay =
            this.selectedDay === this.daysInMonth.length
              ? 1
              : this.selectedDay + 1;
        } else {
          this.selectedDay =
            this.selectedDay === 1
              ? this.daysInMonth.length
              : this.selectedDay - 1;
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
              this.selectedDay === 1
                ? this.daysInMonth.length
                : this.selectedDay - 1;
          } else {
            this.selectedDay =
              this.selectedDay === this.daysInMonth.length
                ? 1
                : this.selectedDay + 1;
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
  }  </style>
  