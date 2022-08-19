<template>
    <input class="texting" v-model = "searchkeyword" placeholder="소환사명 검색" @keyup.enter = search(searchkeyword)>

    <div class="summoner_status">
        이름: {{name}}<br>
        레벨: {{summonerlevel}}<br>
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
      summonerLevel: ''
    }
  },
  methods: {
    search : function(searchkeyword) {
      data.methods.searchName(searchkeyword)
        setTimeout(() => {
          this.name = data.methods.name
          this.summonerlevel = data.methods.summonerLevel
      }, 1000);
    }
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
</style>