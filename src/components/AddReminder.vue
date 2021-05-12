<template>
    <div class="add-reminder">
        <input type="text" v-model="title" placeholder="Type a reminder" />
        <button type="button" @click="saveReminder" :disabled="title === ''">
            Save
        </button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "AddReminder",
    data() {
        return {
            title: "",
        };
    },
    methods: {
        ...mapActions(["POST_REMINDER"]),
        saveReminder() {
            this.POST_REMINDER(this.title);
        },
    },
};
</script>

<style scoped>
.add-reminder {
    display: flex;
    margin-bottom: 15px;
}

input {
    width: 100%;
    padding: 5px 10px;
}

button {
    width: 100px;
    padding: 5px 10px;
    background: #489457;
    border: 1px solid #78ce8a;
    color: #ffffff;
    cursor: pointer;
}
</style>