<template>
    <div>Experimenting</div>
</template>

<script>
export default {
    created() {
        fetch('https://www.freecodecamp.org/json/cats.json')
            .then(res => res.json)
            .then(data => console.log(data));
    }
};
</script>

<style lang="scss" scoped>
</style>