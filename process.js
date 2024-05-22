$("#years").hide()

$(".results").click(function (e) { 
    e.preventDefault();
    getPeriod()
});


function getPeriod(){


    let startDate = ($("#startdate").val().split("-"));

    let endDate = $("#enddate").val().split("-")
   
   
   
    let startTime = $("#starttime").val().split(":") 
   
    let endTime = $("#endtime").val().split(":")
   
    // let result = calculateDates(startDate, endDate)
   


console.log(startTime.length + " start time")


   let start = startDate.concat(startTime)
   let end = endDate.concat(endTime)


const s = new Date(...start)
const e = new Date(...end)
let difference = s - e
if(difference < 0 ){
difference *= -1
}





console.log(difference + " difference")


let seconds = Math.floor(difference / 1000)
let remainingSeconds = seconds % 60
let minutes = Math.floor(seconds / 60)
let remainingMinutes = minutes % 60
let hours = Math.floor(minutes / 60)
let remainingHours = hours % 24
let days = Math.floor(hours / 24)
let years = Math.floor(days / 365)
let daysRemaining = days % 365
let months = 0
let remainingDays = daysRemaining
let 


if(daysRemaining > 31){
months = Math.floor(daysRemaining / 30)
remainingDays = daysRemaining % 30

console.log(remainingDays + " counting days")

}

if(years > 0){


    if(years === 1){
 $("#year").text(`${years} year`)
    }
    else{
         $("#year").text(`${years} years`)
    }
   
}


if(months > 0){


    if(months === 1){
 $("#months").text(`, ${months} month`)
    }
    else{
         $("#months").text(`, ${months} months`)
    }
   
}


if(remainingDays > 0){


    if(remainingDays === 1){
 $("#days").text(`, ${remainingDays} day`)
    }
    else{
         $("#days").text(`, ${remainingDays} days`)
    }
   
}

if(remainingHours > 0){


    if(remainingHours === 1){
 $("#hours").text(`, ${remainingHours} hour`)
    }
    else{
         $("#hours").text(`, ${remainingHours} hours`)
    }
   
}

if(remainingMinutes > 0){


    if(remainingMinutes === 1){
 $("#minutes").text(`, ${remainingMinutes} minute`)
    }
    else{
         $("#minutes").text(`, ${remainingMinutes} minutes`)
    }
   
}

if(remainingSeconds > 0){


    if(remainingSeconds === 1){
 $("#seconds").text(`, ${remainingSeconds} second`)
    }
    else{
         $("#seconds").text(`, ${remainingSeconds} seconds`)
    }
   
}

console.log(seconds + " seconds")
console.log(minutes + ' minutes')
console.log(hours + " hours")
console.log(days + 'days')
console.log(months + " months")
console.log(years + ' years')
console.log(remainingSeconds + " seconds Remaing")
console.log(remainingMinutes + " minutes Remaing")
console.log(remainingHours + " Hours Remaing")
console.log( daysRemaining + " days remaining (after year)")








}

