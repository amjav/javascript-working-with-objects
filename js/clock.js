(function(){
    console.info("Hello JS");

    //create a new DOM element. takes a parameter that is a html 
    //element, useful to store result in a variable
    var myNode = document.createElement('div');
    ////target element. appendChild() method of the document object to add 
    //that is used to add a new element as a child of a targetted one
    document.getElementById('digitalClock').appendChild(myNode);
    //myNode.innerHTML = "Welcome";

    //instantiate a new date object
    //var myDate = new Date();

    //view in the console
    //console.dir(myDate);

    //add date object to the DOM
    //myNode.innerHTML = myDate.toDateString();

    //method to call a function at a set time interval
    //window object - has a set of functions and methods
    //one of the methods is the setInterval() takes 2 parameters 
    //a function call and then the time interval between calls
    //a value in milli seconds

    //calling an anonymous function
    // setInterval(function() {
    //     //do something
    // }, 1000);


    //calling a named function
    // var updateTime = function(){
    //     console.info('tick tock');
    // }

    // setInterval(updateTime, 1000);

    // var updateTime = function(){
    //     var myDate = new Date();
    //     var myHours = checkForLeadingZeros(myDate.getHours());
    //     var myMins = checkForLeadingZeros(myDate.getMinutes());
    //     var mySeconds = checkForLeadingZeros(myDate.getSeconds());
    //     var myTimeDisplay = myHours + ":"+ myMins +":"+ mySeconds;
    //     myNode.innerHTML = myTimeDisplay;
    // }
    // setInterval(updateTime, 1000);

    //option 1 to format output:  Breaking the Time Down into Hours Minutes and Seconds

    // var myDate = new Date();
    // var myHours = myDate.getHours();
    // var myMins = myDate.getMinutes();
    // var mySeconds = myDate.getSeconds();

    // if (myHours < 10){
    //     myHours = "0"+myHours;
    // }
    // if (myMins < 10){
    //     myMins = "0"+myMins;
    // }
    // if (mySeconds < 10){
    //     mySeconds = "0"+mySeconds;
    // }

    //reduce code
    // var checkForLeadingZeros  = function (timeVal){
    //     if(timeVal < 10){
    //         timeVal = "0"+timeVal;
    //     }
    //     return timeVal;
    // }

    //option 2: String Object Manipulation
    //manipulating the string value aquired from toTimeString();

    

    //analogue clock

    //change clock hand colour
    document.getElementById('hrHand').style.backgroundColor = '#0ff';

    //change the rotation using the transform property
    //document.getElementById('hrHand').style.transform = "rotate(145deg)";


    
    //apply rotation to the div#secondHand 

    


    var updateTime = function(){
            var myDate = new Date();

            //create variables for the rotations
            //360 divided by 60 is the degree for each second in a clock
            //-90 to start from 12 not from rest position
            var rotSeconds = (myDate.getSeconds() * 6) - 90;
            var rotMinutes  = (myDate.getMinutes() * 6) - 90;
            //add a fraction of an hour, before mult by 30 add a fraction of an hour
            var rotHours = ((myDate.getHours() + myDate.getMinutes()/60) * 30) - 90;


            //get secondHandId apply transform property ehivh will rotate 
            //the hand every second
            document.getElementById('secondHand').style.transform =
                'rotate('+rotSeconds+'deg)';

            document.getElementById('minHand').style.transform =
                'rotate('+rotMinutes+'deg)';  
                
            document.getElementById('hrHand').style.transform =
                'rotate('+rotHours+'deg)';    
                
            myNode.innerHTML = myDate.toTimeString().substr(0, 8);
    }

        updateTime();
        setInterval(updateTime, 1000);
        
})();