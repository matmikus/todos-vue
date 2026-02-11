<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
</script>

<template>
    <nav>
        <RouterLink to="/">All</RouterLink> |
        <RouterLink to="/completed">Completed</RouterLink>
    </nav>
    <RouterView />
</template>

<style>
body {
    background: #333;
    color: #eee;
    font-family: Verdana;
}
</style>
