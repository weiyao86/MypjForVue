<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

    let setRootFontSize=()=>{
        //设计稿750为基准
        let ftsize=Math.min(window.screen.width,document.documentElement.clientWidth) * 16 / 375  +'px';
        // let ftsize=16  / 375 * 100 +'vw';  //vw 支持IOS8,Android 4.4以上
        document.documentElement.style.fontSize=ftsize;
        console.log(ftsize)
    }

    window.addEventListener('resize',setRootFontSize);
    setRootFontSize();
    export default {
      name: 'App'
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
