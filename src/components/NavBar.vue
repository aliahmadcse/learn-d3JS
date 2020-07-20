<template>
    <div id="nav">
        <nav class="navbar navbar-expand-md navbar-light bg-light shadow-sm">
            <div class="container">
                <a class="navbar-brand text-gray" href>Learninng D3.Js</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto"></ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link" :to="{name:'Home'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'About'}">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'Barchart'}">Barchart</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'CircularChart'}">CircularChart</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>