var data = [
    {
    "id": 0,
    "playerName": "Hardik Pandya",
    "from": "MI",
    "price": "6.50 Cr",
    "isPlaying": true,
    "description": "All-rounder",
    "preview" : "https://www.mumbaiindians.com/static-assets/images/players/small/63751.png"
    },
    {
    "id": 1,
    "playerName": "Virat Kohli",
    "from": "RCB",
    "price": "8.00 Cr",
    "isPlaying": true,
    "description": "Batsman",
    "preview" :"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png"
    },
    {
    "id": 2,
    "playerName": "Yuvraj Singh",
    "from": "MI",
    "price": "1.00 Cr",
    "isPlaying": false,
    "description": "Batsman",
    "preview" :"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/113.png"

    },
    {
    "id": 3,
    "playerName": "Chris Morris",
    "from": "RR",
    "price": "16.25 Cr",
    "isPlaying": true,
    "description": "All-rounder",
    "preview" :"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/836.png"
    },
    {
    "id": 4,
    "playerName": "Glenn Maxwell",
    "from": "RCB",
    "price": "14.25 Cr",
    "isPlaying": true,
    "description": "All-rounder",
    "preview" :"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png"
    },
    {
    "playerName": "Rohit Sharma",
        "id": 5,
"from": "MI",
"price": "6.50 Cr",
"isPlaying": true,
"description": "BatsMan",
"preview" :"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png"
},
{
"id": 6,
"playerName": "Ishan Kishan",
"from": "MI",
"price": "2.50 Cr",
"isPlaying": true,
"description": "BatsMan",
"preview" :"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png"
} ]


let playerCard = document.getElementById("clothing-grid")
let playerSection = document.getElementById("clothing-section")
document.body.appendChild(playerSection)
$(document).ready(function() {
    function generateCard(product){
        let card = `
        <div class = "card">
          <div class = "product-image">
              <img src =${product.preview} alt= ${product.playerName}>
           </div>
          <div class ="details">
           <h3 class="title"> ${product.playerName}</h3>
           <p class="description"> ${product.from} </p>
           <p class="price"> ${product.price} </p>
           <p class="description"> ${product.description} </p>
          </div>
        </div>
        `
        return card
    }
    for(let i=0; i< data.length;i++){
        let htmlCard = generateCard(data[i])
        playerCard.innerHTML += htmlCard
    }
    $("#clothing-grid").click(function (){
        var num = window.data[2].id;
        console.log(num)
        window.location.href="checkout.html"
      });
    // redirect(num);
});




