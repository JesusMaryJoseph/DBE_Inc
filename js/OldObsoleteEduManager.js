// This is an outdated version of EduNavManager
// Delete when appropriate


/*
	let EduNavManager = {
		//Properties
		packetsDropdown: {},
		videosDropdown: {},
		datasheetsDropdown: {},
		trainingDropdown: {},
		introductionDropdown: {},
		architectureDropdown: {},
		hardwareDropdown: {},
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
			console.log("in EduNavManager.hide");
			//alert("in mouseLeave");
			console.log("selectedNav =  " + selectedNav);
			//alert("this.packetsDropdownHidden =  " + this.packetsDropdownHidden);
		//	if (this.packetsDropdownHidden){return}
			switch(selectedNav){
				case "packets":
					this.packetsDropdown.classList.add('hide-packets-dropdown');
					break;
				case "training":
					console.log("adding 'menu-dd-lev-2-hidden' to 'training dropdown")
					this.trainingDropdown.classList.add('menu-dd-lev-1-hidden'); // hide-training-dropdown 
					this.introductionDropdown.classList.add('menu-dd-lev-2-hidden'); // menu-dd-lev-2-hidden 
					this.architectureDropdown.classList.add('menu-dd-lev-2-hidden');
					this.techDropdown.classList.add('menu-dd-lev-2-hidden');
					this.mediaArtsDropdown.classList.add('menu-dd-lev-2-hidden');
					break;
				//case "introduction":
					//alert("adding 'menu-dd-lev-2-hidden' to 'introduction dropdown")
				//	this.introductionDropdown.classList.add('menu-dd-lev-2-hidden');
				//	break;
				//case "architecture":
					//alert("in hide architecture");
				//	this.architectureDropdown.classList.add('menu-dd-lev-2-hidden');
				//	break;
				//case "hardware":
					//alert("in hide architecture");
				//	this.hardwareDropdown.classList.add('menu-dd-lev-2-hidden');
				//	break;
				//case "tech":
				//	alert("in hide tech");
				//	this.techDropdown.classList.add('menu-dd-lev-2-hidden');
				//	break;
				//case "media-arts":
				//	this.mediaArtsDropdown.classList.add('menu-dd-lev-2-hidden');
				//	break;
				case "testing":
					this.testingDropdown.classList.add('hide-testing-dropdown');
					this.testIntroductionDropdown.classList.add('menu-dd-lev-2-hidden');
					this.testArchitectureDropdown.classList.add('menu-dd-lev-2-hidden');
					this.testTechDropdown.classList.add('menu-dd-lev-2-hidden');
					this.testMediaArtsDropdown.classList.add('menu-dd-lev-2-hidden');
					break;
				//case "test-introduction":
				//	this.testIntroductionDropdown.classList.add('menu-dd-lev-2-hidden');
					//this.testIntroductionDropdownHidden = true;
				//	break;
				//case "test-architecture":
				//	this.testArchitectureDropdown.classList.add('menu-dd-lev-2-hidden');
					//this.testArchitectureDropdownHidden = true;
				//	break;
				//case "test-tech":
				//	this.testTechDropdown.classList.add('menu-dd-lev-2-hidden');
					//this.testTechDropdownHidden = true;
				//	break;
				//case "test-media-arts":
				//	this.testMediaArtsDropdown.classList.add('menu-dd-lev-2-hidden');
					//this.testMediaArtsDropdownHidden = true;
				//	break;
				default: alert("no such " + selectedNav);
			}
		}, 

		show: function(selectedNav) {
			console.log("in EduNavManager.show");
			//show or hide Navigation selection list
			//alert("in EduNavManager show with selectedNav =  " + selectedNav);
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
					this.introductionDropdown.classList.remove('menu-dd-lev-2-hidden');
					this.introductionDropdownHidden = false;
					this.showingDropdown = "introduction"; 
					break;
				case "architecture":
					this.architectureDropdown.classList.remove('menu-dd-lev-2-hidden');
					this.architectureDropdownHidden = false;
					this.showingDropdown = "architecture"; 
					break;
				case "hardware":
					//alert("in show 'hardware'");
					this.hardwareDropdown.classList.remove('menu-dd-lev-2-hidden');
					this.hardwareDropdownHidden = false;
					this.showingDropdown = "hardware"; 
					break;
				case "tech":
					this.techDropdown.classList.remove('menu-dd-lev-2-hidden');
					this.techDropdownHidden = false;
					this.showingDropdown = "tech"; 
					break;
				case "media-arts":
					this.mediaArtsDropdown.classList.remove('menu-dd-lev-2-hidden');
					this.mediaArtsDropdownHidden = false;
					this.showingDropdown = "media-arts";
					break;
				case "testing":
					this.testingDropdown.classList.remove('hide-testing-dropdown');
					this.testingDropdownHidden = false;
					break;
				case "test-introduction":
					this.testIntroductionDropdown.classList.remove('menu-dd-lev-2-hidden');
					this.testIntroductionDropdownHidden = false;
					this.showingDropdown = "test-introduction"; 
					break;
				case "test-architecture":
					this.testArchitectureDropdown.classList.remove('menu-dd-lev-2-hidden');
					this.testArchitectureDropdownHidden = false;
					this.showingDropdown = "test-architecture"; 
					break;
				case "test-tech":
					this.testTechDropdown.classList.remove('menu-dd-lev-2-hidden');
					this.testTechDropdownHidden = false;
					this.showingDropdown = "test-tech"; 
					break;
				case "test-media-arts":
					this.testMediaArtsDropdown.classList.remove('menu-dd-lev-2-hidden');
					this.testMediaArtsDropdownHidden = false;
					this.showingDropdown = "test-media-arts";
					break;
				default: alert("no such " + selectedNav);
			}
		},

		//finishShowHide(dropdownHidden, dropdownEle, dropdown){
			//alert("in finishShowHide and dropdownHidden =  " + dropdownHidden);
		//	if(dropdownHidden){
				//alert('removing:  hide-'+dropdown+'-dropdown')
		//		dropdownEle.classList.remove('hide-'+dropdown+'-dropdown');
		//	}else{
		//		//alert('adding hide-'+dropdown+'-dropdown');
		//		dropdownEle.classList.add('hide-'+dropdown+'-dropdown');
		//	}
		//}, 

		init: function(){
			console.log("in EduNavManager.init");
			this.packetsDropdown = document.getElementById("packets-dropdown-id");
			this.videosDropdown = document.getElementById("videos-dropdown-id");
			this.datasheetsDropdown = document.getElementById("datasheets-dropdown-id");
			this.trainingDropdown = document.getElementById("training-menu-dd-id");
			this.testingDropdown = document.getElementById("testing-menu-dd-id");
			//alert("this.testingDropdown.classList = " + this.testingDropdown.classList);
			this.introductionDropdown = document.getElementById("training-menu-intro-dd-id");
			this.architectureDropdown = document.getElementById("training-arch-intro-dd-id");
			//this.hardwareDropdown = document.getElementById("training-hardware-dropdown-id");
			this.techDropdown = document.getElementById("training-menu-tech-dd-id");
			this.mediaArtsDropdown = document.getElementById("training-media-arts-dd-id");
			this.testIntroductionDropdown = document.getElementById("testing-menu-intro-dd-id");
			this.testArchitectureDropdown = document.getElementById("testing-arch-intro-dd-id");
			this.testTechDropdown = document.getElementById("testing-menu-tech-dd-id");
			this.testMediaArtsDropdown = document.getElementById("testing-menu-media-arts-dd-id");
			console.log("leaving EduNavManager.init()");
		}
			
	} */
 