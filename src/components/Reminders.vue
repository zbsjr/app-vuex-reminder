<template>
    <div class="reminders">
        <div
            v-for="reminder in GET_REMINDERS"
            :key="reminder.id"
            :class="`${reminder.completed ? 'completed' : ''} reminder`"
            @dblclick="toggleReminder(reminder)"
        >
            <h2>
                {{ reminder.title }}
            </h2>
            <span @click="REMOVE_REMINDER(reminder.id)">&times;</span>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Reminders",
    computed: mapGetters(["GET_REMINDERS"]),
    methods: {
        ...mapActions([
            "FETCH_REMINDERS",
            "TOGGLE_REMINDER",
            "REMOVE_REMINDER",
        ]),
        toggleReminder(reminder) {
            const toggledReminder = {
                userId: reminder.userId,
                id: reminder.id,
                title: reminder.title,
                completed: !reminder.completed,
            };

            this.TOGGLE_REMINDER(toggledReminder);
        },
    },
    created() {
        this.FETCH_REMINDERS();
    },
};
</script>

<style scoped>
.reminder {
    display: flex;
    align-items: center;
    background: #b0c5ff;
    border: 1px solid #e2e2e2;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 5px;
    cursor: pointer;
}

.reminder:last-child {
    margin-bottom: 0;
}

.reminder span {
    flex: 1;
    cursor: pointer;
}

.reminder h2 {
    flex: 11;
    font-size: 18px;
    margin: 0 10px;
    font-weight: 400;
}

.reminder span {
    display: block;
    flex-grow: 0;
    background: #ff5353;
    border: 1px solid #ff8787;
    border-radius: 50%;
    text-align: center;
    color: #ffffff;
    padding: 0 6px;
}

.reminder.completed {
    background: #e6e6e6;
}

.reminder.completed h2 {
    text-decoration: line-through;
}
</style>
