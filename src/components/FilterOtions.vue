<template>
    <div class="filter-options">
        <strong>Filter:</strong>
        <select v-model="filters" @change="filterOptions">
            <option value="">All</option>
            <option>200</option>
            <option>100</option>
            <option>50</option>
            <option>20</option>
            <option>10</option>
            <option>5</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "FilterOptions",
    data() {
        return {
            filters: "",
        };
    },
    methods: {
        ...mapActions(["FILTER_REMINDER"]),
        filterOptions() {
            this.FILTER_REMINDER(this.filters);
        },
    },
};
</script>

<style scoped>
.filter-options {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

select {
    width: 20%;
    padding: 5px 0;
    margin-left: 5px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
}
</style>