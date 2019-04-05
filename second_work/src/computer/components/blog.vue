//连接数据库测试


<template>
    <div class="">
        <el-input v-model="inpContent"></el-input>
        <el-button type="primary" @click="getValue">获取数据</el-button>
        <el-button type="primary" @click="setValue">添加数据</el-button>

        {{inpContent}}
    </div>
</template>

<script>
    export default {
        name: 'blog',
        data() {
            return {
                inpContent: ''
            }
        },
        methods: {
            getValue() {
                let that=this
                // axios.get('/', {params: ''})
                this.$ajax.get('/api/getValue', {
                    params: {id: 1}
                }).then( (res) => {
                    console.log('res', res);
                    8
                    console.log('res+++++++++++++++++++++', that.inpContent);
                })
            },
            setValue() {
                // axios.post('/', {})
                this.$ajax.post('/api/setValue', {
                    id: 1, name: this.inpContent
                }).then( (res) => {
                    console.log('res', res);
                })
            }
        }
    }
</script>