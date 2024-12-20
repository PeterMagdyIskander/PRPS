<template>
  <div class="date-picker">
    <MonthPicker v-model="selectedMonth" />
    <DayPicker :month="selectedMonth" :year="selectedYear" v-model="selectedDay" />
    <YearPicker v-model="selectedYear" />
  </div>
</template>

<script>
import MonthPicker from './MonthPicker.vue';
import DayPicker from './DayPicker.vue';
import YearPicker from './YearPicker.vue';

export default {
  components: { MonthPicker, DayPicker, YearPicker },
  data() {
    return {
      selectedMonth: new Date().getMonth(),
      selectedDay: 1,
      selectedYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.date-picker {
  display: flex;
  gap: 1rem;
}
</style>