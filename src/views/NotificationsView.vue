<template>
    <div class="notifications-container">
        <div class="notifications-container-title">
            <h1>Notifications</h1>
            <div class="unread-count" v-if="numberOfUnreadNotifications > 0">
                <p>{{ numberOfUnreadNotifications }}</p>
            </div>
        </div>
        <NotificationCard v-for="notification in notifications" :notification-item="notification"
            :key="notification.id"></NotificationCard>
    </div>
</template>

<script>
import NotificationCard from '@/components/cards/NotificationCard.vue';

export default {
    name: 'NotificationsView',
    components: { NotificationCard },
    data() {
        return {
            notifications: [
                {
                    id: 1,
                    requestStatus: true,
                    read: false,
                    coachName: "Lydia Emad",
                    userName: "Lydia Emad",
                    type: "SESSION_REQUEST",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
                {
                    id: 2,
                    requestStatus: false,
                    read: true,
                    coachName: "Mohiee Ezz",
                    userName: "Lydia Emad",
                    type: "SESSION_REQUEST",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
                {
                    id: 3,
                    requestStatus: false,
                    read: true,
                    coachName: "",
                    userName: "Lydia Emad",
                    type: "CANCELLATION",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
                {
                    id: 4,
                    requestStatus: false,
                    read: true,
                    coachName: "",
                    userName: "Lydia Emad",
                    type: "BIRTHDAY",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
                {
                    id: 5,
                    requestStatus: true,
                    read: true,
                    coachName: "Lydia Emad",
                    userName: "Lydia Emad",
                    type: "SESSION_REQUEST",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
                {
                    id: 6,
                    requestStatus: false,
                    read: true,
                    coachName: "Mohiee Ezz",
                    userName: "Lydia Emad",
                    type: "SESSION_REQUEST",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
                {
                    id: 7,
                    requestStatus: true,
                    read: true,
                    coachName: "Lydia Emad",
                    userName: "Lydia Emad",
                    type: "SESSION_REQUEST",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
                {
                    id: 8,
                    requestStatus: false,
                    read: true,
                    coachName: "Mohiee Ezz",
                    userName: "Lydia Emad",
                    type: "SESSION_REQUEST",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
                {
                    id: 9,
                    requestStatus: true,
                    read: true,
                    coachName: "Lydia Emad",
                    userName: "Lydia Emad",
                    type: "SESSION_REQUEST",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
                {
                    id: 10,
                    requestStatus: false,
                    read: true,
                    coachName: "Mohiee Ezz",
                    userName: "Lydia Emad",
                    type: "SESSION_REQUEST",//can be SESSION_REQUEST, BIRTHDAY, CANCELLATION
                    notificationDateTime: new Date(),
                },
            ]
        }
    },
    computed: {
        numberOfUnreadNotifications() {
            return this.notifications.filter(notif => !notif.read).length
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.notifications-container {
    display: flex;
    flex-direction: column;
    max-width: 390px;
    margin: 0 auto;
    position: relative;
    &-title {
        display: flex;
        align-items: center;
        column-gap: 8px;
        margin: 24px;

        h1 {
            font-family: 'ArchivoBlack-Regular';
            color: #212C2D;
            font-size: 20px;
        }

        .unread-count {
            width: 31px;
            height: 35px;
            border-radius: 137px;
            background-color: rgba(0, 68, 241, 0.1);
            color: #0044F1;
            font-family: 'Poppins-Medium';
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>