// Problem-01 : Tax Calculator

function calculateTax(income, expenses) {
    const profit = income - expenses;
    if(income < 0 || expenses < 0 || profit < 0 ) {
        return "Invalid Input";
    } 
    return profit *0.20;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));


// Problem 02 : Notification Generator

function sendNotification(email) {
    if (email.indexOf("@") === -1) {
        return "Invalid Email";
    }
    const main = email.split("@");
    const userName = main[0];
    const domainName = main[1];
    return `${userName} sent you an email from ${domainName}`;

}
console.log(sendNotification("aman@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));

// Problem-03: Checking Digits Inside a Name

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < name.length; i++) {
    let check = name[i];
    if (check >= "0" && check <= "9") {
      return true;
    }
  }
  return false;
}
console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));

// Problem 04 : Calculate Admission Final Score 

function calculateFinalScore(obj) {
    if (typeof obj !== "object" || obj === null){
        return "Invalid Input";
    }
    if (typeof obj.name !== "string" ||
        typeof obj.testScore !== "number" ||
        typeof obj.schoolGrade !== "number" ||
        typeof obj.isFFamily !== "boolean"
      ) {
        return "Invalid Input";
      }
      if (obj.testScore > 50 || obj.schoolGrade > 30) {
        return "Invalid Input";
      }
      let Score = obj.testScore + obj.schoolGrade;
      if (obj.isFFamily) {
        Score += 20;
      }
      if (Score >= 80) return true;
    
      return false;
}
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
); 
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
); 
console.log(calculateFinalScore("hello")); 
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
); 

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
  

