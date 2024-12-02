<script setup>
import { ref } from 'vue';
const is_vedio = ref(0)

function letter_click() {
    is_vedio.value = 1
}
function vedio_click() {
    is_vedio.value = 2
}
</script>
<template>
    <div class="bg">
        <div class="output_box">
            <div class="letter" v-if="is_vedio == 1">
                这是一封对于你的信
            </div>

            <video class="vedio" id="v" v-else-if="is_vedio == 2" autoplay preload
                style="width: 1360px; height: 870px; object-fit: cover">
                <source src="../images/xiaoyu.mp4">
            </video>
        </div>
        <div class="vedio_box">

        </div>
        <div class="getmsg_box">
            <button class="letter_but" @click="letter_click">
                <img class="im" src="../images/letter.png">
            </button>
            <button class="vedio_but" @click="vedio_click">

            </button>
        </div>
    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

template {
    position: relative;
}

.bg {
    top: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../images/or.png");
    background-position: center center;
    /* 背景图不平铺 */
    background-repeat: no-repeat;
    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-attachment: fixed;
    /* 让背景图基于容器大小伸缩 */
    background-size: cover;
}

.output_box {
    position: absolute;
    width: 1400px;
    height: 910px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.7);
    top: 20px;
    left: 20px;
    border: 2px solid rgb(46, 218, 60);
}

.letter {
    text-align: center;
    position: absolute;
    width: 1360px;
    color: rgb(161, 37, 43);
    height: 870px;
    border-radius: 25px;
    background-color: rgba(152, 175, 148, 0.7);
    font-family: "楷体";
    font-size: 30px;
    top: 20px;
    left: 20px;
}

.vedio {
    position: relative;
    left: 20px;
    top: 20px;
}

.vedio_box {
    position: absolute;
    width: 455px;
    height: 300px;
    border-radius: 20px;
    background-color: white;
    opacity: 0.7;
    top: 20px;
    left: 1440px;
    border: 1px solid rgb(130, 229, 143);
}

.letter_but {
    position: absolute;
    left: 20px;
    top: 40px;
    width: 410px;
    border-radius: 55px;
    height: 260px;
    border: 2px solid white;
    box-shadow: 5px 5px 5px black;
    background-color: rgb(197, 190, 204);
}
.im{
    position: absolute;
    width: 470px;
    height: 415px;
    left: -30px;
    top: -78px;
}
.vedio_but {
    position: absolute;
    left: 20px;
    top: 320px;
    width: 410px;
    border-radius: 15px;
    height: 260px;
    border: 2px solid white;
    box-shadow: 5px 5px 5px black;
    background-color: rgb(197, 190, 204);
}

.getmsg_box {
    position: absolute;
    width: 455px;
    height: 600px;
    border-radius: 20px;
    background-color: white;
    background-color: rgba(255,255,255,0.7);
    top: 330px;
    left: 1440px;
    border: 1px solid rgb(130, 229, 143);
}
</style>