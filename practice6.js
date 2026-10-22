let companies=["Blppmberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
//removing the first company
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

