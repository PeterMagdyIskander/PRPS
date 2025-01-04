<template>
    <div class="my-bookings-container">
        <div class="my-bookings-container-title">
            <h1>My bookings</h1>
        </div>
        <nav>
            <ul class="nav-items-container">
                <li @click="selectedIndex = 0">
                    <div :class="{ 'selected': selectedIndex == 0 }"><a href="#">Pending</a></div>
                </li>
                <li @click="selectedIndex = 1">
                    <div :class="{ 'selected': selectedIndex == 1 }"><a href="#">Upcoming</a></div>
                </li>
                <li @click="selectedIndex = 2">
                    <div :class="{ 'selected': selectedIndex == 2 }"><a href="#">History</a></div>
                </li>
            </ul>
        </nav>
        <MonthDatePicker></MonthDatePicker>
        <div class="my-bookings-container-card-container">
            <MyBookingsCard v-for="item in bookingsData" :bookingItem="item" :key="item.id">
            </MyBookingsCard>
        </div>
    </div>
</template>

<script>
import MonthDatePicker from '@/components/calendars/MonthDatePicker.vue';
import MyBookingsCard from '@/components/cards/MyBookingsCard.vue';

export default {
    name: 'MyBookingsView',
    components: { MonthDatePicker, MyBookingsCard },
    data() {
        return {
            selectedIndex: 0,
            bookingsData: [
                {
                    id: 1,
                    dateTime: new Date(),
                    job: "Product designer",
                    name: "Mohie Ezz",
                },
                {
                    id: 2,
                    dateTime: new Date(),
                    job: "Product designer",
                    name: "Lydia Emad",
                },
                {
                    id: 3,
                    dateTime: new Date(),
                    job: "Product designer",
                    name: "Peter Iskander",
                },
                {
                    id: 4,
                    dateTime: new Date(),
                    job: "Product designer",
                    name: "Mohie Ezz",
                },
                {
                    id: 5,
                    dateTime: new Date(),
                    job: "Product designer",
                    name: "Lydia Emad",
                },
                {
                    id: 6,
                    dateTime: new Date(),
                    job: "Product designer",
                    name: "Peter Iskander",
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.my-bookings-container {
    display: flex;
    flex-direction: column;
    max-width: 390px;
    row-gap: 24px;
    padding: 16px 24px 24px 24px;
    margin: 0 auto;
    position: relative;

    &-title {
        display: flex;
        align-items: center;
        margin-top: 8px;
        column-gap: 8px;

        h1 {
            font-family: 'ArchivoBlack-Regular';
            color: #212C2D;
            font-size: 20px;
        }

    }

    nav {
        width: 100%;
    }

    .nav-items-container {
        width: 100%;
        padding: 4px;
        background-color: #F3F3F3;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        li {
            list-style: none;
            width: 112px;
            height: 36px;
            font-family: 'Poppins-Regular';
            font-size: 14px;
            color: #212C2D;

            cursor: pointer;

            div {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            a {
                all: unset;
            }

            .selected {
                background-color: #fff;
                border-radius: 12px;
            }
        }
    }

    &-card-container {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }
}
</style>