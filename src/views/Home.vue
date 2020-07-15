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
            circleDataSet: [
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
            ],
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
            ],
            h: 200,
            w: 500
        };
    },

    mounted() {
        this.linearScale();
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
                .attr('fill', 'navy')
                .attr('class', 'bar')
                .append('title')
                .text(d => d);

            svg.selectAll('text')
                .data(this.dataSet)
                .enter()
                .append('text')
                .attr('x', (d, i) => i * 35)
                .attr('y', d => this.h - d * 3 - 5)
                .text(d => d)
                .attr('fill', 'red');
        },
        addCircle() {
            const svg = d3
                .select('#d3')
                .append('svg')
                .attr('width', 500)
                .attr('height', 500);

            svg.selectAll('circle')
                .data(this.circleDataSet)
                .enter()
                .append('circle')
                .attr('cx', d => d[0])
                .attr('cy', d => 500 - d[1])
                .attr('r', 5);

            svg.selectAll('text')
                .data(this.circleDataSet)
                .enter()
                .append('text')
                .attr('x', d => d[0] + 5)
                .attr('y', d => 500 - d[1])
                .text(d => `${d[0]}, ${d[1]}`);
        },
        linearScale() {
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
                .select('#d3')
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

<style lang="scss">
.bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
}
.bar:hover {
    fill: blueviolet;
}
</style>