<template>
  <el-container>
    <el-main>
      <div>
        <el-timeline>
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color" :timestamp="dates[index]" placement="top">
            <el-card>
<!--              <el-row :gutter="20">
                <el-col :span="2">-->
                  <div>
                    <el-image style="width: 50px; height: 60px" :src="activity.url" lazy></el-image>
                  </div>
<!--                </el-col>
                <el-col :span="22">-->
                  <div class="mar-text1">
                    {{activity.title}}
                  </div>
                  <div class="mar-text">
                    {{activity.content}}
                    <el-link type="primary" @click="toinfo(activity)">详细信息</el-link>
                  </div>
<!--                </el-col>
              </el-row>-->
            </el-card>
          </el-timeline-item>
        </el-timeline>
        <div @click="loadMore" style="display: flex; justify-content: center; color: #409EFF; text-decoration: underline">加载更多</div>
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
      limit: 8,
      page: 0,
      dates: ['1936-01-01', '1935-02-12', '1931-05-06', '1931-04-05', '1931-04-01', '1931-01-07', '1930-11-24', '1930-05-06', '1929-04-01', '1928-11-22', '1928-08-06', '1927-11-01', '1927-07-06', '1927-04-06', '1927-04-01', '1927-03-22', '1927-02-06', '1927-01-01', '1926-09-06', '1926-01-01', '1925-10-11', '1925-09-01', '1925-06-01', '1925-05-30', '1925-02-09', '1925-02-01', '1925-01-01', '1924-12-01', '1924-10-10', '1924-08-06', '1924-03-12', '1924-01-01', '1923-02-20', '1923-02-06', '1923-01-01', '1922-06-18', '1922-03-22', '1922-01-01', '1921-10-06', '1921-07-23', '1921-06-06', '1915-06-30', '1904-12-02', '1900-01-01', '1899-01-29', '1898-01-15']
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
      for (let i = 0; i < this.limit; i++) {
        await this.$axios.get('/resapi/timeline/' + this.dates[this.page * this.limit + i]).then(res => {
          console.log(res.data)
          const text = {
            martyr: 0,
            shuevent: 0,
            date: '',
            title: '',
            url: '',
            event: '',
            color: '#d63031'
          }
          if (res.data[0].martyr === 1) {
            text.martyr = res.data[0].martyr
            text.title = res.data[1].name
            text.date = res.data[1].eventdate
            text.url = res.data[1].pictureurl
            text.content = res.data[1].maincontent.substr(0, 20) + '...'
            console.log(this.text)
            this.activities.push(text)
          }
          if (res.data[0].shuevent === 1) {
            text.shuevent = res.data[0].shuevent
            text.title = res.data[1].title
            text.date = res.data[1].date
            text.url = res.data[1].photourl
            text.content = res.data[1].content.substr(0, 20) + '...'
            console.log(this.text)
            this.activities.push(text)
          }
        })
      }
      loading.close()
    },
    loadMore () {
      this.page += 1
      this.getinfo()
    },
    toinfo (activity) {
      if (activity.martyr === 1) {
        this.$router.push({
          path: 'renwu',
          query: {
            name: activity.title
          }
        })
      }
      if (activity.shuevent === 1) {
        this.$router.push({
          path: 'shuevent',
          query: {
            name: activity.title
          }
        })
      }
    }
  },
  created () {
    this.dates.reverse()
    console.log(this.dates)
    this.getinfo()
  }
}
</script>

<style scoped>
.mar-text {
  font-size: 16px;
  line-height: 1.7;
  color: #636e72;
}

.mar-text1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.7;
}

</style>
