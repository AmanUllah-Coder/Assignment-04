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