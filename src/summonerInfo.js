import axios from "axios";

const api_key = "RGAPI-d2072018-9b36-4f50-b74b-2af3999d4e0b";

export default{
    data() {
        return{
            name: '',
            summonerLevel: '',
            puuid: ''
        }
    },
    methods: {
        searchName: function(a){
            if(this.a == ''){
                alert('검색하진 소환사는 존재하지 않습니다.') 
            } else {
                axios({
                    data: {
                        a: this.a
                    },
                    url: "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ a + "?api_key=" + api_key
                })
                .then(response => {
                    this.name = response.data.name;
                    this.puuid = response.data.puuid;
                    this.summonerLevel = response.data.summonerLevel;
                    console.log(response);
                    console.log(this.name);
                    alert('검색 완료');
                })
            }
        }
    }
}