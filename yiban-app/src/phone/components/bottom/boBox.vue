<template>
    <div class="boBox">
        <div>
          <router-link to="pActive">
              <span  style="font-size: 50px;color: #3291be;line-height: 5rem;margin-left: 188px">+</span>
          </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "boBox"
    }
</script>

<style scoped lang="scss">
    .boBox{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        border-top: 0.5px solid #ddd;
        background-color: #fff;
        z-index: 1;
    }
    .el-icon-circle-plus-outline{
        width: 50px;
        height: 50px;
    }
</style>