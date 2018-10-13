

document.getElementById("NextWeek").addEventListener("click", nextPage);
document.getElementById("PreviousWeek").addEventListener("click", previousPage);
document.getElementById("name").onkeypress=function(e){
    if(e.keyCode==13){
        name = document.getElementById('name').value
        document.getElementById("name").style.display = "none"
        document.getElementById("title").innerHTML = name;
    }
}

Days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

var currentDate = new Date();
wdnumToday = currentDate.getDay()-1
Today = Days[wdnumToday];



nextpageclicker = 0;
previouspageclicker = 0;

window.onload = nextPage();

function nextPage(){
    monthnumToday = currentDate.getDate()
    week = nextpageclicker-previouspageclicker;

    monthnumToday = monthnumToday + (7*week);
    

    document.getElementById(Today).innerHTML = Today + " " + monthnumToday;
    

    for(i = 0; i <= wdnumToday; i++){
        document.getElementById(Days[wdnumToday-i]).innerHTML = Days[wdnumToday-i] + " " + (monthnumToday-i);
    }

    
    for(i=Days.length-1;i>wdnumToday; i--){
        j = i - wdnumToday;
        document.getElementById(Days[i]).innerHTML = Days[i] + " " + (monthnumToday+j);
        
    }

    nextpageclicker = nextpageclicker + 1; 

}

function previousPage(){
    monthnumToday = currentDate.getDate()
    
    week = nextpageclicker-previouspageclicker;

    monthnumToday = monthnumToday + (7*(week-2));
    

    document.getElementById(Today).innerHTML = Today + " " + monthnumToday;
    

    for(i = 0; i <= wdnumToday; i++){
        document.getElementById(Days[wdnumToday-i]).innerHTML = Days[wdnumToday-i] + " " + (monthnumToday-i);
    }

    
    for(i=Days.length-1;i>wdnumToday; i--){
        j = i - wdnumToday;
        document.getElementById(Days[i]).innerHTML = Days[i] + " " + (monthnumToday+j);
        
    }

    previouspageclicker = previouspageclicker + 1; 


}


