//连接数据库测试


<template>
    <div class="">
        <el-input v-model="inpContent"></el-input>
        <el-button type="primary" @click="getValue">获取数据</el-button>
        <el-button type="primary" @click="setValue">添加数据</el-button>
        <el-button type="primary" @click="getUsername">获用户</el-button>
        <el-button type="primary" @click="setApply">写入</el-button>

        {{res.data}}
    </div>
</template>

<script>
    export default {
        name: 'blog',
        data() {
            return {
                inpContent: '',
                res:[],
                num:1
            }
        },
        methods: {
            setApply(){
                console.error("验证通过")
                this.$ajax.post('/api/setValue', {
                     id: 12345,name:"wwww"
                }).then( (res) => {
                    console.log('res', res);

                })
            },
            getUsername() {
                let that=this
                // axios.get('/', {params: ''})
                this.$ajax.get('/api/getUsername', {
                    params: {username: "admin"}
                }).then( (res) => {
                    that.res=res
                    console.log('res', this.res);
                    console.log('res.data[0].name=', this.res.data[0].name);
                    console.log('res+++++++++++++++++++++', that.inpContent);
                })
            },
            getValue() {
                let that=this
                // axios.get('/', {params: ''})
                this.$ajax.get('/api/getValue', {
                    params: {id: 2}
                }).then( (res) => {
                    that.res=res
                    console.log('res', this.res);
                    console.log('res.data[0].name=', this.res.data[0].name);
                    console.log('res+++++++++++++++++++++', that.inpContent);
                })
            },
            setValue() {
                // axios.post('/', {})
                this.$ajax.post('/api/setValue', {
                    id: 2, name: this.inpContent
                }).then( (res) => {
                    console.log('res', res);
                })
            }
        }
    }
</script>