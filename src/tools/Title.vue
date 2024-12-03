<script setup>
import { ref } from 'vue';
const is_vedio = ref(0)
const is_ending = ref(false)
const is_no =ref(true)
const end_str =ref("")

function end_fun_ok()
{
    is_ending.value=true
    end_str.value="太好了，我们现在就是朋友了，你现在可以加我了或者让我加你，这是我的微信号“wang2477428674”"
 
}
function end_fun_no()
{
    is_ending.value=true
    end_str.value="我尊重你的选择，不过我还是想跟你成为盆友的，我会继续关注你的。"
}

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
                <p style="font-size: 50px; text-align: center;">这是一封独特的信</p>
                <p>亲爱啊的不吃糖小姐，你好:</p>
                <p style="text-indent: 60px;">我知道这样突然的地方式很冒昧，也很唐突，但请你理解我的做法。这可以是一个大胆且勇敢的做法，也可以是一个有趣的互动。容我在此先介绍一下我自己，我是
                    来自21级计算机学院的一位同学，你暂且可以叫我小王。我第一次在食堂见过你，觉得很是欣赏，但是后来却没有什么机会见到了。上个月我在刷抖音的时候，刷到了你，所以果断关注了。我看了你
                    的所有作品感觉很不错，真的很喜欢。经过后续对你的关注产生了想法，就是写一个网站，这个网站是我专门为你写的(在公司顶着被抓的时候写的)，我想通过这个网站能不能得到你的一个好友位。
                    我是带着很欣赏的态度来的，当然这完全凭你的个人意愿，如果不可以的话你也可以拒绝我。然后你可以在右上角的选择栏点击拒绝就好了。不过我需要再争取一下，看完信后请你点击信封下面的视频
                    ，如果还是不行的话，就继续点击拒绝按钮。如果我可以的话，请你点击接受按钮。我希望你我都多一个朋友，所谓“只要朋友多，天下也好说”。我是带着我所有的真诚来的，从我大费周折做这个网站
                    应该就可以看出，我希望你可以同意。
                </p>
                <p style="text-indent: 60px;">其实我挺喜欢吃糖的。</p>
                <p style="text-indent: 1200px;">------小王</p>
            </div>
            <video class="vedio" id="v" v-else-if="is_vedio == 2" autoplay preload
                style="width: 1360px; height: 870px; object-fit: cover">
                <source src="../images/xiaoyu.mp4">
            </video>
            <div v-else="is_vedio==0" style="text-align: center;font-size: 100px;font-family: 楷体;margin-top: 300px;">
                请先点击信封查看信件
            </div>
        </div>
        <div class="vedio_box">
            <div class="ending" v-if="is_ending">
                {{end_str}}
            </div>
            <button class="is"  @click="end_fun_ok">
                接受
            </button>
            <button class="no"  @click="end_fun_no">
                拒绝
            </button>
        </div>
        <div class="getmsg_box">
            <button class="letter_but" @click="letter_click">
                <img class="im" src="../images/letter.png">
            </button>
            <button class="vedio_but" @click="vedio_click">
                <img class="imv" src="../images/vedio.png">
            </button>
        </div>
    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
.ending{
    z-index: 3;
    position: absolute;
    width: 410px;
    height: 260px;
    top: 20px;
    left: 20px;
    font-size: 30px;
    font-family: 楷体;
    border-radius: 20px;
    text-align: center;
    border: 1px solid white;
    box-shadow: 5px 5px 5px black;
    background-color: rgb(197, 190, 204);
}
.is{
    z-index: 1;
    position: absolute;
    width: 150px;
    height: 150px;
    top: 70px;
    left: 40px;
    font-size: 30px;
    font-family: 楷体;
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 5px 5px 5px black;
    background-color: rgb(197, 190, 204);
}
.no{
    z-index: 2;
    position: absolute;
    width: 150px;
    height: 150px;
    top: 70px;
    left: 250px;
    font-size: 30px;
    font-family: 楷体;
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 5px 5px 5px black;
    background-color: rgb(197, 190, 204);
}
.is:hover {
  background-color: rgb(151, 230, 164);
}

.is:active {
  background-color: rgb(255, 255, 255);
}
.no:hover {
  background-color: rgb(212, 62, 119);
}

.no:active {
  background-color: rgb(255, 255, 255);
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
    background-color:rgba(255,255,255,0.7);
    top: 20px;
    left: 1440px;
    border: 2px solid rgb(130, 229, 143);
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
.imv{
    position: absolute;
    width: 480px;
    height: 310px;
    left: -36px;
    top: -25px;
}
.vedio_but {
    position: absolute;
    left: 20px;
    top: 320px;
    width: 410px;
    border-radius: 70px;
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
    border: 2px solid rgb(130, 229, 143);
}
</style>