/*    
*   EduNavHandler    line 7
*  
*/ 


/* Create a new Class to handle the EDU Navigation */

let EduNavHandler = {
	//Properties
	packetsDropdownHidden: true,
	packetsDropdown: {},
	videosDropdownHidden: true,
	videosDropdown: {},
	datasheetsDropdownHidden: true,
	datasheetsDropdown: {},
	trainingDropdownHidden: true,
	trainingDropdown: {},
	testingDropdownHidden: true,
	testingDropdown: {},
	
	//Methods
	hide: function(selectedNav){
		//alert("in mouseLeave");
		//alert("selectedNav =  " + selectedNav);
		//alert("this.packetsDropdownHidden =  " + this.packetsDropdownHidden);
	//	if (this.packetsDropdownHidden){return}
		switch(selectedNav){
			case "packets":
				this.packetsDropdown.classList.add('hide-packets-dropdown');
				this.packetsDropdownHidden  = true; //!this.trainingDropdownHidden;
				break;
			case "training":
				this.trainingDropdown.classList.add('hide-training-dropdown');
				this.trainingDropdownHidden = true;
				break;
			case "testing":
				this.testingDropdown.classList.add('hide-testing-dropdown');
				this.testingDropdownHidden = true;
				break;
			default: alert("no such " + selectedNav);
		}
	}, 

	show: function(selectedNav) {
		//show or hide Navigation selection list
		//alert("in showHide with selectedNav =  " + selectedNav);
		switch(selectedNav){
			case "packets":
				this.packetsDropdown.classList.remove('hide-packets-dropdown');
				this.packetsDropdownHidden = false; 
				break;
			case "training":
				this.trainingDropdown.classList.remove('hide-training-dropdown');
				this.trainingDropdownHidden = false;
				break;
			case "testing":
				this.testingDropdown.classList.remove('hide-testing-dropdown');
				this.testingDropdownHidden = false;
				break;
			default: alert("no such " + selectedNav);
		}
	},

	/*finishShowHide(dropdownHidden, dropdownEle, dropdown){
		//alert("in finishShowHide and dropdownHidden =  " + dropdownHidden);
		if(dropdownHidden){
			//alert('removing:  hide-'+dropdown+'-dropdown')
			dropdownEle.classList.remove('hide-'+dropdown+'-dropdown');
		}else{
			//alert('adding hide-'+dropdown+'-dropdown');
			dropdownEle.classList.add('hide-'+dropdown+'-dropdown');
		}
	}, */

	init: function(){
		//alert("in EduNavHandler.init");
		this.packetsDropdown = document.getElementById("packets-dropdown-id");
		this.videosDropdown = document.getElementById("videos-dropdown-id");
		this.datasheetsDropdown = document.getElementById("datasheets-dropdown-id");
		this.trainingDropdown = document.getElementById("training-dropdown-id");
		this.testingDropdown = document.getElementById("testing-dropdown-id");
		//alert("this.testingDropdown.classList = " + this.testingDropdown.classList);
	}
		
} 

//End of Class(Object): EduNavHandler