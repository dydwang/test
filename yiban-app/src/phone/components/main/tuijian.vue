<template>
    <div class="box">
        <HeadBox></HeadBox>
        <div>
            <img class="user-poster" src="@/assets/logo.png" style="height: 300px;margin-left: 50px">
            <van-row class="user-links">
                <van-col span="6" style="height: 50px">
                    <van-icon name="pending-payment" />
                    待付款
                </van-col>
                <van-col span="6">
                    <van-icon name="records" />
                    待接单
                </van-col>
                <van-col span="6">
                    <van-icon name="tosend" />
                    待发货
                </van-col>
                <van-col span="6">
                    <van-icon name="logistics" />
                    已发货
                </van-col>
            </van-row>

            <van-cell-group class="user-group">
                <van-cell icon="records" title="全部订单" is-link />
            </van-cell-group>

            <van-cell-group>
                <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
                <van-cell icon="points" title="我参见的活动" is-link />

                <van-cell icon="gift-o" title="我收到的礼物" is-link />
            </van-cell-group>
        </div>
        <BoBox></BoBox>
    </div>
</template>

<script>
    import { Row, Col, Icon, Cell, CellGroup } from 'vant';

    import HeadBox from "@/phone/components/header/Header.vue";
    import MenuBox from "@/phone/components/main/menu.vue";
    import BoBox from "@/phone/components/bottom/boBox.vue";

    export default {
        name: "tuijian",
        components: {
            HeadBox,
            MenuBox,
            BoBox,
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup
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