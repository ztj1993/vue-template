<template>
    <div class="template-component">
        <div class="title">标题：{{title}}</div>
        <div class="author">作者：{{intro.author}}</div>
        <div class="favorite">收藏：{{intro.favorite}}</div>
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
        watch: {
            title: function (val, oldVal) {
                window.console.log('new: %s, old: %s', val, oldVal)
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
