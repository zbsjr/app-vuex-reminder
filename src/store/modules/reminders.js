import axios from "axios";

const state = {
    reminders: [],
};

const getters = {
    GET_REMINDERS: (state) => state.reminders,
};

const actions = {
    async FETCH_REMINDERS({ commit }) {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );

        commit("SET_REMINDERS", res.data);
    },
    async TOGGLE_REMINDER({ commit }, reminder) {
        const res = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${reminder.id}`,
            reminder
        );

        commit("UPDATE_REMINDER", res.data);
    },
    async REMOVE_REMINDER({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit("DELETE_REMINDER", id);
    },
    async FILTER_REMINDER({ commit }, limit) {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`
        );

        commit("SET_REMINDERS", res.data);
    },
    async POST_REMINDER({ commit }, title) {
        const res = await axios.post(
            "https://jsonplaceholder.typicode.com/todos/",
            {
                userId: 1,
                title: title,
                completed: false,
            }
        );

        commit("SAVE_REMINDER", res.data);
    },
};

const mutations = {
    SET_REMINDERS: (state, reminders) => (state.reminders = reminders),
    UPDATE_REMINDER: (state, data) =>
        (state.reminders = state.reminders.map((reminder) =>
            reminder.id === data.id
                ? { ...reminder, completed: data.completed }
                : reminder
        )),
    DELETE_REMINDER: (state, id) =>
        (state.reminders = state.reminders.filter(
            (reminder) => reminder.id !== id
        )),
    SAVE_REMINDER: (state, reminder) => state.reminders.unshift(reminder),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
