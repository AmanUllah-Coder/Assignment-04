// Problem 05:  Predict Avarage Waiting Time 

function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
      return "Invalid Input";
    }
    const vivaFinished = serialNumber - waitingTimes.length - 1;
    if (vivaFinished <= 0) {
      return 0;
    }
    let serial = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        serial += waitingTimes[i];
    }
    let average_Time = Math.round(serial / waitingTimes.length);
    return vivaFinished * average_Time;
  }
  console.log(waitingTime([3, 5, 7, 11, 6], 10)); 
  console.log(waitingTime([13, 2], 6)); 
  console.log(waitingTime([13, 2, 6, 7, 10], 6)); 
  console.log(waitingTime([6], 4)); 
  console.log(waitingTime(7, 10)); 
  console.log(waitingTime("[6,2]", 9)); 
  console.log(waitingTime([7, 8, 3, 4, 5], "9"));
  

