<template>
  <div style="width: 101.2%;height: 80px;
                ;position:fixed;margin-top: -100px;
                  z-index: 100;background-color: #fff">
    <div style="margin: 5px 40px; border-bottom: 1px solid #ecdcdc;width: 90%">

      <div style="width: 392px;height: 70px;margin-left: 10px;">

        <span style="font-size:28px;color: #000;line-height: 80px;margin-left: 40px">丰神榜</span>

      </div>
      <div>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">主页</el-menu-item>
          <el-menu-item index="3">推荐</el-menu-item>
        </el-menu>

      </div>


          <img src="@/assets/user.png" style="width: 70px;height: 70px;
                      margin-left: 40%">

    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
*{
  float: left;}
</style>

<style>
  .el-menu-item{
    font-size: 18px;
  }
</style>

