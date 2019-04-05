<template>
    <div class="box">
        <div>
            <img class="user-poster" src="@/assets/logo.png" style="height: 150px;width: 40%;">
            <van-row class="user-links">
                <van-col span="8" style="height: 50px;font-size: 18px" @click="tishi" >
                    <van-icon name="pending-payment"  />
                    待付款
                </van-col>
                <van-col span="8" style="height: 50px;font-size: 18px" @click="tishi">
                    <van-icon name="records"  />
                    待接单
                </van-col>
                <van-col span="8" style="height: 50px;font-size: 18px" @click="tishi">
                    <van-icon name="tosend"  />
                    待领取
                </van-col>
            </van-row>

            <van-cell-group class="user-group"  @click="tishi">
                <van-cell icon="records" title="全部订单" is-link />
            </van-cell-group>

            <van-cell-group @click="tishi">
                <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
                <van-cell icon="points" title="新建活动" is-link to="pActive" />
                <van-cell icon="points" title="我参加的活动" is-link  />
                <van-cell icon="gift-o" title=" " is-link />
            </van-cell-group>
        </div>

    </div>
</template>

<script>
    import { Row, Col, Icon, Cell, CellGroup } from 'vant';
    export default {
        name: "tuijian",
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup
        },
        methods:{
            tishi(){
                this.$message({message:'程序员小哥还在开发中',center: true});

            }
        }
    };
    </script>

<style scoped>
    .user {
        &-poster {
            width: 100%;
            display: block;
        }
        &-group {
            margin-bottom: 15px;
        }
        &-links {
            padding: 15px 0;
            font-size: 12px;
            text-align: center;
            background-color: #fff;
            .van-icon {
                display: block;
                font-size: 24px;
            }
        }

    }
</style>