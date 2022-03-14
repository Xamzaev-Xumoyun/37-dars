function date(){
    var date = new Date();
    var day = date.getDate(); 
    var mouth = date.getMonth();
    var year = date.getMonth();
    return `${date}. ${mouth}. ${year}г`
}

console.log(date());