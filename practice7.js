function countVowels(str){
    let n=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
         n++;
        }
    }
return n;
}
// let txt=prompt("enter your text in small letters");
// console.log(countVowels(txt));
// console.log(countVowels("archit mishra"));

