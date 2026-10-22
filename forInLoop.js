//used to go through every keys of an object
const student={
    name:"archit",
    sec:"A",
    roll:75,
    CGPA:9.9,
};
for(let key in student){
    console.log(key,"=",student[key]);
}