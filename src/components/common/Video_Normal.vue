<template>
<div id="normal">
    123

    <button class="normal" @click="back()">返回</button>
</div>
</template>

<script>
export default {
    name: "normal",
    components: {},
    methods: {
        back() {
            this.$router.go(-1);
        },
    }

}
</script>

<style scoped>

</style>
