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
    let random = Math.floor(Math.random()* games.length)
    
    aon = aon +1

    r.innerText = games[aon].name
    i.src = games[aon].picture
    if(aon == games.length -1){
        aon = -1
    }
    
   
}




/*const role = games.length
let role2 = 0
function change(){

    const role = games.length
    let role2 = 0
        

        document.getElementById("p").innerText=games[role2].name
        document.getElementById("img").src=games[role2].picture

        console.log(role2)
    }

    if(role2 == role){
        role2 = 0
    }else{
        role2 =role2 +1
        console.log(role2)
    }*/
    
