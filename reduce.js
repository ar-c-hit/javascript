    let arr=[1,2,3,4,5,6,7];
    
    let num=arr.reduce((prev, current)=>{
        return prev+=current;
    });

    console.log(num);

    let greater=arr.reduce((prev, current)=>{
        return prev>current?prev:current;
    });

    console.log(greater);