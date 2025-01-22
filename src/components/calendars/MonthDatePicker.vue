<template>
  <div class="calendar">
    <div class="header">
      <img @click="changeMonth(-1)" src="@/assets/images/arrow-header.svg" alt="next button"
        style="transform: rotate(180deg);cursor: pointer;" :class="{ disabled: isCurrentMonth }">
      <div class="header-title"><span class="header-title-month">{{ monthName }} </span> <span>.</span> <span>{{
        currentYear
          }}</span></div>
      <img @click="changeMonth(1)" src="@/assets/images/arrow-header.svg" alt="next button" style="cursor: pointer;">
    </div>
    <div class="days">
      <div v-for="day in daysOfWeek" :key="day" class="day-name">{{ day }}</div>
    </div>
    <div class="dates">
      <div v-for="(day, index) in calendarDays" :key="index"
        :class="{ 'current-month': day.currentMonth, 'other-month': !day.currentMonth }">
        {{ day.date < 10 ? `0${day.date}` : day.date }} </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    const now = new Date();
    return {
      currentMonth: now.getMonth(),
      currentYear: now.getFullYear(),
      todayMonth: now.getMonth(),
      todayYear: now.getFullYear(),
      daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    };
  },
  computed: {
    monthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long' });
    },
    calendarDays() {
      const days = [];
      const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
      const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);

      // Days from the previous month
      const startDay = firstDayOfMonth.getDay();
      for (let i = startDay - 1; i >= 0; i--) {
        const date = new Date(this.currentYear, this.currentMonth, -i);
        days.push({ date: date.getDate(), currentMonth: false });
      }

      // Days in the current month
      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        days.push({ date: i, currentMonth: true });
      }

      // Days from the next month
      const endDay = lastDayOfMonth.getDay();
      for (let i = 1; i < 7 - endDay; i++) {
        const date = new Date(this.currentYear, this.currentMonth + 1, i);
        days.push({ date: date.getDate(), currentMonth: false });
      }

      return days;
    },
    isCurrentMonth() {
      return this.currentYear === this.todayYear && this.currentMonth === this.todayMonth;
    },
  },
  methods: {
    changeMonth(direction) {
      this.currentMonth += direction;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  width: 325px;
  margin: auto;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-title {
    align-self: center;
    display: flex;
    column-gap: 10px;
    align-items: center;
    font-family: 'Poppins-Regular';
    font-size: 18px;
    color: #9FA3A5;

    &-month {
      color: #212C2D;
    }
  }
}

.days,
.dates {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-family: 'Poppins-Medium';
}

.day-name,
.dates div {
  padding: 10px;
  text-align: center;
}

.day-name {
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: #535A5F;
}

.current-month {
  color: #212C2D;
}

.other-month {
  font-family: 'Poppins-Bold';
  color: #CFD1D2;
}

.disabled {
  visibility: hidden;
}
</style>