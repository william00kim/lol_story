import axios from "axios";

const api_key = "RGAPI-b2d12d01-2821-4011-9e6a-1b22149d0f15";

export default{
    data() {
        return{
            name: '',
            summonerLevel: '',
            puuid: '',
            accountId: '',
            profileIconId: '',
        }
    },
    methods: {
        searchName: function(a){
            if(a == ''){
                alert('소환사명을 다시 입력해주세요.') 
            } else if(a == 'undefined'){
                alert('소환사명을 다시 입력해주세요.')
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
                    this.accountId = response.data.accountId;
                    this.profileIconId = response.data.profileIconId; 
                })
            }
        }
    }
}