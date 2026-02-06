<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["index"]);
const doneModel = defineModel<boolean>("done");
const titleModel = defineModel<string>("title");

const updateContent = (e: Event) => {
    const target = e.target as HTMLElement;
    titleModel.value = target.innerText;
};
</script>

<template>
    <div :class="['card', { done: done }]">
        <div>
            <div class="id">nr: {{ props.index }}</div>
            <div contenteditable @input="updateContent" v-once>
                {{ titleModel }}
            </div>
        </div>
        <div class="checkbox">
            <input type="checkbox" v-model="doneModel" />
        </div>
        <div class="slot">
            <slot :index="props.index" />
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
