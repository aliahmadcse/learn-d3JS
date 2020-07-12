<template>
    <div>
        <div class="mt-3" id="d3"></div>
    </div>
</template>

<script>
import * as d3 from 'd3';
export default {
    name: 'Home',

    data() {
        return {
            dataSet: [12, 31, 22, 17, 25, 18, 29, 14, 9],
            h: 100,
            w: 500
        };
    },

    mounted() {
        this.addSvg();
    },

    methods: {
        appendElement() {
            d3.select('#d3')
                .selectAll('div')
                .data(this.dataSet)
                .enter()
                .append('div')
                .attr('class', 'bar')
                .style('height', d => d * 10 + 'px');
        },
        addSvg() {
            d3.select('#d3')
                .append('svg')
                .attr('width', this.w)
                .attr('height', this.h);
        }
    }
};
</script>

<style lang="scss">
.bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
}
svg {
    background-color: burlywood;
}
</style>