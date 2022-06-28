<template>
    <div class="test">
        <h1 ref="h1">aaa</h1>
        <button>按钮</button>
    </div>
</template>

<script>

export default ({
    methods: {
        hackClick(){
            console.log(this.$refs)
        }
    }
})
</script>