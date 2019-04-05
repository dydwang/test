<template>
  <div>
      <headTitle></headTitle>
    <el-carousel
      indicator-position="outside"
      style="margin-top: 90px;margin-left: 250px;
                         width:60% ;
                          z-index: 0      ">
      <el-carousel-item v-for="item in this.advertisement" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
      <router-link to="newActive">
        <el-button type="primary" icon="el-icon-circle-plus-outline" style="position:fixed;left:80%;top: 130px;">
      新建活动
        </el-button>
      </router-link>
    <condition  @transferRandom="getSport" @timeRandom="getTime" ref="son"></condition>
    <div
      style="margin-top: 20px;
                   width:42%;height: 320px;float: left;margin-left: 250px">
      <div v-for="(list, index) in lists" :key="index" v-if="display(list.sport,list.newtime)" >
        <div style="width: 100%;height: 240px;border: 1px solid #ecdcdc;float: left;">
          <img
            style="width: 100%;height: 240px "
            v-bind:src="list.thumbnail_pic_s"/>
        </div>

        <div style="width: 100%;height: 60px;float: left;">
          <span
            style="float: left;height:60px ;line-height:60px;">
              <span style="font-size: 20px;font-weight: 600;color: #474a4c" >{{list.sport}}</span>
          </span>

          <div
            style="float: left;margin-left: 50%;height:60px ;
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
        <div style="width:100%;height: 20px;line-height: 20px;float: left;
                    border-bottom:1px solid #ecdcdc;margin-bottom: 20px" class="detailed">
          <span                    >时间:</span>   <span >{{list.time}}</span>
          <span class="information">地点:</span>   <span >{{list.place}}</span>
          <span class="information">详情:</span>   <span >{{list.details}}</span>
        </div>
      </div>
    </div>
    <div
      style="margin-top: 20px;width:17.5%;height: 10000px;margin-left:0.5%; border: 1px solid #ecdcdc;
                        float: left;"
    >
      这里是广告位
    </div>
  </div>
</template>

<script>
import headTitle from "@/computer/headTitle";
import condition from "@/computer/components/condition"
export default {
  name: "index",
  components: {
    headTitle,
    condition
  },

  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      lists: [],
      advertisement:["官方举办的活动或广告1","官方举办的活动或广告2","官方举办的活动或广告3","官方举办的活动或广告4"],
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
      if(this.getsport===""||this.getsport==="全部") return true
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
  mounted() {
    let that = this;
    this.$ajax.post("/lists").then(function(res) {
      that.lists = res.data.data;
    })
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.detailed > span{
  float: left;
  font-size: 14px;
  color: #80868b;
  }

  .information{
    margin-left: 10px;
  }
</style>
