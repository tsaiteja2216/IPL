let data = [
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

let left = document.getElementById("left")
let right = document.getElementById("right")
let details = document.getElementById("player-details")
details.appendChild(left)
details.appendChild(right)
document.body.appendChild(details)


$(document).ready(function redirect(num) {
     left.innerHTML +=`
     <h3 id="name"> ${data[num].playerName}</h3>
     <p id="team"> ${data[num].from} </p>
     <p id="cost"> ${data[num].price} </p>
     <p id="description"> ${data[num].description} </p>`
     right.innerHTML+= `<img src = ${data[num].preview} class="rightPreview"/>`
})


