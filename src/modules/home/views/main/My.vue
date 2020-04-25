<template>
    <div class="wrap-page-global">
        <div class="header">
            <div class="head-portrait">
                <img src="static/8.jpg" alt="暂时无法查看">
            </div>
            <div class="user-info">Your name</div>
        </div>
         <div class="my-body">
             
             <mt-cell class="my-cell" title="我的地址"  icon=" fa fa-address-book-o" is-link></mt-cell>
             <mt-cell class="my-cell" title="常见问题"  icon=" fa fa-question-circle-o" is-link></mt-cell>
             <mt-cell class="my-cell" title="常见问题"  icon=" fa fa-question-circle-o" is-link></mt-cell>
             <mt-cell class="my-cell" title="常见问题"  icon=" fa fa-question-circle-o" is-link></mt-cell>
         </div>
        
    </div>
</template>
<script>
    
    export default{
        name:'My'
    }
</script>
<style type="text/css" lang="scss" scoped>
   
    .header{
        height:200px;
        background: #fe7c7f;
        margin: 0 -10px;
        display: flex;
        flex-flow: column;
    }
    .head-portrait{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        img{
            width: 100px;
            height: 100px;
            border-radius: 100px;
        }
    }
    .user-info{
        height: 50px;
        line-height: 50px;
        color:#fff;
    }
    .my-body{
        text-align: left;
    }
    .my-cell{
        margin:2px 0;
        /*border-bottom: 1px solid rgba(0,0,0,.2);*/
       /* font-size:14px;
        font-weight: bold;*/
    }
</style>