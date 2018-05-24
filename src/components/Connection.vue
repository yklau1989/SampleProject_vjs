<template>
    <div id="connection">
        <button v-on:click='getData'>Get Data</button>
        <br />
        {{ info }}
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'connection',
    data () {
        return {
            info: null
        }
    },
    methods: {
        getData: function () {
            axios
                .get('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => (this.info = response))
        }
    },
    mounted () {
        this.getData()
    }
}
</script>
<style scoped>
</style>
