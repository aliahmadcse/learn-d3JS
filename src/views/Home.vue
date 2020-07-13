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
            h: 200,
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
            const svg = d3
                .select('#d3')
                .append('svg')
                .attr('width', this.w)
                .attr('height', this.h);

            svg.selectAll('rect')
                .data(this.dataSet)
                .enter()
                .append('rect')
                .attr('x', (data, index) => index * 35)
                .attr('y', d => this.h - d * 3)
                .attr('width', 25)
                .attr('height', d => d * 3)
                .attr('fill', 'navy');

            svg.selectAll('text')
                .data(this.dataSet)
                .enter()
                .append('text')
                .attr('x', (d, i) => i * 35)
                .attr('y', d => this.h - d * 3 - 5)
                .text(d => d)
                .attr('fill','red');
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
</style>