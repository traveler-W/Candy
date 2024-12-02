<script setup>

</script>
<template>
    <div class="bg">
        <div class="output_box">
        </div>
        <div class="vedio_box">
        </div>
        <div class="getmsg_box">
        </div>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
template{
    position: relative;
}
.bg{
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
.output_box{
    position: absolute;
    width: 1400px;
    height: 910px;
    border-radius: 25px;
    background-color: white;
    opacity: 0.7;
    top: 20px;
    left: 20px;
    border: 2px solid rgb(46, 218, 209);
}
.vedio_box{
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
.getmsg_box{
    position: absolute;
    width: 455px;
    height: 600px;
    border-radius: 20px;
    background-color: white;
    opacity: 0.7;
    top: 330px;
    left: 1440px; 
    border: 1px solid rgb(130, 229, 143);
}
</style>