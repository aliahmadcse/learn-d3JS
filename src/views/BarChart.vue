<template>
    <div class="d3js"></div>
</template>

<script>
import * as d3 from 'd3';
export default {
    name: 'Practice',
    data() {
        return {
            dataSet: [12, 31, 22, 17, 25, 18, 29, 14, 9],
            h: 300,
            w: 500,
            padding: 30
        };
    },
    mounted() {
        this.barChart();
    },
    methods: {
        xScale() {
            return d3
                .scaleLinear()
                .domain([0, d3.max(this.dataSet)])
                .range([this.padding, this.w]);
        },
        yScale() {
            return d3
                .scaleLinear()
                .domain([0, d3.max(this.dataSet)])
                .range([this.h - this.padding, this.padding]);
        },
        barChart() {
            const svg = d3
                .select('.d3js')
                .append('svg')
                .attr('height', this.h)
                .attr('width', this.w);

            svg.selectAll('rect')
                .data(this.dataSet)
                .enter()
                .append('rect')
                .attr('height', d => d * 7)
                .attr('width', 25)
                .attr('x', (d, i) => i * 36 + this.padding + 10)
                .attr('y', d => this.h - this.padding - d * 7)
                .attr('fill', 'navy')
                .append('title')
                .text(d => d);

            svg.selectAll('text')
                .data(this.dataSet)
                .enter()
                .append('text')
                .attr('x', (d, i) => i * 35 + this.padding + 10)
                .attr('y', d => this.h - d * 7 - this.padding -10)
                .text(d => d);

            const xScale = this.xScale();
            const yScale = this.yScale();

            const xAxis = d3.axisBottom(xScale);
            const yAxis = d3.axisLeft(yScale);

            svg.append('g')
                .attr('transform', `translate(0,${this.h - this.padding})`)
                .call(xAxis);

            svg.append('g')
                .attr('transform', `translate(${this.padding},0)`)
                .call(yAxis);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>