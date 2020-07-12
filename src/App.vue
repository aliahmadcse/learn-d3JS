<template>
    <div id="app">
        <nav-bar />
        <router-view class="container" />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        NavBar
    }
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
