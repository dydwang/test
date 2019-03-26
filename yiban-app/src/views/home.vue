<template>
    <div class="home">
        <phone v-if="phoneSize"></phone>
        <computer v-if="computerSize"></computer>
    </div>
</template>

<script type="text/javascript">
    // @ is an alias to /src
    import phone from "@/phone/index";
    import computer from "@/computer/index";
    export default {
        name: "home",
        data() {
            return {
                screenWidth: document.body.clientWidth, // 屏幕尺寸
                phoneSize: false,
                computerSize: false
            };
        },
        mounted: function() {
            this.screenss();
        },
        methods: {
            screenss: function() {
                this.screenWidth = document.body.clientWidth;
                if (parseInt(this.screenWidth) < 600) {
                    {
                        (this.phoneSize = true), (this.computerSize = false);
                    }
                } else {
                    (this.computerSize = true), (this.phoneSize = false);
                }

            }
        },
        components: {
            phone,
            computer
        }
    };
</script>
