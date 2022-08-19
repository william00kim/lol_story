<template>
  <input class="texting" v-model = "searchkeyword" placeholder="소환사명 검색" @keyup.enter = search(searchkeyword)>
</template>


<script>

export default {
  name: 'App',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search(searchkeyword){
      this.$router.push({
      name: 'Search',
      params: {
        keyword: this.searchkeyword,
        isResultShow: true,
      }
    });
    console.log("",searchkeyword,"" + '검색')
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


</style>
