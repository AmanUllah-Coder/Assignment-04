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