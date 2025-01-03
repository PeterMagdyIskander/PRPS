<template>
    <div class="my-bookings-card">
        <div class="my-bookings-card-info-container">
            <img src="@/assets/images/img-coach-placeholder.svg" alt="coach image">

            <div class="info">
                <h6 class="info-name">{{ bookingItem.name }}</h6>
                <h6 class="info-job">{{ bookingItem.job }}</h6>
            </div>
        </div>
        <div class="date-time-container">
            <span class="my-bookings-card-dateTime">{{ formattedDate }}</span>

            <span class="my-bookings-card-dateTime">{{ formattedTime }}</span>

        </div>

    </div>
</template>

<script>
export default {
    name: 'MyBookingCard',
    props: {
        bookingItem: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        }
    },
    computed: {
        formattedDate() {
            const day = this.bookingItem.dateTime.getDate();
            const month = this.bookingItem.dateTime.toLocaleString('default', { month: 'short' });
            return `${day} ${month}`;
        },
        formattedTime() {
            const hours = this.bookingItem.dateTime.getHours();
            const minutes = this.bookingItem.dateTime.getMinutes().toString().padStart(2, '0');
            const period = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12; // Convert to 12-hour format
            return `${formattedHours}:${minutes}${period}`;
        },
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.my-bookings-card {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-info-container {
        display: flex;
        align-items: center;
        column-gap: 8px;

        img {
            width: 60px;
            height: 60px;
            border-radius: 16px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 6px 0;

            &-name {
                color: #212C2D;
                font-family: 'Poppins-Medium';
                font-size: 16px;
            }

            &-job {
                font-family: 'Poppins-Regular';
                color: #535A5F;
                font-size: 14px;
            }
        }
    }

    .date-time-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &-dateTime {
        font-family: 'Poppins-Regular';
        font-size: 14px;
        color: #535A5F;
    }
}
</style>