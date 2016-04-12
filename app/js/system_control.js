var rootRef = new Firebase("https://blinding-torch-889.firebaseio.com/");

    /*rootRef.child("current").on("value", function(snapshot) {
        if(snapshot.val() == 1) {
            document.getElementById("waterLevelCheckBox").checked = true;
        } else if (snapshot.val() == 0) {
            document.getElementById("waterLevelCheckBox").checked = false;
        }
    });*/
    
    // Populate the systems list
    rootRef
    
    $("#system-list")
    
    
    rootRef.child("light1/on_actual").on("value", function(snapshot) {
        var element = document.getElementById("light1_on_off_actual_switch");
        
        if(snapshot.val() == false) {
            document.getElementById("light1_on_off_actual_switch").checked = false;

        } else if (snapshot.val() == true) {
             document.getElementById("light1_on_off_actual_switch").checked = true;
        }
    });
    
    function updateLight1OnDesired(val) {
        rootRef.child("light1/on_desired").set(val);
    }
	
	function updateLight1Bloom(val) {
		rootRef.child("light1/bloom").set(val);
	}
	
	function updateLight1Grow(val) {
		rootRef.child("light1/grow").set(val);
	}
	
	function updateLight1Veg(val) {
		rootRef.child("light1/veg").set(val);
	}
    
    rootRef.child("light1/lightCycle/turnOnTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light1_TurnOn_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
        
    function updateLight1OnHour(val) {
        rootRef.child("light1/lightCycle/turnOnTime/hour").set(val);
    }
    
    rootRef.child("light1/lightCycle/turnOnTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light1_TurnOn_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    function updateLight1OnMinute(val) {
        rootRef.child("light1/lightCycle/turnOnTime/minute").set(val);
    }

    rootRef.child("light1/lightCycle/turnOffTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light1_TurnOff_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    
    function updateLight1OffHour(val) {
        rootRef.child("light1/lightCycle/turnOffTime/hour").set(val);
    }
    
    rootRef.child("light1/lightCycle/turnOffTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light1_TurnOff_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    function updateLight1OffMinute(val) {
        rootRef.child("light1/lightCycle/turnOffTime/minute").set(val);
    }
    
    //////Light 2/////////
    rootRef.child("light2/lightCycle/turnOnTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOn_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    rootRef.child("light2/lightCycle/turnOnTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOn_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    rootRef.child("light2/lightCycle/turnOffTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOff_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    rootRef.child("light2/lightCycle/turnOffTime/minute").on("value", function(snapshot){
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
    rootRef.child("light3/lightCycle/turnOnTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOn_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    rootRef.child("light3/lightCycle/turnOnTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOn_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    rootRef.child("light3/lightCycle/turnOffTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOff_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    rootRef.child("light3/lightCycle/turnOffTime/minute").on("value", function(snapshot){
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
    rootRef.child("waterer1/watererCycle/duration").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle1_duration");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    rootRef.child("waterer1/watererCycle/frequency").on("value", function(snapshot){
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
    rootRef.child("waterer2/watererCycle/duration").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle2_duration");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    }); 
    rootRef.child("waterer2/watererCycle/frequency").on("value", function(snapshot){
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
    rootRef.child("waterer3/watererCycle/duration").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle3_duration");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });     
    rootRef.child("waterer3/watererCycle/frequency").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle3_frequency");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    rootRef.child("light3/auto_manual").on("value", function(snapshot) {
        if(snapshot.val() == "manual") {
            document.getElementById("light3_manual_mode").checked = true;

        } else if (snapshot.val() == "auto") {
            document.getElementById("light3_manual_mode").checked = false;

        }
    });
    rootRef.child("light3/on_actual").on("value", function(snapshot) {
        if(snapshot.val() == false) {
            document.getElementById("light3_on_off_actual").checked = false;

        } else if (snapshot.val() == true) {
            document.getElementById("light3_on_off_actual").checked = true;
        }
    });
    
    
    ///////////////////////////Pot 1
    rootRef.child("pod1/light").on("value", function(snapshot) {
        
        var element = document.getElementById("pot1_light");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pod1/ph_level").on("value", function(snapshot) {
        
        var element = document.getElementById("pot1_PhLevel");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pot1/temperature").on("value", function(snapshot) {
        
        var element = document.getElementById("pot1_Temperature");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pot1/waterer").on("value", function(snapshot) {
        
        var element = document.getElementById("pot1_Waterer");
        element.value = snapshot.val();
        $('select').material_select();
    });

    ///////////////////////////Pot 2
    rootRef.child("pod2/light").on("value", function(snapshot) {
        
        var element = document.getElementById("pot2_light");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pod2/ph_level").on("value", function(snapshot) {
        
        var element = document.getElementById("pot2_PhLevel");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pot2/temperature").on("value", function(snapshot) {
        
        var element = document.getElementById("pot2_Temperature");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pot2/waterer").on("value", function(snapshot) {
        
        var element = document.getElementById("pot2_Waterer");
        element.value = snapshot.val();
        $('select').material_select();
    });    

    ///////////////////////////Pot 3
    rootRef.child("pod3/light").on("value", function(snapshot) {
        
        var element = document.getElementById("pot3_light");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pod3/ph_level").on("value", function(snapshot) {
        
        var element = document.getElementById("pot3_PhLevel");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pot3/temperature").on("value", function(snapshot) {
        
        var element = document.getElementById("pot3_Temperature");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pot3/waterer").on("value", function(snapshot) {
        
        var element = document.getElementById("pot3_Waterer");
        element.value = snapshot.val();
        $('select').material_select();
    });    
    ///////////////////////////Pot 4
    rootRef.child("pod4/light").on("value", function(snapshot) {
        
        var element = document.getElementById("pot4_light");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pod4/ph_level").on("value", function(snapshot) {
        
        var element = document.getElementById("pot4_PhLevel");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pot4/temperature").on("value", function(snapshot) {
        
        var element = document.getElementById("pot4_Temperature");
        element.value = snapshot.val();
        $('select').material_select();
    });
    rootRef.child("pot4/waterer").on("value", function(snapshot) {
        
        var element = document.getElementById("pot4_Waterer");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ///////////////////////////Pot 5
    
    ///////////////////////////Pot 6
    
function testFunction(cb) {

    if(cb.checked == true) {
        rootRef.child("current").set(1);
    } else {
        //alert("not checked!")
        rootRef.child("current").set(0);
    }
}
