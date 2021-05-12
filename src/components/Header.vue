<template>
    <div class="header">
        <h1>Reminders</h1>
        <Button
            :btnBgColor="toggleAddForm ? 'gray' : 'green'"
            :btnText="toggleAddForm ? 'Close' : 'Add Reminder'"
            @toggle-form="$emit('toggle-form')"
        />
    </div>
</template>

<script>
import Button from "./Button";

export default {
    name: "Header",
    components: {
        Button,
    },
    props: {
        toggleAddForm: Boolean,
    },
};
</script>

<style scoped>
h1 {
    font-size: 20px;
    font-family: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}
</style>