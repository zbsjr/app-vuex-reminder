<template>
    <div id="app">
        <div class="container">
            <Header
                @toggle-form="toggleForm"
                :toggleAddForm="toggleAddReminder"
            />
            <AddReminder v-if="toggleAddReminder" />
            <FilterOtions />
            <Reminders />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";
import AddReminder from "./components/AddReminder";
import FilterOtions from "./components/FilterOtions";
import Reminders from "./components/Reminders";

export default {
    name: "App",
    data() {
        return {
            toggleAddReminder: false,
        };
    },
    components: {
        Header,
        AddReminder,
        FilterOtions,
        Reminders,
    },
    methods: {
        toggleForm() {
            this.toggleAddReminder = !this.toggleAddReminder;
        },
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #2c3e50;
}

#app {
    margin: 0 20px;
}

.container {
    max-width: 500px;
    width: 100%;
    padding: 20px;
    margin: 30px auto;
    border: 1px solid #2c3e50;
    border-radius: 4px;
}
</style>
