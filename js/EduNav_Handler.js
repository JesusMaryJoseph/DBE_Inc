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
	mouseLeave: function(selectedNav){
		switch(selectedNav){
			case "packets":
				//alert("mouseLeave for packets");
				this.finishShowHide(this.packetsDropdownHidden, this.packetsDropdown, "packets");
				break;
				case "videos":
					//alert("mouseLeave for packets");
					this.finishShowHide(this.videosDropdownHidden, this.videosDropdown, "videos");
					break;
				case "datasheets":
					//alert("mouseLeave for packets");
					this.finishShowHide(this.datasheetsDropdownHidden, this.datasheetsDropdown, "datasheets");
					break;
			default: alert("no such " + selectedNav);
		}
	},

	showHide: function(selectedNav) {
		//show or hide Navigation selection list
		//alert("in showHide with selectedNav =  " + selectedNav);
		switch(selectedNav){
			case "packets":
				//alert("in case: packets");
				this.finishShowHide(this.packetsDropdownHidden, this.packetsDropdown, "packets");
				this.packetsDropdownHidden = !this.packetsDropdownHidden;
				break;
			case "videos":
				//alert("in case: videos");
				this.finishShowHide(this.videosDropdownHidden, this.videosDropdown, "videos");
				this.videosDropdownHidden = !this.videosDropdownHidden;
				break;
			case "datasheets":
				//alert("in case: datasheets");
				this.finishShowHide(this.datasheetsDropdownHidden, this.datasheetsDropdown, "datasheets");
				this.datasheetsDropdownHidden = !this.datasheetsDropdownHidden;
				break;
			case "training":
				//alert("in case: training");
				this.finishShowHide(this.trainingDropdownHidden, this.trainingDropdown, "training");
				this.trainingDropdownHidden = !this.trainingDropdownHidden;
				break;
			case "testing":
				//alert("in case: testing");
				this.finishShowHide(this.testingDropdownHidden, this.testingDropdown, "testing");
				this.testingDropdownHidden = !this.testingDropdownHidden;
				break;
			default: alert("no such " + selectedNav);
		}
	},

	finishShowHide(dropdownHidden, dropdownEle, dropdown){
		//alert("in finishShowHide and dropdownHidden =  " + dropdownHidden);
		if(dropdownHidden){
			//alert('hide-'+dropdown+'-dropdown')
			dropdownEle.classList.remove('hide-'+dropdown+'-dropdown');
		}else{
			dropdownEle.classList.add('hide-'+dropdown+'-dropdown');
		}
	},

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