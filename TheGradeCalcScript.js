function reload(){
    location.reload();
}
function gradeCalc(){

    var grades = [93, 90, 87, 83, 80, 77, 73, 70, 67, 63, 60];

    //obtaining information
    var className = document.getElementById("className").value; 
    var finalex = document.getElementById("finalex").value * 1;
    
    //remove later
    // var values = [];
    // var g1 = document.getElementById("g1").value * 1;
    // var g2 = document.getElementById("g2").value * 1;
    // var p1 = document.getElementById("p1").value * 1;
    // var p2 = document.getElementById("p2").value * 1;
    // values.push(g1);
    // values.push(g2);
    // values.push(p1);
    // values.push(p2);
    // var validcounter = 0;
    // for(i = 0; i < 4; i++) {
    //      var temp = values.pop();
    //      if (temp <= 0 | temp > 100) {
    //          validcounter++;
    //      }
    // }

    var validcounter = 0;

    //copies values in fields: grades and percentages
    var grayeds = document.getElementsByName("grayed");
    var percys = document.getElementsByName("percy");

    //makes sure there are valid numbers in the fields
    for(i = 0; i < grayeds.length; i++) {
        if(grayeds[i].value <= 0 || percys[i].value <= 0 || percys[i].value > 100) {
            validcounter++;
        }
    }
    if(validcounter > 0 || finalex > 100) {
        alert("Please Input Valid Values");
        return;
    }

    //removes old calculations
    for(j = 0; j < grades.length; j++) {
        document.getElementById("get"+grades[j]).innerHTML = "";
    }
    document.getElementById("theClass").innerHTML = "";
    document.getElementById("currentGrade").innerHTML = "";

    //chooses how to start the paragraph depending on if the class is defined
    if(className == "") {
        document.getElementById("theClass").innerHTML = "Information about your unspecified class:"
    }
    else {
        document.getElementById("theClass").innerHTML = "Information about your class, " + className + ":";
    }

    //creates helpful variables
    var existingScores = 0;
    var weights = 0;
    for(k = 0; k < grayeds.length; k++) {
        existingScores = existingScores + (grayeds[k].value*percys[k].value*.01);
        weights = (weights*1) + (percys[k].value*1);
    }

    //calculates the final grade based on what has already been taken
    var finalGrade = (existingScores/weights)*100;
    document.getElementById("currentGrade").innerHTML = "Your final current grade is: " + finalGrade;
    
    //if the user wants to find out what they need to get on their next assignment
    if(finalex > 0) {
        var totalPercent = (weights*1) + (finalex*1);
        for(i = 0; i < grades.length; i++) {
            var temp = (grades[i] * .01 * totalPercent) - existingScores;
            temp = (temp/(.01*finalex));
            document.getElementById("get" + grades[i]).innerHTML = "You need to get a " + temp + " to get a " + grades[i];
        }
        
        // var toget93 = ((93/100) * totalPercent) - existingScores;
        // toget93 = (toget93/(.01*finalex));
        // document.getElementById("get93").innerHTML = "You need to get a " + toget93 + " to get a 93";
        // var toget90 = ((90/100) * totalPercent) - existingScores;
        // toget90 = (toget90/(.01*finalex));
        // document.getElementById("get90").innerHTML = "You need to get a " + toget90 + " to get a 90";
        // var toget87 = ((87/100) * totalPercent) - existingScores;
        // toget87 = (toget87/(.01*finalex));
        // document.getElementById("get87").innerHTML = "You need to get a " + toget87 + " to get a 87";
        // var toget83 = ((83/100) * totalPercent) - existingScores;
        // toget83 = (toget83/(.01*finalex));
        // document.getElementById("get83").innerHTML = "You need to get a " + toget83 + " to get a 83";
        // var toget80 = ((80/100) * totalPercent) - existingScores;
        // toget80 = (toget80/(.01*finalex));
        // document.getElementById("get80").innerHTML = "You need to get a " + toget80 + " to get a 80";
    }

    //test for grades in array

    //document.getElementById("get83").innerHTML = grayeds[0].value*1;
    //document.getElementById("get80").innerHTML = grayeds[1].value*1;
    

    //var test = document.getElementById("reloadButton");
    //test.value = "Try another class!";
    document.getElementById("texttoshow").style.display = "inline";
}