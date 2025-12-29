

// ^ this DataBase :
let dataBase = []

// * Function ask user your name:
// function chooseAction() {
//     return prompt("Do you want register or login or change password?");
// }

// *  ask user 
while (true) {
    let askuser = prompt("Choose: register | login | change password | exit")

    if (askuser === "exit") {
        alert("Back to main menu")
        continue
    }

    if (askuser === "register") {
        registerUser(dataBase)
        continue
    }

    if (askuser === "login") {
        login(dataBase);
        continue
    }
    if(askuser === "change password"){
        changePass(dataBase)
        continue
    }

    alert("Invalid choice, try again");
}


// * Chack Name user if correct and clean
function getValidName() {
    let name = "";

    while (true) {
        name = prompt("Enter your full name");

       
        let trimmedName = name.trim();

       
        if (trimmedName.length < 5) {
            alert("Name must be at least 5 characters");
            continue;
        }

       
        let isValid = true;
        // !
        for (let i = 0; i < trimmedName.length; i++) {
            let char = trimmedName[i];

            if (
                (char >= "0" && char <= "9") ||
                char === "@" ||
                char === "#" ||
                char === "!"
            ) {
                isValid = false;
                break;
            }
        }
        // !
        if (!isValid) {
            alert("Name must not contain numbers or symbols");
            continue;
        }

      
        let fixedName =
            trimmedName.charAt(0).toUpperCase() +
            trimmedName.slice(1).toLowerCase();

        return fixedName; 
    }
}



// *  if action correct add name in database
let ActionUser = chooseAction()
if(ActionUser === "register"){
    registerUser(dataBase)
}



// Todo Chake email : 

function isCorrectEmail (dataBase) {
   
    while(true){
       let email = prompt("your Email")
        
        let removeSpace = email.trim()
        removeSpace = removeSpace.toLowerCase()
        // check lenght email 
        if(removeSpace.length < 10){
            alert("Your email is not valide")
            continue
        }
        // check espace in email
        if(removeSpace.includes(" ")){
            console.log("your emailIt contains a distance")
            continue
        }
        // check number @
        let NumberArobs = 0
        for(let i = 0 ;i< removeSpace.length ; i++){
            if(removeSpace[i] === "@"){
                NumberArobs ++
            }
        }
        if(NumberArobs !== 1){
            alert("your email There is more than @")
            continue
        }
     
        let isduplicate = false
        for(let i = 0 ; i<dataBase.length ; i++ ){
            if(dataBase[i].email  ===removeSpace){
                isduplicate = true
                break
            }
            
        }
        if(isduplicate){
            alert("this email Pre-registered ")
            continue
        }
        return removeSpace
    }
    
}


// todo check age : 
function CheckAge() {
    let age = "";

    while (true) {
        age = prompt("Enter your age");

        
        if (age.includes(" ")) {
            alert("Age must not contain spaces");
            continue;
        }

      
        if (age.length === 0) {
            alert("Age cannot be empty");
            continue;
        }

    
        if (age.length >= 3) {
            alert("Age must be one or two digits only");
            continue;
        }

        
        let isNumber = true;

        for (let i = 0; i < age.length; i++) {
            if (age[i] < "0" || age[i] > "9") {
                isNumber = false;
                break;
            }
        }

        if (!isNumber) {
            alert("Age must contain digits only");
            continue;
        }

        return age; 
    }
}

// todo Chack passwored :

function checkPassword() {
    let password = "";

    while (true) {
        password = prompt("Enter your password");

        
        if (password.includes(" ")) {
            alert("Password must not contain spaces");
            continue;
        }

       
        if (password.length < 7) {
            alert("Password must be at least 7 characters");
            continue;
        }

        let hasSpecial = false;
        let specialChars = ["@", "#", "-", "+", "*", "/"];

        for (let i = 0; i < password.length; i++) {
            if (specialChars.includes(password[i])) {
                hasSpecial = true;
                break;
            }
        }

        if (!hasSpecial) {
            alert("Password must contain at least one special character");
            continue;
        }

        return password; 
    }
}

function confirmPass (firstPassword) {
    let validePass = prompt("confirm your password")
    if(validePass !== firstPassword ){
        alert("your password not match")
        return false;
    }
    return true
}



// * push data user in Databae :
function registerUser(database) {
    let userName = getValidName();
    let email = isCorrectEmail(dataBase)
    let age = CheckAge()
    let password = checkPassword()
    
    let confirmed = confirmPass(password)
    if(!confirmed) return ; 

    database.push({
        name : userName,
        email : email, 
        age : age,
        password : password
    })
    
    alert("Registration successful");
}


console.log(dataBase)

// ? change passowrd :

function changePass (database) {
   let email = prompt("enter your email").trim().toLowerCase()
   
   let user = null
   for(let i = 0 ; i < dataBase.length ; i++){
    if(dataBase[i].email === email){
        user = dataBase[i]
        break;
    }
   }
   if(!user){
     alert("email not found")
     
   }

   let oldPass = prompt("enter your old password")
   if(user.password !== oldPass ){
    alert("old password is incorrocet")
    return

   }

   let newpass = changePass()
   let isConfirm = confirmPass(newpass)
   if(!isConfirm) return;

   user.password = newpass
   alert("passowr changed")

   

}


function login (dataBase){
    let EMAIL = prompt("enter your email").trim().toLowerCase()
    let PASSWORD = prompt ('enter your password')
    let founduser = null
    // check if in database:
    for (let i = 0 ; i< dataBase.length ; i++) {
        if(dataBase[i].email === EMAIL){
            founduser = dataBase[i]
            break;
        }
    }
    if(!founduser){
        alert("email is not found")
        return
    }
    // check password :
    if(founduser.password !== PASSWORD){
        alert("password incorrec. try again")
        return

    }
    alert("succesful login")
}






