/*  EduNavHandler    		line 7    
*  	HardwarePageManager		line 200
*	TrainingNavEventHandler	line 322
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
		//alert("in mouseLeave");
		//alert("selectedNav =  " + selectedNav);
		//alert("this.packetsDropdownHidden =  " + this.packetsDropdownHidden);
	//	if (this.packetsDropdownHidden){return}
		switch(selectedNav){
			case "packets":
				this.packetsDropdown.classList.add('hide-packets-dropdown');
				break;
			case "training":
				//alert("adding 'hide-second-dropdown' to 'training dropdown")
				this.trainingDropdown.classList.add('hide-training-dropdown');
				this.introductionDropdown.classList.add('hide-second-dropdown');
				this.architectureDropdown.classList.add('hide-second-dropdown');
				this.techDropdown.classList.add('hide-second-dropdown');
				this.mediaArtsDropdown.classList.add('hide-second-dropdown');
				break;
			case "introduction":
				//alert("adding 'hide-second-dropdown' to 'introduction dropdown")
				this.introductionDropdown.classList.add('hide-second-dropdown');
				break;
			case "architecture":
				//alert("in hide architecture");
				this.architectureDropdown.classList.add('hide-second-dropdown');
				break;
			case "hardware":
				//alert("in hide architecture");
				this.hardwareDropdown.classList.add('hide-second-dropdown');
				break;
			case "tech":
				alert("in hide tech");
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
			case "hardware":
				//alert("in show 'hardware'");
				this.hardwareDropdown.classList.remove('hide-second-dropdown');
				this.hardwareDropdownHidden = false;
				this.showingDropdown = "hardware"; 
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
		this.hardwareDropdown = document.getElementById("hardware-dropdown-id");
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


//Beginning of HardwarePageManager
        let HardwarePageManager = {
            //Properties
            circuitComponentsDropdownEle: {},
            equipmentDropdownEle: {},
			breadboardsContentEle: {},
			resistorsContentEle: {},
			switchesContentEle: {},
			icsContentEle: {},
			toolsContentEle: {},
			testEquipmentContentEle: {},
			microcontrollersContentEle: {},
			presentContent: "",
            initialized: false,

            //Methods
            showDropDown: function(clickedItem){
               // alert("clickedItem = " + clickedItem);
                if(!this.initialized){
                    this.init();
                    this.initialized = true;
                }

                if(clickedItem == "CircuitComponents"){
					//alert("removing hide from CircuitComponents");
                    this.circuitComponentsDropdownEle.classList.remove("hide-circuit-components-dropdown");
                }else{
					//alert("removing hide from equipment");
                    this.equipmentDropdownEle.classList.remove("hide-equipment-dropdown");
                } 
            },

			showContents: function(selectedContent){
				//alert("in showContents");
				//alert("selected contents = " + selectedContent);
				// Hide the present contents
				if(this.presentContent != ""){
					switch (this.presentContent){
						case "breadboards":
							this.breadboardsContentEle.classList.add("hide-hardware-contents");
							break;
						case "resistors":
							this.resistorsContentEle.classList.add("hide-hardware-contents");
							break;
						case "switches":
							this.switchesContentEle.classList.add("hide-hardware-contents");
							break;
						case "ics":
							this.icsContentEle.classList.add("hide-hardware-contents");
							break;
						case "tools":
							this.toolsContentEle.classList.add("hide-hardware-contents");
							break;
						case "testEquipment":
							this.testEquipmentContentEle.classList.add("hide-hardware-contents");
							break;
						case "microcontrollers":
							this.microcontrollersContentEle.classList.add("hide-hardware-contents");
							break;
						default: alert("No such Content for " + this.presentContent);
					}
				}
				// Show the new selected content
				switch (selectedContent){
					case "breadboards":
						this.breadboardsContentEle.classList.remove("hide-hardware-contents");
						this.presentContent = "breadboards";
						break;
					case "resistors":
						this.resistorsContentEle.classList.remove("hide-hardware-contents");
						this.presentContent = "resistors";
						break;
					case "switches":
						this.switchesContentEle.classList.remove("hide-hardware-contents");
						this.presentContent = "switches";
						break;
					case "ics":
						this.icsContentEle.classList.remove("hide-hardware-contents");
						this.presentContent = "ics";
						break;
					case "tools":
						this.toolsContentEle.classList.remove("hide-hardware-contents");
						this.presentContent = "tools";
						break;
					case "testEquipment":
						this.testEquipmentContentEle.classList.remove("hide-hardware-contents");
						this.presentContent = "testEquipment";
						break;
					case "microcontrollers":
						this.microcontrollersContentEle.classList.remove("hide-hardware-contents");
						this.presentContent = "microcontrollers";
						break;
					default: alert("No such Content for " + selectedContent);
				}
			},

			hideDropDown: function(clickedItem){
				if(clickedItem == "CircuitComponents"){
                    this.circuitComponentsDropdownEle.classList.add("hide-circuit-components-dropdown");
                }else{
                    this.equipmentDropdownEle.classList.add("hide-equipment-dropdown");
                } 
			},

            init: function(){
               // alert("in init");
                this.circuitComponentsDropdownEle = document.getElementById("circuit-components-dropdown-id");
                this.equipmentDropdownEle = document.getElementById("equipment-dropdown-id");
				this.breadboardsContentEle = document.getElementById("breadboards-content-id");
            	this.resistorsContentEle = document.getElementById("resistors-content-id");
				this.switchesContentEle = document.getElementById("switches-content-id");
				this.icsContentEle = document.getElementById("ics-content-id");
				this.toolsContentEle = document.getElementById("tools-content-id");
				this.testEquipmentContentEle = document.getElementById("test-equipment-content-id");
				this.microcontrollersContentEle = document.getElementById("microcontrollers-content-id");
                //alert("leaving init");
            }
        }
		
//END of HardwarePageManager


//BEGINNING of TrainingNavEventHandler

let TrainingNavEventHandler = {
	// Propertiesthis.trainingNavContainer = document.getElementById("training-nav-container-id");
	trainingNavContainerEle: {},
	trainingLabelEle: {},
	trainingDropdownEle: {},
	//introSubContainerEle: {},
	introSubContainerEle: {},
	introSubLabelEle: {},
	introSubDropdownEle: {},
	//archContainerEle: {},
	archSubContainerEle: {},
	archSubLabelEle: {},
	archSubDropdownEle: {},

	openDropDownIDs: [],
	initialized: false,

	//Methods
	dropDownHandler: function(evt){
		console.log("evt.target.id = " + evt.target.id);
		console.log("evt.type = " + evt.type);
		/*switch(evt){
			case ("trainingLabel"):
			break;
			default: alert("No such dropDownHandler Item");
		}*/
	}, 

	openDropDown: function(selectedItemId){
		console.log("openDropDown this selectedItemId = " + selectedItemId);
		if(this.openDropDownIDs.length === 0){console.log("No DropDowns are Open");}
		if(this.openDropDownIDs.length === 1){console.log("training DropDown is Open.");}
		if(this.openDropDownIDs.length === 2){console.log(this.openDropDownIDs[1] + " is Open.");}
		if(this.openDropDownIDs.length === 3){console.log(this.openDropDownIDs[2] + " is Open.");}
		if(this.openDropDownIDs.length === 4){console.log(this.openDropDownIDs[3] + " is Open.");}
		/*if(this.openDropDownIDs.length == 2){
			console.log("removing " + this.openDropDownIDs[1] + "  from openDropDownIDs");
			this.closeDropDown(this.openDropDownIDs[1]);
			this.openDropDownIDs.pop(this.openDropDownIDs[1]);
		}*/
		//console.log("selected item ID = " + selectedItemId);
		switch(selectedItemId){
			case ("training-nav-label-id"):
				console.log("showing Training DropDown");
				this.trainingDropdownEle.classList.remove("hide-training-nav-dropdown");
				console.log("# of open dropDowns before push = " + this.openDropDownIDs.length);
				this.openDropDownIDs.push(selectedItemId);
				console.log("# of open dropDowns after push = " + this.openDropDownIDs.length);
				console.log("openDropDownIDs[0] = " + this.openDropDownIDs[0]);
			break;
			case ("intro-sub-nav-label-id"):
				if(this.openDropDownIDs.length == 2){
					console.log("removing " + this.openDropDownIDs[1] + "  from openDropDownIDs");
					this.closeDropDown(this.openDropDownIDs[1]);
				}
				console.log("showing Introduction DropDown");
				this.introSubDropdownEle.classList.remove("hide-intro-sub-nav-dropdown");
				this.openDropDownIDs.push(selectedItemId);
				console.log("second Dropdown = " + this.openDropDownIDs[1]);
			break;
			case ("architect-sub-nav-label-id"):
				if(this.openDropDownIDs.length == 2){
					console.log("removing " + this.openDropDownIDs[1] + "  from openDropDownIDs");
					this.closeDropDown(this.openDropDownIDs[1]);
				}
				console.log("showing Architect DropDown");
				this.archSubDropdownEle.classList.remove("hide-architect-sub-nav-dropdown");
				this.openDropDownIDs.push(selectedItemId);
				console.log("openDropDownIDs[0] = " + this.openDropDownIDs[0]);
				console.log("second Dropdown = " + this.openDropDownIDs[1]);
			break;
			default: alert("Can Not Open! No such dropDownHandler Item");
		}
	}, 

	closeDropDown: function(selectedItemId){
		console.log("selectedItem.Id to close = " + selectedItemId);
		switch(selectedItemId){
			case ("training-nav-container-id"):
				/*if(this.openDropDownIDs.length == 2){
					console.log("removing " + this.openDropDownIDs[1] + "  from openDropDownIDs");
					this.closeDropDown(this.openDropDownIDs[1]);
					this.openDropDownIDs.pop(this.openDropDownIDs[1]);
				}*/
				console.log("hiding Training DropDown");
				this.trainingDropdownEle.classList.add("hide-training-nav-dropdown");
				this.openDropDownIDs.pop("training-nav-dropdown-id");
			break;
			case ("intro-sub-nav-label-id"):
				console.log("hiding Introduction DropDown");
				this.introSubDropdownEle.classList.add("hide-intro-sub-nav-dropdown");
				this.openDropDownIDs.pop("intro-sub-nav-label-id");
			break;
			case ("architect-sub-nav-label-id"):
				console.log("hiding Architect DropDown");
				this.archSubDropdownEle.classList.add("hide-architect-sub-nav-dropdown");
				this.openDropDownIDs.pop("architect-sub-nav-label-id");
			break;
			default: /*alert("Can not close! No such dropDownHandler Item")*/;
		}
	},

	init: function(){
		// For Main Training DropDown
		this.trainingNavContainerEle = document.getElementById("training-nav-container-id");
		this.trainingLabelEle = document.getElementById("training-nav-label-id");
		this.trainingDropdownEle = document.getElementById("training-nav-dropdown-id");

		this.trainingNavContainerEle.addEventListener("mouseleave", function(event){
			TrainingNavEventHandler.closeDropDown(event.target.id, "mouseleave");
		}, true)
		this.trainingLabelEle.addEventListener("click", function(event){
			TrainingNavEventHandler.openDropDown(event.target.id, "click");
		}, true)
			// For "Introduction" Sub Dropdown
			this.introSubContainerEle = document.getElementById("intro-sub-nav-container-id");
			this.introSubLabelEle = document.getElementById("intro-sub-nav-label-id");
			this.introSubDropdownEle = document.getElementById("intro-sub-nav-dropdown-id");
				
			this.introSubContainerEle.addEventListener("mouseleave", function(event){
				TrainingNavEventHandler.closeDropDown(event.target.id, "mouseleave");
			}, true)
			this.introSubLabelEle.addEventListener("click", function(){
					TrainingNavEventHandler.openDropDown("intro-sub-nav-label-id");
			}, true); 

				// For "Codes" 
				this.codesSubSubLabelEle = document.getElementById("intro-codes-sub-nav-label-id");
				this.codesSubSubLabelEle.addEventListener("click", function(event){
					EduHTML_Manager.request('html/Education/Training/Codes.html','codes-contents-id');
					alert("this.openDropDownIDs.length = " + this.openDropDownIDs.length);
					for(var i = this.openDropDownIDs.length; i >= 0; i--){
						TrainingNavEventHandler.closeDropDown(this.openDropDownIDs, "mouseleave");
					}
				}, true)

			// For "Architect" Sub DropDown"
			this.archSubContainerEle = document.getElementById("architect-sub-nav-container-id");
			this.archSubLabelEle = document.getElementById("architect-sub-nav-label-id");
			this.archSubDropdownEle = document.getElementById("architect-sub-nav-dropdown-id");
				
			this.archSubContainerEle.addEventListener("mouseleave", function(event){
				TrainingNavEventHandler.closeDropDown(event.target.id, "mouseleave");
			}, true)
			this.archSubLabelEle.addEventListener("click", function(){
					TrainingNavEventHandler.openDropDown("architect-sub-nav-label-id");
			}, true); 

		/*
	
		
		this.archSubLabelEle.addEventListener("click", function(){
				TrainingNavEventHandler.openDropDown("architect");
			}); */


			
		//console.log("leaving TrainingNavEventHandler.init()");

			/*document.getElementById("intro-sub-nav-label-id").addEventListener("mouseover", function (e){
				document.getElementById("intro-sub-nav-dropdown-id").classList.remove("hide-intro-sub-nav-dropdown");
			});
			document.getElementById("intro-sub-nav-label-id").addEventListener("mouseleave", function (e){
				document.getElementById("intro-sub-nav-dropdown-id").classList.add("hide-intro-sub-nav-dropdown");
			});
			document.getElementById("intro-sub-nav-dropdown-id").addEventListener("mouseleave", function (e){
				document.getElementById("intro-sub-nav-dropdown-id").classList.add("hide-intro-sub-nav-dropdown");
			});	

			document.getElementById("architect-sub-nav-label-id").addEventListener("mouseover", function(e){
				document.getElementById("architect-sub-nav-dropdown-id").classList.remove("hide-architect-sub-nav-dropdown");
			});
			document.getElementById("architect-sub-nav-dropdown-id").addEventListener("mouseleave", function (e) {
				document.getElementById("architect-sub-nav-dropdown-id").classList.add("hide-architect-sub-nav-dropdown");
			});

			document.getElementById("tech-sub-nav-label-id").addEventListener("mouseover", function(e){
				document.getElementById("tech-sub-nav-dropdown-id").classList.remove("hide-tech-sub-nav-dropdown");
			});
			document.getElementById("tech-sub-nav-dropdown-id").addEventListener("mouseleave", function (e) {
				document.getElementById("tech-sub-nav-dropdown-id").classList.add("hide-tech-sub-nav-dropdown");
			});

			document.getElementById("media-arts-sub-nav-label-id").addEventListener("mouseover", function(e){
				document.getElementById("media-arts-sub-nav-dropdown-id").classList.remove("hide-media-arts-sub-nav-dropdown");
			});
			document.getElementById("media-arts-sub-nav-dropdown-id").addEventListener("mouseleave", function (e) {
				document.getElementById("media-arts-sub-nav-dropdown-id").classList.add("hide-media-arts-sub-nav-dropdown");
			});

			document.getElementById("architect-hardware-sub-nav-label-id").addEventListener("click", function(e){
				document.getElementById("architect-hardware-sub-nav-dropdown-id").classList.remove("hide-architect-hardware-sub-nav-dropdown");
			});
			document.getElementById("architect-hardware-sub-nav-dropdown-id").addEventListener("mouseleave", function (e) {
				document.getElementById("architect-hardware-sub-nav-dropdown-id").classList.add("hide-architect-hardware-sub-nav-dropdown");
			}); 

			// add click to label requesting load HTML
			document.getElementById("intro-codes-sub-nav-label-id").addEventListener("click", function (e) {
				document.getElementById("training-nav-dropdown-id").classList.remove("hide-training-nav-dropdown");
				document.getElementById("intro-sub-nav-dropdown-id").classList.add("hide-intro-sub-nav-dropdown");
			});
			
			document.getElementById("intro-truth-tables-sub-nav-label-id").addEventListener("click", function(e){
				document.getElementById("training-nav-dropdown-id").classList.remove("hide-training-nav-dropdown");
				document.getElementById("intro-sub-nav-dropdown-id").classList.add("hide-intro-sub-nav-dropdown");
			})
			document.getElementById("intro-gates-ics-sub-nav-label-id").addEventListener("click", function (e) {
				document.getElementById("training-nav-dropdown-id").classList.remove("hide-training-nav-dropdown");
				document.getElementById("intro-sub-nav-dropdown-id").classList.add("hide-intro-sub-nav-dropdown");
			});
			
			document.getElementById("intro-design-sub-nav-label-id").addEventListener("click", function(e){
				document.getElementById("training-nav-dropdown-id").classList.remove("hide-training-nav-dropdown");
				document.getElementById("intro-sub-nav-dropdown-id").classList.add("hide-intro-sub-nav-dropdown");
			})*/
	}
}