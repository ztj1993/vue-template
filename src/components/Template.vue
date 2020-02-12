<template>
    <div class="template-component">
        <div class="title">标题：{{title}}</div>
        <div class="author">作者：{{author}}</div>
        <div class="favorite">收藏：{{favorite}}</div>
    </div>
</template>

<script>
    export default {
        name: "Template",
        props: {
            debug: {
                type: Boolean,
                default: true,
            },
            title: {
                type: String,
                default: 'Title',
                required: true,
                validator: function (value) {
                    return value ? true : true;
                }
            },
            intro: Object,
        },
        data() {
            return {
                author: null,
                favorite: null,
            }
        },
        watch: {
            title: function (val, old) {
                this.log('--- component template watch: title ---');
                this.log('new: ' + val);
                this.log('old: ' + old);
            },
            intro: {
                handler: function (val, old) {
                    this.log('--- component template watch: intro ---');
                    this.log(val);
                    this.log(old);

                    this.author = ('author' in val) ? val.author : '未知';
                    this.favorite = ('favorite' in val) ? val.favorite : '未知';
                },
                immediate: true,
            },
        },
        created() {
            this.log('--- component template created ---');
        },
        mounted: function () {
            this.log('--- component template mounted ---');
            this.$nextTick(function () {
                this.log('--- component template mounted: $nextTick ---');
            });
        },
        methods: {
            log(msg) {
                if (this.debug) {
                    window.console.log(msg);
                }
            },
            testing() {
                this.log('--- component template method: testing ---');
            },
        },
    }
</script>

<style lang="scss">

</style>
