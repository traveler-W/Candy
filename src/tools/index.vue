<script setup>
import { ref } from 'vue';
import bus from './mitt'
let input_msg = ref("")
const display = ref(false)
const display_msg = ref("")
const is_audio = ref(false)

function set_display() {
  display.value = false
  window.location.href = "#/title"
}

function but_click() { 
  display_msg.value = input_msg.value
  display.value = true
  bus.emit('val',input_msg.value)
  setTimeout(set_display, 3500)
}
function play_music() {
  let close = document.getElementById("v")
  if (is_audio.value == false) {
    close.muted = false
    is_audio.value = true
    return
  }
  close.muted = true
  is_audio.value = false
}
</script>

<template>
  <div class="box">
    <video id="v" autoplay loop muted preload style="width: 100%; height: 100%; object-fit: fill">
      <source src="../images/dog.mp4">
      <embed src="../images/output.mp3" type="audio/mp3">
    </video>
    <div class="display" v-if="display">{{ display_msg }}，很好听的昵称</div>
    <div class="title">
      <span class="nick">请输入你的昵称</span>
      <input class="get_answer" type="text" v-model="input_msg">
      <button class="but" @click="but_click">确定</button>
      <button class="music" @click="play_music"><img src="../images/music.png" width="40px" height="40px"></button>
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

.display {
  position: absolute;
  width: 400px;
  height: 40px;
  text-align: center;
  left: 50%;
  margin-left: -200px;
  top: 180px;
  border-radius: 20px;
  background-color: rgb(226, 183, 183);
  font-size: 30px;
  font-family: "楷体";
  text-align: center;
  opacity: 1;
}

.music {
  position: absolute;
  left: 50%;
  width: 50px;
  height: 50px;
  top: 480px;
  margin-left: -25px;
  border: 1px solid rgb(230, 222, 222);
  border-radius: 12px;
  font-size: 30px;
  font-family: "楷体";
  box-shadow: 5px 5px 5px black;
}

.but {
  position: absolute;
  left: 50%;
  width: 800px;
  height: 50px;
  margin-left: -400px;
  top: 320px;
  border: 1px solid rgb(230, 222, 222);
  border-radius: 12px;
  font-size: 30px;
  font-family: "楷体";
  box-shadow: 5px 5px 5px black;
}

button:hover {
  background-color: rgb(151, 230, 164);
}

button:active {
  background-color: rgb(255, 255, 255);
}

.box {
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border: 5px solid rgb(226, 183, 183);
  position: absolute;
}

.title {
  position: absolute;
  left: 50%;
  margin-left: -400px;
  top: 300px;
  border-radius: 20px;
  width: 800px;
  height: 300px;
  background-color: rgb(226, 183, 183);
  opacity: 0.7;
}

.nick {
  top: 20px;
  position: absolute;
  font-size: 50px;
  font-family: "楷体";
  text-align: center;
  width: 500px;
  height: 100px;
  opacity: 0.9;
  left: 50%;
  color: rgb(17, 17, 17);
  margin-left: -250px;
  opacity: 1;
}

.get_answer {
  position: absolute;
  left: 50%;
  width: 700px;
  border: 1px solid rgb(230, 222, 222);
  border-radius: 25px;
  height: 60px;
  background-color: rgb(151, 230, 164);
  margin-left: -350px;
  top: 150px;
  box-shadow: 5px 5px 5px black;
  font-size: 40px;
  font-family: "楷体";
  text-align: center;
}
</style>
