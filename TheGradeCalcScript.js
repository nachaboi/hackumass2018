function reload(){
    location.reload();
}
function gradeCalc(){

    var grades = [93, 90, 87, 83, 80, 77, 73, 70, 67, 63, 60];

    //obtaining information
    var className = document.getElementById("className").value; 
    
    //remove later
    var values = [];
    var g1 = document.getElementById("g1").value * 1;
    var g2 = document.getElementById("g2").value * 1;
    var p1 = document.getElementById("p1").value * 1;
    var p2 = document.getElementById("p2").value * 1;
    var finalex = document.getElementById("finalex").value * 1;
    values.push(g1);
    values.push(g2);
    values.push(p1);
    values.push(p2);
    var validcounter = 0;
    for(i = 0; i < 4; i++) {
         var temp = values.pop();
         if (temp <= 0 | temp > 100) {
             validcounter++;
         }
    }

    var grayeds = document.getElementsByName("grayed");
    var percys = document.getElementsByName("percy");

    



    document.getElementById("get90").innerHTML = "";
    document.getElementById("theClass").innerHTML = "";
    document.getElementById("currentGrade").innerHTML = "";


    if(validcounter > 0) {
        alert("Please Input Valid Values");
        return;
    }

    if(className == "") {
        document.getElementById("theClass").innerHTML = "Information about your unspecified class:"
    }
    else {
        document.getElementById("theClass").innerHTML = "Information about your class, " + className + ":";
    }
    
    var finalGrade = ((g1*p1*.01) + (g2*p2*.01));
    var weights = (p1)+(p2); 
    finalGrade = (finalGrade/weights)*100;
    document.getElementById("currentGrade").innerHTML = "Your final current grade is: " + finalGrade;
    if(finalex > 0 && finalex <=100) {
        var existingScores = (g1*p1*.01) + (g2*p2*.01);
        var totalPercent = (p1+p2+finalex);
        var toget93 = ((93/100) * totalPercent) - existingScores;
        toget93 = (toget93/(.01*finalex));
        document.getElementById("get93").innerHTML = "You need to get a " + toget93 + " to get a 93";
        var toget90 = ((90/100) * totalPercent) - existingScores;
        toget90 = (toget90/(.01*finalex));
        document.getElementById("get90").innerHTML = "You need to get a " + toget90 + " to get a 90";
        var toget87 = ((87/100) * totalPercent) - existingScores;
        toget87 = (toget87/(.01*finalex));
        document.getElementById("get87").innerHTML = "You need to get a " + toget87 + " to get a 87";
        var toget83 = ((83/100) * totalPercent) - existingScores;
        toget83 = (toget83/(.01*finalex));
        document.getElementById("get83").innerHTML = "You need to get a " + toget83 + " to get a 83";
        var toget80 = ((80/100) * totalPercent) - existingScores;
        toget80 = (toget80/(.01*finalex));
        document.getElementById("get80").innerHTML = "You need to get a " + toget80 + " to get a 80";
    }

    //test for grades in array

    //document.getElementById("get83").innerHTML = grayeds[0].value*1;
    //document.getElementById("get80").innerHTML = grayeds[1].value*1;
    

    //var test = document.getElementById("reloadButton");
    //test.value = "Try another class!";
    document.getElementById("texttoshow").style.display = "inline";
}