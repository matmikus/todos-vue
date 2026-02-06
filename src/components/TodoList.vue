<script setup lang="ts">
import { reactive, computed, watch, toRaw } from "vue";
import TodoItem from "./TodoItem.vue";

const items = reactive([
    { title: "Learn Vue", done: true },
    { title: "Learn Nuxt", done: false },
]);

const removeItem = (index: number) => {
    console.log("removeitem " + index);
    items.splice(index, 1);
};

const addItem = () => {
    items.push({ title: "Write todo here", done: false });
};

const doneCount = computed(() => {
    return items.filter((el) => el.done).length;
});

watch(
    () => items.length,
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
            <div>TODOS</div>
            <div class="button" @click="addItem">+</div>
            <div>{{ doneCount }} / {{ items.length }}</div>
        </div>
        <div class="items">
            <TodoItem
                v-for="(item, index) in items"
                :key="index"
                :index="index"
                v-model:done="item.done"
                v-model:title="item.title"
            >
                <template #default="{ index }">
                    <div
                        style="cursor: pointer; transform: scale(1.5)"
                        @click="removeItem(index)"
                    >
                        ✕
                    </div>
                </template>
            </TodoItem>
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
