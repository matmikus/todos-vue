<script setup lang="ts">
const props = defineProps<{
    data: { title: string; done: boolean; id: number };
}>();

const doneModel = defineModel<boolean>("done");
</script>

<template>
    <div :class="['card', { done: props.data.done }]">
        <div>
            <div class="id">id: {{ props.data.id }}</div>
            <div>title: {{ props.data.title }}</div>
            <div>done: {{ props.data.done }}</div>
        </div>
        <div class="checkbox">
            <input type="checkbox" v-model="doneModel" />
        </div>
        <div class="slot">
            <slot :id="props.data.id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border-radius: 8px;
    border: 1px solid #444;
    padding: 8px;
    display: flex;

    .id {
        color: #aaa;
    }

    &.done {
        border-color: darkgreen;
    }

    .checkbox,
    .slot {
        display: flex;
        align-items: center;
        margin: 0 8px 0 16px;

        input {
            transform: scale(2);
        }
    }
}
</style>
