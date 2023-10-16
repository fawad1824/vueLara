<template>
    <div>
        <h1>My Vue 3 App</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    setup: () => ({
        title: "welcome bro",
    }),
};
</script>

<style>
/* Add your CSS styles here */
</style>
