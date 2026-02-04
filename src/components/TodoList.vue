<script setup lang="ts">
import { reactive } from "vue";
import TodoItem from "./TodoItem.vue";

const items = reactive([
    { id: 1, title: "Learn Vue", done: true },
    { id: 2, title: "Learn Nuxt", done: false },
]);

const removeItem = (id: number) => {
    const index = items.findIndex((el) => el.id === id);
    if (index !== -1) items.splice(index, 1);
};
</script>

<template>
    <div>
        <div class="header">TODOS</div>
        <div class="items">
            <TodoItem
                v-for="item in items"
                :key="item.id"
                :data="item"
                v-model:done="item.done"
            >
                <template #default="{ id }">
                    <div style="cursor: pointer" @click="removeItem(id)">✕</div>
                </template>
            </TodoItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    padding: 8px;
}

.items {
    display: flex;
    gap: 8px;
}
</style>
