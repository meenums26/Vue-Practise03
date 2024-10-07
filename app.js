Vue.createApp({
 data (){
    return {
    name : "",
    age : 29,
    imgLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk92qOx7c5k5fybjVbUkwg6BGW_ptjgID9A&s",
    counter:0
 }
},
 methods:{
    ageInFiveYrs (){
        return this.age + 5;
    },
    favouriteNum (){
      return Math.random();
    },
    addCounter(num){
        this.counter = this.counter+num;
    },
    reduceCounter(num){
        if(this.counter !== 0){
            this.counter = this.counter-num;
        }
    },
    setName(e){
        this.name = e.target.value;
    }
 }
}).mount("#assignment");