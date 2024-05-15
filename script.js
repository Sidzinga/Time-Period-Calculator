
$("#submit").click(function(e){
e.preventDefault()

 let startDate = ($("#startdate").val().split("-"));

 let endDate = $("#enddate").val().split("-")



 let startTime = $("#starttime").val().split(":")

 let endTime = $("#endtime").val().split(":")

 let result = calculateDates(startDate, endDate)

console.log("hello")

if(result.Years >= 1){

  

  if(result.Years = 1 ){
    $('#answer').text(`This is a period of ${result.Years} year`)
  }

  else {
      $('#answer').text(`This is a period of ${result.Years} year`)
  }
  

}


else {

  if(result.Years < 1 && result.Months >= 1){

$('#answer').text(`This is a period of ${result.Months} months`)

}

if(result.Months <=1 && result.Years <= 1 ){

$('#answer').text(`This is a period of ${result.Days} days`)
  
}

}


  });







function calculateDates(start, end){

  let startYear = parseInt(start[0])

  let startMonth = parseInt(start[1])

  let startDay = parseInt(start[2])


  let endYear =  parseInt(end[0])

  let endMonth = parseInt(end[1])

  let endDay = parseInt(end[2])


let years

let months

let days


  if(startYear > endYear){

 years =  startYear - endYear
  }

  else if(startYear < endYear){
    
 years = endYear - startYear
  }
  

  if(startMonth > endMonth){

  months =  startMonth - endMonth
     }
   
     else if(startMonth < endMonth){
       
    months = endMonth - startMonth
     }


     if(startDay > endDay){

      days =  startDay - endDay
         }
       
         else if(startDay < endDay){
           
        days = endDay - startDay
         }




return {
  
  Years:years,
  Months:months,
  Days:days
}


}

function calculateTime(start, end){

}