Vue.createApp({
 data (){
    return {
    name : "Meenu M S",
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
    }
 }
}).mount("#assignment");