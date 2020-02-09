<template>
    <div class="template-page">
        <div class="seller-login-container">
            <template-unit
                    v-bind:title="title"
                    v-bind:intro="intro"
            />
        </div>
    </div>
</template>

<script>
    import Template from "../components/Template";

    export default {
        name: 'Template',
        components: {
            'template-unit': Template,
        },
        data() {
            return {
                title: '组件标题',
                intro: {
                    author: '组件作者',
                    favorite: '组件收藏',
                },
            }
        },
        mounted: function () {
            this.$nextTick(function () {
            });
        },
    }
</script>
