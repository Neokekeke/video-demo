<template>
<div id="home">
    <p class="title">视频</p>

    <button class="normal" @click="showVideo">视频</button>

    <div v-if="modalOpen" id="modalWrap">
        <img id="modalClose" @click="closeModal" src="http://img2-cloud.itouchtv.cn/upload/20171103/ncjYKhHTxH1509699728.png"/>
        <video id="modalVideo" controls="controls">
            <source src="http://video2-cloud.itouchtv.cn/video/20180919/5ca9fb0462359cef1537321345__hd.mp4" type="video/mp4" />

            <!-- 备用多个播放源，兼容不同浏览器
            <source src="movie/movie.mp4" type="video/mp4">
            <source src="movie/movie.ogv" type="video/ogg"> -->
        </video>
    </div>

</div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            modalOpen: false
        };
    },
    methods: {
        showVideo() {
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
        }
    }
};
</script>

<style scoped>
</style>
