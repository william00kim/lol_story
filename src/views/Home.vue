<template>
  <input class="texting" v-model = "searchkeyword" placeholder="소환사명 검색" @keyup.enter = search(searchkeyword)>
</template>


<script>
import summonerInfo from '@/summonerInfo';

const data = summonerInfo;

export default {
  name: 'App',
  data() {
    return {
      name: '',
      summonerLevel: '',
      profileIconId: '',
    }
  },
  methods: {
    search(searchkeyword){
      data.methods.searchName(searchkeyword)
      setTimeout(() => {
        this.name = data.methods.name
        this.summonerLevel = data.methods.summonerLevel
        this.profileIconId = data.methods.profileIconId
      },1000);
      setTimeout(() => {
        this.$router.push({
        name: 'Search',
        params: {
          keyword: this.searchkeyword,
          name: this.name,
          summonerLevel: this.summonerLevel,
          profileIconId: this.profileIconId
        }
      });
    }, 1000)
      
    console.log(searchkeyword,"" + '검색')
    }
    
  }
}

</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.page {
  color: #F0E6D2;
}

.texting{
  width: 200px;
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  margin-top: 10px;
}

</style>
