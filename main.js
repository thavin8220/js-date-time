let date=new Date();
console.log(date);
let time=date.setTime(prompt("Enter the Time"));
if(time<12){
    console.log("morning")
}
else if(16>=time){
    console.log("Afternoon")
}

else if(19>=time){
    console.log("Evening")
}
else if (24>=time){
    console.log("Night")
}
else{
    console.log("Out Of Time")
}
