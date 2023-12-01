var word = prompt()
var reverseword =""
for(i=word.length-1;i>=0;i--){
    reverseword+=word[i]

}
if(word===reverseword){
    alert("the "+word+" is palindrom word")

}else{
    alert("the "+word+" is not a palindrom word")
}