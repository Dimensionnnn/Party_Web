<template>
  <div>
    <div class="header-banner">
      <div class="title-box">
        <div class="title1-box">
          <div class="title1">
            <img src="/static/picture/news_detail_title1.png">
          </div>
        </div>
        <div class="title1-box">
          <div class="title2">
            <img src="/static/picture/news_detail_title2.png">
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="news-title">
        <span>{{title}}</span>
      </div>
      <div class="divider"></div>
      <div class="news-content">
        {{content}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "news_detail",
        data(){
          return {
            title: '',
            content: ''
          }
        },
        methods:{
            // getQueryString(name) {
            //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            //   var r = window.location.search.substr(1).match(reg);
            //   if (r != null)
            //     return unescape(r[2]);
            //   return null;
            // }
          },

      mounted() {
            let that = this;
            console.log(this.$route.params.name)
            this.$axios.post('/resapi/timeline/'+ this.$route.params.name).then(res=>{
            console.log(res.data[1])
            let data = res.data[1];
            that.title  = data['title'];
            that.content = data['content'];
            console.log(that.title)
              console.log(that.content)

            })
        }
    }
</script>

<style scoped>
  .header-banner{
    min-width: 1400px;
    height: 200px;
    background-image: url("/static/picture/news_detail_bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 20px;
  }
  .title-box{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  .title1-box{
    width: 100%;
    height: 80px;
  }
  .title1{
    width: 500px;
    height: 100px;
    float: left;
    margin-left: 120px;
  }
  .title1 img{
    width: 100%;
    height: 100%;
  }
  .title2{
    width: 500px;
    height: 100px;
    float: right;
    margin-right: 100px;
  }
  .title2 img{
    width: 100%;
    height: 100%;
  }
  .main-content{
    width: 1200px;
    margin: 0 auto;
    min-height: 400px;
  }
  .news-title{
    margin-top: 20px;
    width: 100%;
    min-height: 80px;
    text-align: center;
    margin-bottom: 20px;
  }
  .news-title span{
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 40px;
    color: #343434;
  }
  .news-content{
    margin-top: 40px;
    width: 100%;
  }
  .divider{
    width: 100%;
    margin: 0 auto;
    height: 0;
    border-top: 1px #8c939d solid;
  }
</style>
