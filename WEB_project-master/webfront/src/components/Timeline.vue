<template>
  <el-container>
    <el-main>
      <div class="block">
        <el-timeline :reverse="reverse">
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="dates[index]" placement="top">
            <el-card>
<!--              <el-row :gutter="20">-->
<!--                <el-col :span="2">-->
                  <div>
                    <el-image style="width: 80px; height: 100px" :src="activity.url" lazy></el-image>
                  </div>
                  <div class="mar-text1">
                  {{activity.title}}
                    </div>
<!--                </el-col>-->
<!--                <el-col :span="22">-->
                  <div class="mar-text">
                    {{activity.content}}
                    <el-link type="primary" @click="toinfo(activity)">详细信息</el-link>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-main>
  </el-container>
</template>

<script>
/* import Qs from 'qs' */

export default {
  data () {
    return {
      reverse: true,
      /* text: {
        martyr: 0,
        shuevent: 0,
        title: '',
        content: '',
        date: '',
        url: ''
      }, */
      activities: [],
      dates: ['1930-11-24', '1923-01-01', '1922-06-18']
    }
  },
  methods: {
async getinfo () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 1)'
      })
      for (let i = 0; i < this.dates.length; i++) {
        await this.$axios.get('/resapi/timeline/' + this.dates[i]).then(res => {
          console.log(res.data)
          const text = {
            martyr: 0,
            shuevent: 0,
            date: '',
            title: '',
            url: '',
            event: ''
          }
          if (res.data[0].martyr === 1) {
            text.martyr = res.data[0].martyr
            text.title = res.data[1].name
            text.date = res.data[1].eventdate
            text.url = res.data[1].pictureurl
            text.content = res.data[1].maincontent
            console.log(this.text)
            this.activities.push(text)
          }
          if (res.data[0].shuevent === 1) {
            text.shuevent = res.data[0].shuevent
            text.title = res.data[1].title
            text.date = res.data[1].date
            text.url = res.data[1].photourl
            text.content = res.data[1].content
            console.log(this.text)
            this.activities.push(text)
          }
        })
      }
      loading.close()
    },
    toinfo (activity) {
      if (activity.martyr === 1) {
        this.$router.push({
          name: 'interview',
          params: {
            name: activity.title
          }
        })
      }
      if (activity.shuevent === 1) {
        this.$router.push({
          name: 'news_detail',
          params: {
            name: activity.date
          }
        })
      }
    }
  },
  created () {
    this.getinfo()
  }
}
</script>

<style scoped>
.mar-text {
  font-size: 16px;
  line-height: 1.7;
}
  .mar-text1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.7;
}

</style>
