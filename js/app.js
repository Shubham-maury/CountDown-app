const inputs = document.querySelectorAll("input")
document.getElementById('getstart').addEventListener('click',()=>{
    clock();
    setInterval(
        () => {
            clock()
        },
        1000
    )
})
function GetEndTime(){
    const years  = Number(inputs[0].value);
    const months = Number(inputs[1].value);
    const days = Number(inputs[2].value);
    const hours = Number(inputs[3].value);
    const minutes = Number(inputs[4].value);
    const seconds = Number(inputs[5].value);   
    let miliseconds = 0;
    if(isNaN(years) || isNaN(months) || isNaN(days)){ 
        alert("Enter a valid Date");
        return miliseconds;
    }
    if( isNaN(hours) || isNaN(minutes) || isNaN(seconds)){
        alert("Enter a valid time"); 
        return miliseconds;
    }
    if(months>12 || months<0){
        alert("Enter a valid month");
        return miliseconds;
    }
    if(days<0){
        alert("Enter a valid date");
        return miliseconds;
    }
    if(months===1 || months===3 || months===5 || months===7 || months===8 || months===10 || months===12){
        if(days>30){
            alert("Enter a valid date");
            return miliseconds;
        }
    }
    if(months===4 || months===6 || months===9 || months===11 ){
        if(days>31){
            alert("Enter a valid date");
            return miliseconds;
        }
    }
    if(months===2){
        if((years%4==0 && years%100!=0) || years%400===0){
            if(days>29){
                alert("Enter a valid date");
                return miliseconds
            }
        }
        else{
            if(days>28){
                alert("Enter a valid date");
                return miliseconds;
            }
        }
    }
    if(hours<0 || hours>24){
        alert("Enter a valid hour");
        return miliseconds;
    }
    if(minutes<0 || minutes>60){
        alert("Enter a valid minutes");
        return miliseconds;
    }
    if(seconds<0 || seconds>60){
        alert("Enter a valid seconds");
        return miliseconds;
    }
    const date = new Date(years, months- 1, days, hours,minutes, seconds);
    miliseconds = date.getTime();

    return miliseconds;
}  
function clock() {  
    const end = GetEndTime();
    const now = new Date();
    let diff = (end - now) / 1000; 
    
    if (diff <= 0) {
        document.getElementById('timeup').innerHTML = 'Time up !'
        return;
    }

    // convert into days;
    inputs[6].value = Math.floor(diff /(60*60*24*365));
    diff = diff-inputs[6].value*30.44*60*60*24;
    inputs[7].value = Math.floor(diff/(30.44*60*60*24));
    diff = diff-inputs[7].value*60*60*24;
    inputs[8].value = Math.floor(diff/(60*60*24));
    diff = diff-inputs[8].value;
    inputs[9].value = Math.floor(diff/(60*60)) ;
    diff = diff-inputs[9].value*60*60;
    inputs[10].value = Math.floor(diff/60) ;
    diff = diff - inputs[10].value*60;
    inputs[11].value = Math.floor(diff) ;
     
}

 

