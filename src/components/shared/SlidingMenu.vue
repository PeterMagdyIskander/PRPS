<template>
    <div>
      <!-- Trigger Button -->
      <button @click="openMenu">Open Menu</button>
  
      <!-- Sliding Menu -->
      <div
        class="sliding-menu"
        :class="{ 'is-open': isOpen }"
        ref="slidingMenu"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @mousedown="onMouseDown"
      >
        <div class="menu-content">
          <p>Sliding menu content goes here...</p>
          <button @click="closeMenu">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        startY: 0,
        currentY: 0,
        deltaY: 0,
        threshold: 100, // Threshold for closing
        isDragging: false, // Track dragging state
      };
    },
    methods: {
      openMenu() {
        this.isOpen = true;
      },
      closeMenu() {
        this.isOpen = false;
        this.resetPosition();
      },
      resetPosition() {
        // Reset the menu's position
        this.$refs.slidingMenu.style.transform = '';
      },
      onTouchStart(event) {
        this.startDrag(event.touches[0].clientY);
      },
      onTouchMove(event) {
        this.dragMove(event.touches[0].clientY);
      },
      onTouchEnd() {
        this.endDrag();
      },
      onMouseDown(event) {
        this.startDrag(event.clientY);
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseup', this.onMouseUp);
      },
      onMouseMove(event) {
        this.dragMove(event.clientY);
      },
      onMouseUp() {
        this.endDrag();
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);
      },
      startDrag(yPosition) {
        this.startY = yPosition;
        this.isDragging = true;
      },
      dragMove(yPosition) {
        if (this.isDragging) {
          this.currentY = yPosition;
          this.deltaY = this.currentY - this.startY;
  
          if (this.deltaY > 0) {
            // Move the menu downwards while dragging
            this.$refs.slidingMenu.style.transform = `translateY(${this.deltaY}px)`;
          }
        }
      },
      endDrag() {
        if (this.isDragging) {
          if (this.deltaY > this.threshold) {
            // Close the menu if the drag distance exceeds the threshold
            this.closeMenu();
          } else {
            // Reset the position if the drag is insufficient
            this.resetPosition();
          }
        }
        this.isDragging = false;
        this.deltaY = 0; // Reset delta
      },
    },
  };
  </script>
  
  <style scoped>
  /* General styles */
  .sliding-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: white;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(100%);
    transition: transform 0.3s ease;
    will-change: transform;
  }
  
  .sliding-menu.is-open {
    transform: translateY(0);
  }
  
  .menu-content {
    padding: 20px;
    text-align: center;
  }
  </style>
  