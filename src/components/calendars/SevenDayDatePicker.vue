<!-- <template>
<div class="date-picker">

</div>
</template>
<script>
export default {
    name: "SevenDayDatePicker",
}
</script>

<style lang="scss" scoped>
.date-picker{
    width: 100%;
    padding: 16px;
    background-color: #F6F6F6;
}
</style> -->
<template>
    <div class="week-picker">
      <div class="header">
        <!-- Header showing the first and last days of the week -->
        {{ weekRange }}
      </div>
  
      <button @click="previousWeek">Previous Week</button>
      
      <div class="days">
        <div v-for="(day, index) in weekDays" :key="index" class="day">
          {{ formatDate(day) }}
        </div>
      </div>
  
      <button @click="nextWeek">Next Week</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
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
      formatDate(date) {
        return date.toLocaleDateString('en-US', {
          weekday: 'short',
          day: 'numeric',
          month: 'short'
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .week-picker {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .days {
    display: flex;
    gap: 1rem;
  }
  .day {
    padding: 0.5rem;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  </style>
  