<template>
    <div class="d3circle"></div>
</template>

<script>
import * as d3 from 'd3';
export default {
    name: 'CircularChart',
    data() {
        return {
            linearDataSet: [
                [34, 78],
                [109, 280],
                [310, 120],
                [79, 411],
                [420, 220],
                [233, 145],
                [333, 96],
                [222, 333],
                [78, 320],
                [21, 123]
            ]
        };
    },
    mounted() {
        this.circleChart();
    },
    methods: {
        circleChart() {
            const w = 500;
            const h = 500;
            // Padding between the SVG canvas boundary and the plot
            const padding = 30;

            const xScale = d3
                .scaleLinear()
                .domain([0, d3.max(this.linearDataSet, d => d[0])])
                .range([padding, w - padding]);

            const yScale = d3
                .scaleLinear()
                .domain([0, d3.max(this.linearDataSet, d => d[1])])
                .range([h - padding, padding]);

            const svg = d3
                .select('.d3circle')
                .append('svg')
                .attr('width', w)
                .attr('height', h);

            svg.selectAll('circle')
                .data(this.linearDataSet)
                .enter()
                .append('circle')
                .attr('cx', d => xScale(d[0]))
                .attr('cy', d => yScale(d[1]))
                .attr('r', 5);

            svg.selectAll('text')
                .data(this.linearDataSet)
                .enter()
                .append('text')
                .text(d => d[0] + ', ' + d[1])
                .attr('x', d => xScale(d[0] + 10))
                .attr('y', d => yScale(d[1]));

            const xAxis = d3.axisBottom(xScale);
            const yAxis = d3.axisLeft(yScale);

            svg.append('g')
                .attr('transform', `translate(0,${h - padding})`)
                .call(xAxis);

            svg.append('g')
                .attr('transform', `translate(${padding},0)`)
                .call(yAxis);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>