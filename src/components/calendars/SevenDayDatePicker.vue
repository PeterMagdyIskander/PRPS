<template>
  <div class="date-picker">
    <div class="date-picker-header">
      <img @click="previousWeek" src="@/assets/images/next-prev-month.svg" alt="previous button"
        style="cursor: pointer;">
      <p>{{ weekRange }}</p>
      <img @click="nextWeek" src="@/assets/images/next-prev-month.svg" alt="next button"
        style="transform: rotate(180deg);cursor: pointer;">
    </div>
    <div class="date-picker-days">
      <div v-for="(day, index) in weekDays" :key="index" class="date-picker-days-day">
        <p class="letter">{{ getFirstLetterOfDay(day) }}</p>
        <p class="number" :class="{ faded: index == 0 || index == 1, 'today': isToday(day) }">{{ getDayOfMonth(day) }}
        </p>
      </div>
    </div>
  </div>
  <div class="no-sessions">
    <img src="@/assets/images/book-session.svg" alt="book session">
    <p>You have no upcoming sessions</p>
  </div>
</template>
<script>
export default {
  name: "SevenDayDatePicker", data() {
    return {
      // Start with the Saturday of the current week
      referenceDate: this.getCurrentSaturday(new Date())
    };
  },
  computed: {
    // Generates the days of the current week from Saturday to Friday
    weekDays() {
      const days = [];
      for (let i = 0; i < 7; i++) {
        let day = new Date(this.referenceDate);
        day.setDate(this.referenceDate.getDate() + i);
        days.push(day);
      }
      return days;
    },
    // Generates the range of the week to show in the header (firstDay - lastDay)
    weekRange() {
      const firstDay = this.weekDays[0];
      const lastDay = this.weekDays[6];
      return `${firstDay.getDate()} ${firstDay.toLocaleString('en-US', { month: 'short' })} - ${lastDay.getDate()} ${lastDay.toLocaleString('en-US', { month: 'short' })}`;
    }
  },
  methods: {
    // Get the nearest previous or current Saturday
    getCurrentSaturday(date) {
      const dayOfWeek = date.getDay();
      const diff = (dayOfWeek + 1) % 7;
      const saturday = new Date(date);
      saturday.setDate(date.getDate() - diff);
      return saturday;
    },
    // Move to the previous week
    previousWeek() {
      const previousSaturday = new Date(this.referenceDate);
      previousSaturday.setDate(this.referenceDate.getDate() - 7);
      this.referenceDate = previousSaturday;
    },
    // Move to the next week
    nextWeek() {
      const nextSaturday = new Date(this.referenceDate);
      nextSaturday.setDate(this.referenceDate.getDate() + 7);
      this.referenceDate = nextSaturday;
    },
    // Format each day for display in the grid
    getFirstLetterOfDay(date) {
      const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
      return daysOfWeek[date.getDay()];
    },
    getDayOfMonth(date) {
      return date.getDate().toString().padStart(2, '0');
    },
    isToday(date) {
      const today = new Date();
      return date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.date-picker {
  width: 100%;
  padding: 16px;
  background-color: #F6F6F6;
  border-radius: 20px;
  margin-bottom: 16px;

  &-header {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 27px;
    justify-content: space-between;

    p {
      font-family: 'Poppins-Medium';
      font-size: 16px;
      color: #212C2D;
    }
  }

  &-days {
    display: flex;
    justify-content: space-between;
    margin-bottom: 27px;

    &-day {
      display: flex;
      flex-direction: column;
      row-gap: 24px;

      .letter {
        width: 42px;
        font-family: 'Poppins-Medium';
        font-size: 14px;
        color: #535A5F;
        text-align: center;
      }

      .number {
        width: 42px;
        font-family: 'Poppins-Medium';
        font-size: 14px;
        color: #212C2D;
        text-align: center;
      }

      .faded {
        color: #CFD1D2;
      }

      .today {
        background-color: #0044F1;
        border-radius: 136px;
        color: #fff;
      }
    }

  }
}

.no-sessions {
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-bottom: 24px;
  p {
    font-family: 'Poppins-Medium';
    font-size: 16px;
    color: #535A5F;
  }
}
</style>
