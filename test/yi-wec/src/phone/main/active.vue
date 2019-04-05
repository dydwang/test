<template>

    <div
            style="margin-top: 20px;
                   width:95%;height: 320px;float: left;">
        <div v-for="(list, index) in lists" :key="index" v-if="display(list.sport,list.newtime)" >
            <div style="width: 100%;height: 240px;float: left;">
                <img
                        style="width: 100%;height: 240px "
                        v-bind:src="list.thumbnail_pic_s"  />
            </div>

            <div style="width: 100%;height: 60px;float: left;">
          <span
                  style="float: left;height:60px ;line-height:60px;">
              <span style="font-size: 24px;font-weight: 600;color: #474a4c;margin-left: 10px;width: 72" >{{list.sport}}</span>
          </span>

                <div
                        style="float: left;margin-left: 18%;height:60px ;
               line-height:60px;width: 180px ">
                    <el-progress
                            :text-inside="true"
                            :stroke-width="12"
                            :percentage="list.humannow"
                            status="success"
                            style="width: 90px;float: left;margin-top: 20px">
                    </el-progress>
                    <span style="float: left;color: #aeafb0;font-size: 14px;">参加人数{{list.humanmax}}</span>
                </div>
            </div>
            <div style="width:100%;height: 30px;line-height: 30px;float: left;text-align: left;margin-left: 10px;
                    border-bottom:1px solid #ecdcdc;margin-bottom: 20px" class="detailed">
                <span                    >时间:</span>   <span style="width: 118px;height: 19px" >{{list.time}}</span>
                <span class="information">地点:</span>   <span >{{list.place}}</span>
                <!--<span class="information">详情:</span>   <span >{{list.details}}</span>-->
            </div>
        </div>

        <div style="height: 2000px;width: 100%"></div>
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
                getsport: this.$store.state.sport,
                gettime:this.$store.state.time
            }
        },
        methods: {
            handleSelect(key, keyPath) {
            },
            display(listsport,listtime){
                if (this.displaySport(listsport) === true && this.displayTime(listtime) === true) return true;
            },

            getSport(sport){
                this.getsport=sport
            },
            displaySport(listsport){
                if(this.$store.state.sport==="") return true
                else if(listsport===this.$store.state.sport) return true
            },
            getTime(time){
                this.gettime=time
            },
            displayTime(listtime){
                if(this.$store.state.time==="") return true
                if(parseInt(listtime)<this.$store.state.time*1000*60*60)  return true
            }

        },
        components:{

        }

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