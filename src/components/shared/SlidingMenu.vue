<template>
  <div>
    <!-- Sliding Menu -->
    <div class="sliding-menu" :class="{ 'is-open': menuIsOpen }" ref="slidingMenu" @touchstart="onTouchStart"
      @touchmove="onTouchMove" @touchend="onTouchEnd" @mousedown="onMouseDown">
      <div class="menu-content">
        <div class="menu-content-close-bar" @click="closeMenu"></div>
        <div class="menu-content-header">
          <h1>{{ menuTitle }}</h1>
          <button @click="closeMenu">Close</button>
          <!-- Slot for custom content -->
        </div>
        <div class="menu-content-body">
          <slot></slot>
        </div>
        <div class="menu-content-footer">
          <button>
            {{ submitButtonTitle }}
          </button>
          <p>
            DISCLAIMER: {{ disclaimer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuTitle: {
      required: true,
      type: String,
      default: "Menu Title"
    },
    submitButtonTitle:{
      required: true,
      type: String,
      default: "Continue"
    },
    disclaimer:{
      required: true,
      type: String,
      default: "A fee will be applied to your next session for any cancelation"
    },
    menuIsOpen: {
      required: true,
      type: Boolean,
      default: false
    }
  },
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
    handleSlotClick() {
      console.log("Slot button clicked!");
      this.$emit("slot-button-clicked");
    },
    closeMenu() {
      this.isOpen = false;
      this.$emit('close')
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

<style lang="scss" scoped>
/* General styles */
.sliding-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 537px;
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
  height: 100%;
  max-width: 342px;
  margin: 0 auto;
  padding: 12px 24px 24px 24px;
  box-sizing: content-box;
  slot {
    width: fit-content;
    margin: 0 auto;
  }

  &-close-bar {
    width: 40px;
    height: 4px;
    border-radius: 10px;
    background-color: #9FA3A5;
    margin: 0 auto 12px auto;
    cursor: grab;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h1 {
      font-family: 'ArchivoBlack-Regular';
      font-size: 24px;
    }

    button {
      border: unset;
      background-color: #fff;
      font-family: 'Cairo-SemiBold';
      font-size: 18px;
      text-decoration: underline;
      color: #0044F1;

      &:disabled {
        color: #CFD1D2;
      }
    }
  }

  &-body {
    width: fit-content;
    margin: 0 auto 24px auto;
  }

  &-footer {
    width: 100%;
    button {
      font-family: 'Poppins-Regular';
      font-size: 18px;
      color: #fff;
      padding: 10px;
      border: 1px solid #0044F1;
      background-color: #0044F1;
      border-radius: 12px;
      width: 100%;
      margin-bottom: 8px;
    }
    p{
      font-family: 'Poppins-Regular';
      font-size: 14px;
      color: #535A5F;
    }
  }
}
</style>