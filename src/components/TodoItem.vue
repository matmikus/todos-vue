<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";

const todos = useTodosStore();
const { index, readonly = false } = defineProps(["index", "readonly"]);
</script>

<template>
    <div :class="['card', { done: done }]">
        <div>
            <div class="id">nr: {{ index }}</div>
            <input v-model="todos.items[index].title" />
        </div>
        <div v-if="!readonly" class="checkbox">
            <input type="checkbox" v-model="todos.items[index].done" />
        </div>
        <div v-if="!readonly" class="removeIcon">
            <div
                style="cursor: pointer; transform: scale(1.5)"
                @click="todos.removeTodo(index)"
            >
                ✕
            </div>
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
    .removeIcon {
        display: flex;
        align-items: center;
        margin: 0 8px 0 16px;

        input {
            transform: scale(2);
        }
    }
}
</style>
