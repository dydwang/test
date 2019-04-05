<template>
    <div class="home" >

    </div>
</template>

<script type="text/javascript">
    // @ is an alias to /src

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
                const {$router} = this
                this.screenWidth = document.body.clientWidth;
                if (parseInt(this.screenWidth) < 600) {
                    {
                        $router.push("first")
                    }
                } else {
                    $router.push("computer")
                }

            }
        },
        components: {

        }
    };
</script>
