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
        methods: {
            log(msg) {
                if (this.debug) {
                    window.console.log(msg);
                }
            },
            testing() {
                window.console.log('--- testing ---');
            }
        },
    }
</script>

<style lang="scss">

</style>
