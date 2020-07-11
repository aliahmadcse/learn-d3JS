<template>
    <div>
        <h1 class="text-center">Home View</h1>
        <div class="d3"></div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import * as d3 from 'd3';
export default {
    name: 'Home',
    data() {
        return {};
    },

    mounted() {
        this.appendElement();
    },

    methods: {
        appendElement() {
            d3.select('.d3')
                .append('h1')
                .text('Learning D3');
        }
    }
};
</script>

<style lang="scss" scoped>
</style>