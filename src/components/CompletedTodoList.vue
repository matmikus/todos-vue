<script setup lang="ts">
import { watch, computed } from "vue";
import { useTodosStore } from "@/stores/todos";
import TodoItem from "./TodoItem.vue";

const todos = useTodosStore();
const completedTodos = computed(() => {
    return todos.items.filter((el) => el.done);
});

watch(
    () => todos.items.length,
    (newLen, oldLen) => {
        console.log(
            oldLen - newLen > 0 ? "usunięto element" : "dodano element",
        );
    },
);
</script>

<template>
    <div>
        <div class="header">
            <div>COMPLETED TODOS</div>
        </div>
        <div class="items">
            <TodoItem
                v-for="(item, index) in completedTodos"
                :key="index"
                :index="index"
                :readonly="true"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    padding: 8px;
    display: flex;
    align-items: center;
}

.items {
    display: flex;
    gap: 8px;
}

.button {
    border-radius: 4px;
    border: 1px solid gray;
    padding: 0 4px 2px 4px;
    margin: 0 8px;
    cursor: pointer;
}
</style>
