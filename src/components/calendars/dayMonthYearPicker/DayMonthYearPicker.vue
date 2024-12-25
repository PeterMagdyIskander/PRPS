<template>
  <div class="date-picker">
    <MonthPicker v-model="selectedMonth" @selectedMonth="setSelectedMonth" />
    <DayPicker :month="selectedMonth" :year="selectedYear" v-model="selectedDay" />
    <YearPicker v-model="selectedYear" @selectedYear="setSelectedYear" />
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
  methods: {
    setSelectedMonth(selectedMonth) {
      this.selectedMonth = selectedMonth
    },
    setSelectedYear(selectedYear) {
      this.selectedYear = selectedYear
    }
  }
};
</script>

<style lang="scss" scoped>
.date-picker {
  display: flex;
  gap: 1rem;
}
</style>