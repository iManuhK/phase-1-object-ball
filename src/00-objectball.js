function gameObject(){
    const statsObject ={
    "home":{"teamName": "Brooklyn Nets",
    "colors":["Black", "White"],
    "players":
    {"Alan Anderson":{
    "number": 0,
    "shoe":16,
    "points":22,
    "rebounds":12,
    "assists":12,
    "steals":3,
    "blocks":1,
    "slamDunks":1},
    "Reggie Evans":{"number": 30,
    "shoe":14,
    "points":12,
    "rebounds":12,
    "assists":12,
    "steals":12,
    "blocks":12,
    "slamDunks":7},
    "Brook Lopez":{"number": 11,
    "shoe":17,
    "points":17,
    "rebounds":19,
    "assists":10,
    "steals":3,
    "blocks":1,
    "slamDunks":15},
    "Mason Plumlee":{"number": 1,
    "shoe":19,
    "points":26,
    "rebounds":12,
    "assists":6,
    "steals":3,
    "blocks":8,
    "slamDunks":5},
    "Jason Terry":{"number": 31,
    "shoe":15,
    "points":19,
    "rebounds":2,
    "assists":2,
    "steals":4,
    "blocks":11,
    "slamDunks":1}}},
    
    "away":{"teamName": "Charlotte Hornets",
    "colors":["Turquoise", "Purple"],
    "players":{
    "Jeff Adrien":{"number": 4,
    "shoe":18,
    "points":10,
    "rebounds":1,
    "assists":1,
    "steals":2,
    "blocks":7,
    "slamDunks":2},
   "Bismak Biyombo":{"number": 0,
    "shoe":16,
    "points":12,
    "rebounds":4,
    "assists":7,
    "steals":7,
    "blocks":15,
    "slamDunks":10},
    "DeSagna Diop":{"number": 2,
    "shoe":14,
    "points":24,
    "rebounds":12,
    "assists":12,
    "steals":4,
    "blocks":5,
    "slamDunks":5},
    "Ben Gordon":{"number": 8,
    "shoe":15,
    "points":33,
    "rebounds":3,
    "assists":2,
    "steals":1,
    "blocks":1,
    "slamDunks":0},
    "Brendan Haywood":{"number": 33,
    "shoe":15,
    "points":6,
    "rebounds":12,
    "assists":12,
    "steals":22,
    "blocks":5,
    "slamDunks":12}}}
    }
    return statsObject;
    }
const objTeam = gameObject()
 
const isObject = function(val) {
  if(val === null) {
    return false
  }
    return (typeof val ==="object")
}

const LoopThroughObject = function (obj, objArray){
  for (let val in obj) {
  if(isObject(obj[val])){
      LoopThroughObject(obj[val], val)
  }
  else if(Array.isArray(obj)){
    console.log (objArray + val, obj[val])
  }
  else {
    console.log (val, obj[val])
  }
}
}
LoopThroughObject(objTeam)

function numPointsScored(obj, upperKey, key) {
    return obj[upperKey]["players"][key]["points"]
}
numPointsScored(objTeam, "home", "Alan Anderson")

function shoeSize(obj, upperKey, key) {
    return obj[upperKey]["players"][key]["shoe"]
}
shoeSize(objTeam, "home", "Alan Anderson")

function teamColors(obj, key) {
    if (obj["home"]["teamName"]===key){
        return obj['home']['colors']
    }
    else if(objTeam['away']['teamName']===key){
        return obj['away']['colors']
    }
    }
teamColors(objTeam, "Charlotte Hornets")

function teamNames(obj){
    let teams =[ obj["away"]["teamName"]] +", "+obj["home"]["teamName"]
    // let away = obj["away"]["teamName"]
    // let home =obj["home"]["teamName"]
    // teams = home + away
    return teams
}
teamNames(objTeam)

function playerNumbers(obj,key){
    if (obj["home"]["teamName"]===key){
        let homeJerseyNumbers= []
        for (let i=0; i<Object.values(objTeam['home']['players']).length ;i++){
            homeJerseyNumbers.push(Object.values(objTeam['home']['players'])[i]['number']);
        }
        return homeJerseyNumbers
    }
    else if(obj['away']['teamName']===key){
        let awayJerseyNumbers= []
        for (let i=0; i<Object.values(objTeam['away']['players']).length ;i++){
            awayJerseyNumbers.push(Object.values(objTeam['away']['players'])[i]['number']);
    }
        return awayJerseyNumbers;
}
}
playerNumbers(objTeam,"Charlotte Hornets")


function playerStats(obj,key){ 
    for (let i = 0; i < Object.keys(obj['home']['players']).length; i++) {
        if(Object.keys(obj['home']['players'])[i] === key) {
            return obj['home']['players'][key]
        }
    else {
        return obj['away']['players'][key]
    }
    }

}
playerStats(objTeam,"Alan Anderson")
playerStats(objTeam,"Ben Gordon")
