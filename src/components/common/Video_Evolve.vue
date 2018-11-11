<template>
<div id="evlove">
    321
    <button class="normal" @click="back()">返回</button>
</div>
</template>

<script>
export default {
    name: "evlove",
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
