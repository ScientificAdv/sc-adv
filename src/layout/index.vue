<template>
    <div id="navbar">
        {{msg}}
        <el-button type="primary"></el-button>
    </div>
</template>

<script>
import { Button } from 'element-ui'
export default {
    name:'navbar',
    components: {
        [Button.name]:Button
    },
    data() {
        return{
            msg:'aaaa'
        }
    }
}
</script>

<style scoped>

</style>