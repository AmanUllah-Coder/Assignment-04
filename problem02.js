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