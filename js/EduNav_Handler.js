/*    
*   EduNavHandler    line 7
*  
*/ 


/* Create a new Class to handle the EDU Navigation */

let EduNavHandler = {
	//Properties
	selectedLabel: {},
	secondDropdownShowing: "",
	hidden: true,
	navDropDownId: {},
	packetsDropdown: {},
	trainingDropdown: {},
	resourcesDropdown: {},
	proposalLabel: {},
	packetsLabel: {},
	trainingLabel: {},
	resourcesLabel: {},


	//Methods
	mouseLeave: function(selection){
		//alert("in mouseLeave selection =  "+ selection);
	//	this.mouseActionEle.innerHTML += 'leaving: ' + evt.target.id + '<br>';
		if(this.hidden == true){ return };
      //  if(this.secondDropdownShowing != ""){ return};
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
			this.selectedLabel.style.color = "yellow";
			this.hideSecondDropdown(this.secondDropdownShowing);
			//alert("after hideSecondDropdown");
		}
	}, //End of Mehod: showHide()

	hideNav: function(){
		//alert("in this.hideNav()");
		document.getElementById('edu-nav-cntnr-id').classList.remove('edu-display-nav')
	    this.hidden = true;
	},

	displaySecondDropdown: function(secondDropdown){
		//alert("in display SecondDropdown:  " + secondDropdown);
		this.hideSecondDropdown(this.secondDropdownShowing);
		//alert("before switch secondDropdown");
		switch (secondDropdown){
			case "Packets":
				this.packetsDropdown.classList.remove("edu-second-dropdown-hidden");
				this.packetsLabel.style.color = "orangered";
				this.selectedLabel.style.color = "yellow";
				this.selectedLabel = this.packetsLabel;
				this.secondDropdownShowing = "Packets";
			//	this.changeSelectedLabel("Packets");
			break;
			case "Training":
				this.trainingDropdown.classList.remove("edu-second-dropdown-hidden");
				this.trainingLabel.style.color = "orangered";
				this.selectedLabel.style.color = "yellow";
				this.selectedLabel = this.trainingLabel;
				this.secondDropdownShowing = "Training";
				//this.changeSelectedLabel("Training");
			break;
			case "Resources":
				this.resourcesDropdown.classList.remove("edu-second-dropdown-hidden");
				this.resourcesLabel.style.color = "orangered";
				this.selectedLabel.style.color = "yellow";
				this.selectedLabel = this.resourcesLabel;
				this.secondDropdownShowing = "Resources";
				//this.changeSelectedLabel("Resources");
			break;
			default:
				alert("no such " + secondDropdown);
		}
		this.secondDropdownShowing = secondDropdown;
	},


	hideSecondDropdown: function(secondDropdown){
		//alert("in hide SecondDropdown:  " + secondDropdown);
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
		this.proposalLabel = document.getElementById("edu-nav-label-proposal-id");
		this.packetsLabel = document.getElementById("edu-nav-label-packets-id");
		this.trainingLabel = document.getElementById("edu-nav-label-training-id");
		this.resourcesLabel = document.getElementById("edu-nav-label-resources-id");
	    this.selectedLabel = this.proposalLabel;
		//alert("NavHandler.init() finished");
	}


} 

//End of Class(Object): EduNavHandler