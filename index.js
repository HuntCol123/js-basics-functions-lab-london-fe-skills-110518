// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  let blockDistance = Math.abs(someValue - 42);
  return blockDistance;
}

function distanceFromHqInFeet(someValue) {
  let feetDistanceHQ = (distanceFromHqInBlocks(someValue) * 264)  
 return feetDistanceHQ;
    }
    

function distanceTravelledInFeet(start, destination) {
 let distanceTravelled = Math.abs(start - destination)*264;
 return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
  let price; 
  if (distanceTravelledInFeet(start, destination) <= 400) {
    price = 0;
  }
  else if (distanceTravelledInFeet(start, destination) >400 && <2000){
    
  }
  return price; 
}