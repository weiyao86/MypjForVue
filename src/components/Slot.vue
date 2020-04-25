<template>
    
    <div class="wrap">
       
        <slot :temp="user">我是默认的</slot>
    </div>
</template>

<script>
    
    export default{
        name:'SlotDemo',
        data(){
            return {
                user:{name:'HelloWorld.vue'}
            }
        },
        created(){
        }
    }
</script>


<style type="text/css" lagn="scss">
    
    .wrap{
        display: flex;
        flex-flow: column;
        position: fixed;
        top:200px;
    }
</style>