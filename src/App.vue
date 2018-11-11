<template>
<div id="app">

    <!-- 头部 -->
    <div id="header">
        <img src="./assets/tv.png" class="img">
        <p class="title">视频</p>
    </div>

    <!-- 视频 -->
    <div id="container">
        <div id="video-warpper">
            <!-- 视频播放按钮 -->
            <!-- todo
                默认不显示遮罩层，显示进度条
                显示遮罩层时，播放按钮显示，取消进度条，点击播放按钮时播放视频
                再次点击时取消播放视频，播放视频期间隐藏播放按钮图片，播放按钮仍然作为一个遮罩层在视频上面显示
             -->
            <span id="span" v-if="showPlayBtn" @click="playVideo">
                 <img id="video-play" :src="playImg == false ? '' : require('./assets/play.png')" alt="">
            </span>

            <!-- 视频封面海报 -->
            <img id="video-cover" src="./assets/cover.png" alt="" v-if="false">

            <!-- 视频 -->
            <video id="modalVideo" 
                controls="controls" 
                preload="none" 
                poster="./assets/cover.png"
                x5-video-player-fullscreen='true' 
                x5-video-ignore-metadata='true'
                webkit-playsinline
                height="150%">
                <source src="./assets/1.mp4" type="video/mp4" />
            </video>
        </div>
    </div>

    <!-- 视频控制操作 -->
    <div id="operation">
        <el-card class="box-card">
            <ul>
                <li>
                    <span>隐藏进度条</span>
                    <el-switch v-model="video.shade" active-color="#13ce66" inactive-color="#8E8E8E" @change="toogle('shade')"></el-switch>
                </li>
                <li>
                    <span>全屏播放</span>
                    <el-switch v-model="video.fullscreen" active-color="#13ce66" inactive-color="#8E8E8E" @change="toogle('fullscreen')"></el-switch>
                </li>
            </ul>
        </el-card>

    </div>

</div>
</template>

<script>
import { browser } from "./util/device.js";
export default {
  name: "app",
  data() {
    return {
      showPlayBtn: false, // 遮罩播放按钮
      playImg: false,
      video: {
        // 操作
        shade: false,
        fullscreen: false
      }
    };
  },
  mounted() {
    const video = document.getElementById("modalVideo");
    video.addEventListener("play", () => {
      if (this.video.fullscreen) {
        this.initFullScreen();
      }
    });
  },
  methods: {
    playVideo() {
      const video = document.getElementById("modalVideo");
      if (video.paused) {
        this.playImg = false;
        video.play();
        // this.initFullScreen();
      } else if (video.play) {
        this.playImg = browser.versions.android == true ? false : true;
        video.pause();
      }
    },
    toogle(e) {
      console.log(browser.versions.android);
      const video = document.getElementById("modalVideo");
      switch (e) {
        case "shade":
          if (this.video.shade == true) {
            this.playImg = browser.versions.android == true ? false : true;
            this.showPlayBtn = true;
            video.controls = false;
          } else if (this.video.shade == false) {
            this.showPlayBtn = false;
            video.controls = true;
          }
          return;
        case "fullscreen":
          return;
        default:
          return;
      }
    },
    initFullScreen() {
      console.log("1ccc");
      //全屏
      var docElm = document.documentElement;
      //W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
        console.log(1);
      } else if (docElm.mozRequestFullScreen) {
        //FireFox
        docElm.mozRequestFullScreen();
        console.log(2);
      } else if (docElm.webkitRequestFullScreen) {
        //Chrome等
        docElm.webkitRequestFullScreen();
        console.log(3);
      } else if (elem.msRequestFullscreen) {
        //IE11
        docElm.msRequestFullscreen();
        console.log(22);
      }
    }
  }
};
</script>
