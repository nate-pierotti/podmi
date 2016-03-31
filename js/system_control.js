var myFirebaseRef = new Firebase("https://blinding-torch-889.firebaseio.com/");

    /*myFirebaseRef.child("current").on("value", function(snapshot) {
        if(snapshot.val() == 1) {
            document.getElementById("waterLevelCheckBox").checked = true;
        } else if (snapshot.val() == 0) {
            document.getElementById("waterLevelCheckBox").checked = false;
        }
    });*/
    
    myFirebaseRef.child("light1/on_actual").on("value", function(snapshot) {
        var element = document.getElementById("light1_on_off_actual_switch");
        
        if(snapshot.val() == false) {
            document.getElementById("light1_on_off_actual_switch").checked = false;

        } else if (snapshot.val() == true) {
             document.getElementById("light1_on_off_actual_switch").checked = true;
        }
    });
    
    function fbUpdateLight1OnDesired(val) {
        myFirebaseRef.child("light1/on_desired").set(val);
    }
    
    myFirebaseRef.child("light1/lightCycle/turnOnTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light1_TurnOn_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
        
    function fbUpdateLight1OnHour(val) {
        myFirebaseRef.child("light1/lightCycle/turnOnTime/hour").set(val);
    }
    
    myFirebaseRef.child("light1/lightCycle/turnOnTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light1_TurnOn_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    function fbUpdateLight1OnMinute(val) {
        myFirebaseRef.child("light1/lightCycle/turnOnTime/minute").set(val);
    }

    myFirebaseRef.child("light1/lightCycle/turnOffTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light1_TurnOff_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    
    function fbUpdateLight1OffHour(val) {
        myFirebaseRef.child("light1/lightCycle/turnOffTime/hour").set(val);
    }
    
    myFirebaseRef.child("light1/lightCycle/turnOffTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light1_TurnOff_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    function fbUpdateLight1OffMinute(val) {
        myFirebaseRef.child("light1/lightCycle/turnOffTime/minute").set(val);
    }
    
    //////Light 2/////////
    myFirebaseRef.child("light2/lightCycle/turnOnTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOn_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    myFirebaseRef.child("light2/lightCycle/turnOnTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOn_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    myFirebaseRef.child("light2/lightCycle/turnOffTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOff_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    myFirebaseRef.child("light2/lightCycle/turnOffTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOff_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });    
    //////Light 3/////////
    myFirebaseRef.child("light3/lightCycle/turnOnTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOn_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    myFirebaseRef.child("light3/lightCycle/turnOnTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOn_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    myFirebaseRef.child("light3/lightCycle/turnOffTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOff_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    myFirebaseRef.child("light3/lightCycle/turnOffTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOff_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    ///////////Watering Cycle 1
    myFirebaseRef.child("waterer1/duration").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle1_duration");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    myFirebaseRef.child("waterer1/frequency").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle1_frequency");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    }); 

    ///////////Watering Cycle 2
    myFirebaseRef.child("waterer2/duration").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle2_duration");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    }); 
    myFirebaseRef.child("waterer2/frequency").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle2_frequency");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });     
    
    ///////////Watering Cycle 3
    myFirebaseRef.child("waterer3/duration").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle3_duration");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });     
    myFirebaseRef.child("waterer3/frequency").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle3_frequency");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    myFirebaseRef.child("light3/auto_manual").on("value", function(snapshot) {
        window.alert(snapshot.val());
        if(snapshot.val() == "manual") {
            document.getElementById("light3_manual_mode").checked = true;

        } else if (snapshot.val() == "auto") {
            document.getElementById("light3_manual_mode").checked = false;

        }
    });
    myFirebaseRef.child("light3/on_actual").on("value", function(snapshot) {
        if(snapshot.val() == false) {
            window.alert("false");
            document.getElementById("light3_on_off_actual").checked = false;

        } else if (snapshot.val() == true) {
             window.alert("true");
             document.getElementById("light3_on_off_actual").checked = true;
        }
    });
    
function testFunction(cb) {

    if(cb.checked == true) {
        myFirebaseRef.child("current").set(1);
    } else {
        //alert("not checked!")
        myFirebaseRef.child("current").set(0);
    }
}
