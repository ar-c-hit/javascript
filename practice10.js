let n=prompt("entyer size of array");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}

let sum=arr.reduce((prev, current)=>{
    prev+=current;
    return prev;
});

let prod=arr.reduce((prev,current)=>{
    prev*=current;
    return prev;
})