/*    
*   EduNavHandler    line 7
*  
*/ 


/* Create a new Class to handle the EDU Navigation */

let EduNavHandler = {
	//Properties
	packetsDropdown: {},
	videosDropdown: {},
	datasheetsDropdown: {},
	trainingDropdown: {},
	introductionDropdown: {},
	architectureDropdown: {},
	techDropdown: {},
	mediaArtsDropdown: {},
	testingDropdown: {},
	testIntroductionDropdown: {},
	testArchitectureDropdown: {},
	testTechDropdown: {},
	testMediaArtsDropdown: {},
	showingDropdown:"",
	
	//Methods
	hide: function(selectedNav){
		//alert("in mouseLeave");
		//alert("selectedNav =  " + selectedNav);
		//alert("this.packetsDropdownHidden =  " + this.packetsDropdownHidden);
	//	if (this.packetsDropdownHidden){return}
		switch(selectedNav){
			case "packets":
				this.packetsDropdown.classList.add('hide-packets-dropdown');
				break;
			case "training":
				this.trainingDropdown.classList.add('hide-training-dropdown');
				this.introductionDropdown.classList.add('hide-second-dropdown');
				this.architectureDropdown.classList.add('hide-second-dropdown');
				this.techDropdown.classList.add('hide-second-dropdown');
				this.mediaArtsDropdown.classList.add('hide-second-dropdown');
				break;
			case "introduction":
				this.introductionDropdown.classList.add('hide-second-dropdown');
				break;
			case "architecture":
				//alert("in hide architecture");
				this.architectureDropdown.classList.add('hide-second-dropdown');
				break;
			case "tech":
				this.techDropdown.classList.add('hide-second-dropdown');
				break;
			case "media-arts":
				this.mediaArtsDropdown.classList.add('hide-second-dropdown');
				break;
			case "testing":
				this.testingDropdown.classList.add('hide-testing-dropdown');
				this.testIntroductionDropdown.classList.add('hide-second-dropdown');
				this.testArchitectureDropdown.classList.add('hide-second-dropdown');
				this.testTechDropdown.classList.add('hide-second-dropdown');
				this.testMediaArtsDropdown.classList.add('hide-second-dropdown');
				break;
			case "test-introduction":
				this.testIntroductionDropdown.classList.add('hide-second-dropdown');
				//this.testIntroductionDropdownHidden = true;
				break;
			case "test-architecture":
				this.testArchitectureDropdown.classList.add('hide-second-dropdown');
				//this.testArchitectureDropdownHidden = true;
				break;
			case "test-tech":
				this.testTechDropdown.classList.add('hide-second-dropdown');
				//this.testTechDropdownHidden = true;
				break;
			case "test-media-arts":
				this.testMediaArtsDropdown.classList.add('hide-second-dropdown');
				//this.testMediaArtsDropdownHidden = true;
				break;
			default: alert("no such " + selectedNav);
		}
	}, 

	show: function(selectedNav) {
		//show or hide Navigation selection list
		//alert("in EduNav_Handler show with selectedNav =  " + selectedNav);
		if(this.showingDropdown){	
			this.hide(this.showingDropdown);
		}
		//alert("entering show.switch(selectedNav)");
		switch(selectedNav){
			case "packets":
				//alert("this.packetsDropdown.classList.remove('hide-packets-dropdown');");
				this.packetsDropdown.classList.remove('hide-packets-dropdown');
				this.packetsDropdownHidden = false;
				this.showingDropdown = "packets"; 
				break;
			case "training":
				//alert("removing 'hide-training-dropdown'");
				this.trainingDropdown.classList.remove('hide-training-dropdown');
				this.trainingDropdownHidden = false;
				break;
			case "introduction":
				this.introductionDropdown.classList.remove('hide-second-dropdown');
				this.introductionDropdownHidden = false;
				this.showingDropdown = "introduction"; 
				break;
			case "architecture":
				this.architectureDropdown.classList.remove('hide-second-dropdown');
				this.architectureDropdownHidden = false;
				this.showingDropdown = "architecture"; 
				break;
			case "tech":
				this.techDropdown.classList.remove('hide-second-dropdown');
				this.techDropdownHidden = false;
				this.showingDropdown = "tech"; 
				break;
			case "media-arts":
				this.mediaArtsDropdown.classList.remove('hide-second-dropdown');
				this.mediaArtsDropdownHidden = false;
				this.showingDropdown = "media-arts";
				break;
			case "testing":
				this.testingDropdown.classList.remove('hide-testing-dropdown');
				this.testingDropdownHidden = false;
				break;
			case "test-introduction":
				this.testIntroductionDropdown.classList.remove('hide-second-dropdown');
				this.testIntroductionDropdownHidden = false;
				this.showingDropdown = "test-introduction"; 
				break;
			case "test-architecture":
				this.testArchitectureDropdown.classList.remove('hide-second-dropdown');
				this.testArchitectureDropdownHidden = false;
				this.showingDropdown = "test-architecture"; 
				break;
			case "test-tech":
				this.testTechDropdown.classList.remove('hide-second-dropdown');
				this.testTechDropdownHidden = false;
				this.showingDropdown = "test-tech"; 
				break;
			case "test-media-arts":
				this.testMediaArtsDropdown.classList.remove('hide-second-dropdown');
				this.testMediaArtsDropdownHidden = false;
				this.showingDropdown = "test-media-arts";
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
		this.introductionDropdown = document.getElementById("introduction-dropdown-id");
		this.architectureDropdown = document.getElementById("architecture-dropdown-id");
		this.techDropdown = document.getElementById("tech-dropdown-id");
		this.mediaArtsDropdown = document.getElementById("media-arts-dropdown-id");
		this.testIntroductionDropdown = document.getElementById("test-introduction-dropdown-id");
		this.testArchitectureDropdown = document.getElementById("test-architecture-dropdown-id");
		this.testTechDropdown = document.getElementById("test-tech-dropdown-id");
		this.testMediaArtsDropdown = document.getElementById("test-media-arts-dropdown-id");
		//alert("leaving EduNavHandler.init()");
	}
		
} 

//End of Class(Object): EduNavHandler