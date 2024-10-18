/*    
*   EduNavHandler    line 7
*  
*/ 


/* Create a new Class to handle the EDU Navigation */

let EduNavHandler = {
	//Properties
	secondDropdownShowing: "",
	hidden: true,
	navDropDownId: {},
	packetsDropdown: {},
	trainingDropdown: {},
	resourcesDropdown: {},


	//Methods
	mouseLeave: function(selection){
	//	this.mouseActionEle.innerHTML += 'leaving: ' + evt.target.id + '<br>';
		if(this.hidden == true){ return };
            if(this.secondDropdownShowing != ""){ return};
		this.showHide();
	},

	showHide: function() {  //show or hide Navigation selection list
		//alert("in showHide");
		if(this.hidden) {
		//	alert('show dropdown');
		    this.navDropDownId.classList.remove('hide-edu-dropdown');
			this.hidden = false; 
		//	alert('this.hidden: ' + this.hidden);
		}else{
			//alert('hide dropdown');
			this.navDropDownId.classList.add('hide-edu-dropdown');
			this.hidden = true;
		}
	}, //End of Mehod: showHide()

	hideNav: function(){
		document.getElementById('edu-nav-cntnr-id').classList.remove('edu-display-nav')
	    this.hidden = true;
	},

	displaySecondDropdown: function(secondDropdown){
		//alert("in display SecondDropdown:  " + secondDropdown);
		switch (secondDropdown){
			case "Packets":
				this.packetsDropdown.classList.remove("edu-second-dropdown-hidden");
			break;
			case "Training":
				this.trainingDropdown.classList.remove("edu-second-dropdown-hidden");
			break;
			case "Resources":
				this.resourcesDropdown.classList.remove("edu-second-dropdown-hidden");
			break;
			default:
				alert("no such " + secondDropdown);
		}
		this.secondDropdownShowing = secondDropdown;
	},

	hideSecondDropdown: function(secondDropdown){
		//alert("in display SecondDropdown:  " + secondDropdown);
		switch (secondDropdown){
			case "Packets":
				this.packetsDropdown.classList.add("edu-second-dropdown-hidden");
			break;
			case "Training":
				this.trainingDropdown.classList.add("edu-second-dropdown-hidden");
			break;
			case "Resources":
				this.resourcesDropdown.classList.add("edu-second-dropdown-hidden");
			break;
			default:
				alert("no such " + secondDropdown);
		}
		this.secondDropdownShowing = secondDropdown;
	},

	init: function(){
		//alert("in NavHandler.init()");
		this.navDropDownId = document.getElementById("edu-nav-dropdown-id");
		this.packetsDropdown = document.getElementById("edu-packets-dropdown-id");
		this.trainingDropdown = document.getElementById("edu-training-dropdown-id");
		this.resourcesDropdown = document.getElementById("edu-resources-dropdown-id");
	   //alert("NavHandler.init() finished");
	}


} 

//End of Class(Object): EduNavHandler