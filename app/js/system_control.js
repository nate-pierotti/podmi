var ref = new Firebase("https://blinding-torch-889.firebaseio.com/users");

var authData = ref.getAuth();
var userRef = ref.child(authData.uid);

    /*ref.child("current").on("value", function(snapshot) {
        if(snapshot.val() == 1) {
            document.getElementById("waterLevelCheckBox").checked = true;
        } else if (snapshot.val() == 0) {
            document.getElementById("waterLevelCheckBox").checked = false;
        }
    });*/
    
    
    // Populate the systems list:
    //  -- child_added is triggered once for each existing child and then again
    //     every time a new child is added to the specified path
    //  -- select the first system in the list by default
    var count = 0;
    userRef.on("child_added", function(snapshot) {
      var newChild = snapshot.key();
      if (count != 0) {
        $("div#system-list").append('<a class="collection-item white black-text" onclick="switchSystems(this)">' + newChild + '</a>');
      } else if (count == 0) {
        $("div#system-list").append('<a class="collection-item white black-text active" onclick="switchSystems(this)">' + newChild + '</a>');
      }
    });
    
    ref.child("light1/on_actual").on("value", function(snapshot) {
        var element = document.getElementById("light1_on_off_actual_switch");
        
        if(snapshot.val() == false) {
            document.getElementById("light1_on_off_actual_switch").checked = false;

        } else if (snapshot.val() == true) {
             document.getElementById("light1_on_off_actual_switch").checked = true;
        }
    });
    
    function updateLight1OnDesired(val) {
        ref.child("light1/on_desired").set(val);
    }
	
	function updateLight1Bloom(val) {
		ref.child("light1/bloom").set(val);
	}
	
	function updateLight1Grow(val) {
		ref.child("light1/grow").set(val);
	}
	
	function updateLight1Veg(val) {
		ref.child("light1/veg").set(val);
	}
    
    ref.child("light1/lightCycle/turnOnTime/hour").on("value", function(snapshot){
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
        ref.child("light1/lightCycle/turnOnTime/hour").set(val);
    }
    
    ref.child("light1/lightCycle/turnOnTime/minute").on("value", function(snapshot){
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
        ref.child("light1/lightCycle/turnOnTime/minute").set(val);
    }

    ref.child("light1/lightCycle/turnOffTime/hour").on("value", function(snapshot){
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
        ref.child("light1/lightCycle/turnOffTime/hour").set(val);
    }
    
    ref.child("light1/lightCycle/turnOffTime/minute").on("value", function(snapshot){
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
        ref.child("light1/lightCycle/turnOffTime/minute").set(val);
    }
    
    //////Light 2/////////
    ref.child("light2/lightCycle/turnOnTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOn_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    ref.child("light2/lightCycle/turnOnTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOn_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    ref.child("light2/lightCycle/turnOffTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light2_TurnOff_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    ref.child("light2/lightCycle/turnOffTime/minute").on("value", function(snapshot){
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
    ref.child("light3/lightCycle/turnOnTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOn_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    ref.child("light3/lightCycle/turnOnTime/minute").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOn_Minute");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    
    ref.child("light3/lightCycle/turnOffTime/hour").on("value", function(snapshot){
        var element = document.getElementById("Light3_TurnOff_Hour");
    
        for (var i = 1; i < 24; i++){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 24;
            }
        }
    });
    ref.child("light3/lightCycle/turnOffTime/minute").on("value", function(snapshot){
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
    ref.child("waterer1/watererCycle/duration").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle1_duration");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    ref.child("waterer1/watererCycle/frequency").on("value", function(snapshot){
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
    ref.child("waterer2/watererCycle/duration").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle2_duration");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    }); 
    ref.child("waterer2/watererCycle/frequency").on("value", function(snapshot){
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
    ref.child("waterer3/watererCycle/duration").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle3_duration");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });     
    ref.child("waterer3/watererCycle/frequency").on("value", function(snapshot){
        var element = document.getElementById("watering_cycle3_frequency");
    
        for (var i = 0; i < 55; i = i + 5){
            if(snapshot.val() == i){
                element.value = i;
                $('select').material_select();
                i = 55;
            }
        }
    });
    ref.child("light3/auto_manual").on("value", function(snapshot) {
        if(snapshot.val() == "manual") {
            document.getElementById("light3_manual_mode").checked = true;

        } else if (snapshot.val() == "auto") {
            document.getElementById("light3_manual_mode").checked = false;

        }
    });
    ref.child("light3/on_actual").on("value", function(snapshot) {
        if(snapshot.val() == false) {
            document.getElementById("light3_on_off_actual").checked = false;

        } else if (snapshot.val() == true) {
            document.getElementById("light3_on_off_actual").checked = true;
        }
    });
    
    
    ///////////////////////////Pot 1
    ref.child("pod1/light").on("value", function(snapshot) {
        
        var element = document.getElementById("pot1_light");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pod1/ph_level").on("value", function(snapshot) {
        
        var element = document.getElementById("pot1_PhLevel");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pot1/temperature").on("value", function(snapshot) {
        
        var element = document.getElementById("pot1_Temperature");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pot1/waterer").on("value", function(snapshot) {
        
        var element = document.getElementById("pot1_Waterer");
        element.value = snapshot.val();
        $('select').material_select();
    });

    ///////////////////////////Pot 2
    ref.child("pod2/light").on("value", function(snapshot) {
        
        var element = document.getElementById("pot2_light");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pod2/ph_level").on("value", function(snapshot) {
        
        var element = document.getElementById("pot2_PhLevel");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pot2/temperature").on("value", function(snapshot) {
        
        var element = document.getElementById("pot2_Temperature");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pot2/waterer").on("value", function(snapshot) {
        
        var element = document.getElementById("pot2_Waterer");
        element.value = snapshot.val();
        $('select').material_select();
    });    

    ///////////////////////////Pot 3
    ref.child("pod3/light").on("value", function(snapshot) {
        
        var element = document.getElementById("pot3_light");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pod3/ph_level").on("value", function(snapshot) {
        
        var element = document.getElementById("pot3_PhLevel");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pot3/temperature").on("value", function(snapshot) {
        
        var element = document.getElementById("pot3_Temperature");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pot3/waterer").on("value", function(snapshot) {
        
        var element = document.getElementById("pot3_Waterer");
        element.value = snapshot.val();
        $('select').material_select();
    });    
    ///////////////////////////Pot 4
    ref.child("pod4/light").on("value", function(snapshot) {
        
        var element = document.getElementById("pot4_light");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pod4/ph_level").on("value", function(snapshot) {
        
        var element = document.getElementById("pot4_PhLevel");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pot4/temperature").on("value", function(snapshot) {
        
        var element = document.getElementById("pot4_Temperature");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ref.child("pot4/waterer").on("value", function(snapshot) {
        
        var element = document.getElementById("pot4_Waterer");
        element.value = snapshot.val();
        $('select').material_select();
    });
    ///////////////////////////Pot 5
    
    ///////////////////////////Pot 6
    
function testFunction(cb) {

    if(cb.checked == true) {
        ref.child("current").set(1);
    } else {
        //alert("not checked!")
        ref.child("current").set(0);
    }
}

function switchSystems(sys) {
  $(sys).addClass("active");
}
