<template>
    <div>
        <h1>This is an about page</h1>
        <h2>Name:{{ name }}</h2>
    </div>
</template>


<script>
export default {
    name: 'About',
    computed: {
        name() {
            return this.$store.state.name;
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
