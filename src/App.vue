<template>
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title>LOL_STORY</title>
  </head>
  <body>
    <sidebar-menu :menu="menu"/>
    <div class="content1">
      <router-view></router-view>
    </div>
  </body>
  </html>
</template>

<script>

export default {
  data() {
    return {
      nav: ["홈" , "검색", "커뮤니티"],
      users:[],
      menu: [
        {
          header: 'lol_status',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Home',
          icon: 'fa fa-user'
        },
        {
          href: '/Search',
          title: 'Search',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link'
            },
            {
              href: '/charts/champion_Ranking',
              title: 'ChampionRanking'
            }
          ]
        }
      ]
    }
  },
  name: 'App',
  methods : {

  },
  components: {
    
  }
}

</script>

<style>
#side::-webkit-scrollbar {
  display: none; 
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background: #324759;
}

.nav {
  padding: 15px;
  border-radius: 15px;
  background-color: #B19F8A;
}

.nav a {
  padding: 5px;
  color: #000000;
  margin: 0px;
}

.nav :hover{
  cursor: pointer;
  background-color: #B19F8A;
  border-radius: 2px;
}

.content1{
  float: left;
  margin-left: 20%;
  margin-right: 5px;
  width: 80%;
  height: 1000px;
  background: #F3E0BE;
  border-radius: 8px;
  color: #000000;
}
</style>