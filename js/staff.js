//IIFE
(function(){
    //start
    console.info("Hello");

    //creates an object
    //creates name and value
    var myObject = {
        firstname: "Amina",
        surname: "Javed",
        email: "amjaved904@gmail.com",
        qualifications:{
            gcse: true,
            alevel: true,
            beng: false
        }
    };
    console.dir(myObject);
    //end
})();
