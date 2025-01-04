<template>
    <div class="notification-card" :class="{ 'unread': !notificationItem.read }">
        <span v-if="!notificationItem.read" class="notification-card-unread"></span>
        <img v-if="notificationItem.type === 'SESSION_REQUEST'" src="@/assets/images/img-coach-placeholder.svg"
            alt="coach image">
        <div v-else class="notification-card-icon"
            :class="{ 'birthday': notificationItem.type === 'BIRTHDAY', 'cancellation': notificationItem.type === 'CANCELLATION', }">
            <img v-if="notificationItem.type === 'BIRTHDAY'" src="@/assets/images/cake.svg" alt="birthday cake">
            <img v-if="notificationItem.type === 'CANCELLATION'" src="@/assets/images/warning-2.svg" alt="warning icon">
        </div>
        <div class="notification-card-info">
            <p v-if="notificationItem.type === 'SESSION_REQUEST'">Session request <span
                    class="notification-card-info-bolded">{{ notificationItem.requestStatus ?
                        "approved" : "declined" }}</span> by <span class="notification-card-info-name">{{
                        notificationItem.coachName }}</span>.</p>
            <p v-if="notificationItem.type === 'CANCELLATION'">A <span
                    class="notification-card-info-bolded">Cancellation
                    Fee</span> will be applied to your next session!</p>
            <p v-if="notificationItem.type === 'BIRTHDAY'">Happy birthday <span class="notification-card-info-name">{{
                notificationItem.userName }}</span>🎉🎉🎉</p>


            <span class="notification-card-info-time">{{ formattedTime }}</span>
        </div>
        <span class="notification-card-date">{{ formattedDate }}</span>
    </div>
</template>

<script>
export default {
    name: 'NotificationCard',
    props: {
        notificationItem: {
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
            const day = this.notificationItem.notificationDateTime.getDate();
            const month = this.notificationItem.notificationDateTime.toLocaleString('default', { month: 'short' });
            return `${day} ${month}`;
        },
        formattedTime() {
            const hours = this.notificationItem.notificationDateTime.getHours();
            const minutes = this.notificationItem.notificationDateTime.getMinutes().toString().padStart(2, '0');
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

.notification-card {
    width: 100%;
    height: 114px;
    padding: 16px 24px;
    position: relative;
    display: flex;
    column-gap: 12px;

    border-bottom: 1px solid #D7DBDF;
    &-unread {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #0044F1;
        position: absolute;
        left: 8px;
        top: 56px;
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 16px;
    }

    .birthday {
        background-color: #F6F6F6;
    }

    .cancellation {
        background-color: rgba(255, 46, 54, 0.1);
    }

    &-icon {
        width: 60px;
        height: 60px;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 32px;
            height: 32px;
        }
    }

    &-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-family: 'Poppins-Regular';
            font-size: 16px;
            color: #535A5F;
        }

        &-bolded {
            font-family: 'Poppins-Medium';
            color: #212C2D;
        }

        &-name {
            font-family: 'Poppins-Bold';
            color: #0044F1;
        }

        &-time {
            font-family: 'Poppins-Regular';
            font-size: 12px;
            color: #535A5F;
        }
    }

    &-date {
        padding: 2px 6px;
        background-color: #EAEEF2;
        border-radius: 4px;
        align-self: center;
        font-family: 'Poppins-Medium';
        font-size: 12px;
        color: #6E7781;
    }

}

.unread {
    background-color: #F6F6F6;
}
</style>