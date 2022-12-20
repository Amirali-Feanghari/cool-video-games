const games = [

    {
        name:"God of War Ragnarok",
        picture: "https://vigiato.net/wp-content/uploads/2022/12/10-1.jpg"
    },
    {
        name:"Call of Duty: Modern Warfare 2",
        picture: "https://vigiato.net/wp-content/uploads/2022/12/24.jpg"
    },
    {
        name:"Horizon: Forbidden West",
        picture: "https://vigiato.net/wp-content/uploads/2022/12/25.jpg"
    },
    {
        name:"Gotham Knights",
        picture: "https://vigiato.net/wp-content/uploads/2022/12/30.jpg"
    }
]
let r = document.getElementById("p")
let i = document.getElementById("img")
let aon = -1




function ch(){
    
    aon = aon +1
    if(aon == games.length ){
        aon = 0
    }

    r.innerText = games[aon].name
    i.src = games[aon].picture

    
   
}
function ch1(){
    
    aon = aon -1
    if(aon == -1){
        aon = games.length - 1
    }
    if(aon == -2){
        aon = games.length -1
    }

    r.innerText = games[aon].name
    i.src = games[aon].picture


    
   
}