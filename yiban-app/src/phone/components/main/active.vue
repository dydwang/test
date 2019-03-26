<template>

    <div
            style="margin-top: 20px;
                   width:100%;height: 320px;float: left;">
        <div v-for="(list, index) in lists" :key="index" v-if="display(list.sport,list.newtime)" >
            <div style="width: 100%;height: 240px;float: left;">
                <img
                        style="width: 100%;height: 240px "
                        v-bind:src="list.thumbnail_pic_s"/>
            </div>

            <div style="width: 100%;height: 60px;float: left;">
          <span
                  style="float: left;height:60px ;line-height:60px;">
              <span style="font-size: 24px;font-weight: 600;color: #474a4c;margin-left: 5px" >{{list.sport}}</span>
          </span>

                <div
                        style="float: left;margin-left: 35%;height:60px ;
               line-height:60px;width: 200px ">
                    <el-progress
                            :text-inside="true"
                            :stroke-width="12"
                            :percentage="list.humannow"
                            status="success"
                            style="width: 110px;float: left;margin-top: 20px">
                    </el-progress>
                    <span style="float: left;color: #aeafb0;font-size: 14px;">参加人数{{list.humanmax}}</span>
                </div>
            </div>
            <div style="width:100%;height: 30px;line-height: 30px;float: left;
                    border-bottom:1px solid #ecdcdc;margin-bottom: 20px" class="detailed">
                <span                    >时间:</span>   <span >{{list.time}}</span>
                <span class="information">地点:</span>   <span >{{list.place}}</span>
                <span class="information">详情:</span>   <span >{{list.details}}</span>
            </div>
        </div>


    </div>
</template>

<script>

    export default {
        name: "active",
        mounted() {
            let that = this;
            this.$ajax.post("/lists").then(function(res) {
                that.lists = res.data.data;
            })
        },
        data() {
            return {
                lists:[],
                getsport: "",
                gettime:""
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            display(listsport,listtime){
                if (this.displaySport(listsport) === true && this.displayTime(listtime) === true) return true;
            },

            getSport(sport){
                this.getsport=sport
            },
            displaySport(listsport){
                if(this.getsport==="") return true
                else if(listsport===this.getsport) return true
            },
            getTime(time){
                this.gettime=time
            },
            displayTime(listtime){
                if(this.gettime==="") return true
                if(parseInt(listtime)<this.gettime*1000*60*60)  return true
            }

        },

    }
</script>

<style scoped>
    .detailed{
        font-size: 14px;
    }
    .detailed>li{
        float: left;
    }
    .information{
        margin-left: 20px;
    }
</style>