// task!
// var username = prompt("enter user name")
// var phoneNumber = +prompt("enter phoneNumber")
// var emailAddress = prompt("enter email address")
// var password = prompt("Please enter your password: ")
// var confirmPassword = prompt("Confirm Password:")

// if(username==""|| phoneNumber == ""||emailAddress== ""||password==""||confirmPassword==""){
//     alert('All fields must be filled out')
// }

// if(password===confirmPassword){
//     alert("Welcome , Your account has been created. Please log in to continue")

// } else {
//     alert("enter same password")
// }


// taask2


// var word = prompt()
// var reverseword =""
// for(i=word.length-1;i>=0;i--){
//     reverseword+=word[i]

// }
// if(word===reverseword){
//     alert("the "+word+" is palindrom word")

// }else{
//     alert("the "+word+" is not a palindrom word")
// }


// task3

var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
evenNumber =""
oddNumber=""

for(i=0;i<=numberArray.length-1;i++){
    if(numberArray[i]%2==0){
        evenNumber+=numberArray[i]
    }else
    {
        oddNumber+=numberArray[i]
    }
}
document.write(` EVEN NUMBERS ARE ${evenNumber}  ` )
document.write(`ODD NUMBER ARE ${oddNumber} `)
