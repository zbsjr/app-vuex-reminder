<template>
    <div class="button">
        <button
            type="button"
            :style="`background: ${btnBgColor};`"
            @click="$emit('toggle-form')"
        >
            {{ btnText }}
        </button>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        btnBgColor: String,
        btnText: String,
    },
};
</script>

<style>
button {
    padding: 5px 0;
    width: 120px;
    color: #ffffff;
    border: 1px solid #2b7a28;
    cursor: pointer;
}
</style>