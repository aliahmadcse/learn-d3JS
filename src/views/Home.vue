<template>
    <div>
        <div class="d3 mt-3"></div>
    </div>
</template>

<script>
// @ is an alias to /src
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