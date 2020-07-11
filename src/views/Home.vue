<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="This message is passed from home component to helloWorld" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld
    }
};
</script>
