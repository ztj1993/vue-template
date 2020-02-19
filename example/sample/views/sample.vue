<template>
    <div>
        <unit-sample/>
    </div>
</template>

<script>
    export default {
        name: "TplView",
        components: {
            'unit-sample': () => import('../components/Sample'),
        },
    }
</script>
