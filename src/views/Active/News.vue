<template>
<div @click="fun()" class="ttop">
    <div class="bigbox">
        <div class="box" v-for="data in arr" :key="data.id" @click="handleClick(data.id)">
            <div class="center">
                <h4>{{data.title}}</h4>
            </div>
            <div class="top">
                <img :src="data.imgage" alt />
            </div>
            <div class="center">
                <p>{{data.txt}}</p>
            </div>
            <div class="footer">
                <span class="iconfont">&#xe6ce;{{data.time}}</span>
                <span class="iconfont">&#xe616;公司新闻</span>
                <span class="iconfont">&#xe650;{{data.hot}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
import eventBus from "@/eventBus.js";
export default {
    components: {
        // Tabbar
    },
    data() {
        return {
            arr: [],
        };
    },
    created() {
        this.axios({
            url: "/new",
            method: "get",
        }).then((res) => {
            this.arr = res.data;
            // console.log(res.data)
        });
    },

    methods: {
        handleClick(id) {
            console.log(id);
            this.$router.push(`/newsde/${id}`); // 切换页面
        },
        fun() {
            eventBus.$emit("mseg", this.arr);
        },
    },
    beforeDestroy() {
        eventBus.$emit("mseg", this.arr);
    },
};
</script>

<style lang="scss" scoped>
.ttop {
    margin-top: 1.9rem;
    margin-bottom: 0.5rem;
}

.bigbox {
    font-size: 0.16rem;
    background: #f2e9e9;
    padding: 0.1rem 0;

    .box {
        margin: 0.1rem;
        padding: 0.03rem 0;
        background: whitesmoke;

        .top {
            height: 2.2rem;
            width: 100%;
            margin: 0 auto;
            width: 95%;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .center {
            margin: 0.1rem auto;
            width: 95%;

            h3 {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1; //规定几行显示省略号
                -webkit-box-orient: vertical;
                color: #000;
                line-height: 0.3rem;
            }

            h4 {
                font-size: 0.16rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1; //规定几行显示省略号
                -webkit-box-orient: vertical;
                // line-height: 0.2rem;
                font-weight: 600;
            }

            p {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3; //规定几行显示省略号
                -webkit-box-orient: vertical;
                color: #666;
                line-height: 0.25rem;
                font-size: 0.12rem;
            }
        }

        .bottom {
            margin: 0 auto;
            width: 95%;

            .moree {
                background: #ec6c58;
                color: #ffffff;
                display: inline-block;
                font-size: 0.12rem;
                width: 0.8rem;
                height: 0.25rem;
                line-height: 0.25rem;
                text-align: center;
                border-radius: 0.15rem;
                margin: 0.1rem 0;
            }
        }

        .footer {
            margin: 0 auto;
            width: 95%;

            .iconfont {
                color: black;
            }

            span {
                padding-right: 0.3rem;
                font-size: 0.14rem;
            }
        }
    }
}
</style>
