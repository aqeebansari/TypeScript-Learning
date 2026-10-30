

let userName:string = "Aqeeb"

let lastName:string = "Ansari"

let fullName:string = `My fullname is ${userName} ${lastName}` // modern way ofdoing concat is using template literal i.e. backtick

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());



// Boolean

let isLoggedIn: boolean =true


if (isLoggedIn){
    console.log("Welcome User");
    
}else{
    console.log("Please log in ");
    
}