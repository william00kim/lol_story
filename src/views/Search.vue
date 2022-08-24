<template>
    <input class="texting" v-model = "searchkeyword" placeholder="소환사명 검색" @keyup.enter = search(searchkeyword)>
    <div class="summoner_status">
        이름: {{name || $route.params.name}}<br>
        레벨: {{summonerlevel || $route.params.summonerLevel }}<br>
        아이콘: {{profileIconId || $route.params.profileIconId}}<br>
        <div class = "Icon_box">
          <img class = "Icon" :src = "`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${profileIconId||$route.params.profileIconId}.png`">  
        </div>
        <router-link to = "/spectator" class="spec"> 관전 </router-link>
    </div>
</template>

<script>
import summonerInfo from '@/summonerInfo';
const data = summonerInfo;

export default {
  name: 'App',
  data() {
    return{
      name: '',
      summonerLevel: '',
      profileIconId: '',
    }
  },
  methods: {
    search : function(searchkeyword) {
      data.methods.searchName(searchkeyword)
        setTimeout(() => {
          this.name = data.methods.name
          this.summonerlevel = data.methods.summonerLevel
          this.profileIconId = data.methods.profileIconId
      }, 600);
    }
  },
  created() {
    this.searchkeyword = this.$route.params.keyword
  }
}
</script>

<style>

.search_box{
  margin-top: 10px;
  width: 300px;
}

.texting{
  width: 200px;
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  margin-top: 10px;
}

.summoner_status{
  width: 250px;
  margin-top: 20px;
  margin-left: 50px;
  font-size: 20px;
  text-align:left;
}

.spec{
  width: 30px;
  height: 15px;
}

.Icon_box{
  border: 10px;
  border-radius: 8px solid #000000;
  width: 155px;
  height: 155px;
}

.Icon{
  width: 150px;
  height: 150px;
}
</style>