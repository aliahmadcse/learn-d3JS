<template>
    <div class="d3circle"></div>
</template>

<script>
import * as d3 from 'd3';
export default {
    name: 'CircularChart',
    data() {
        return {};
    },
    mounted() {
        this.circleChart();
    },
    methods: {
        circleChart() {
            d3.select('.d3circle')
                .append('h1')
                .text('hello World');
        }
    }
};
</script>

<style lang="scss" scoped>
</style>