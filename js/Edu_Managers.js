/*  EduNavManager    		lines 9 - 171
*	EduHtmlManager			lines 177 - 243
*  	HardwarePageManager		lines 250 - 369
*	TrainingNavEventHandler	lines 372 - 591
* 	CodesTabManager			lines 596 - 675
*   ModuleArchitectManager	lines 681 - 785
*/

//BEGIN EduNavManager
 let EduNavManager = {
        //properties
            initialized: false,
            
            eduNavlabelEle: {},
            eduNavDropdownEle: {},
            eduNavDropdownHidden: true,

            traininglabelEle: {},
            trainingDropdownEle: {},
            trainingDropdownHidden: true,

            testinglabelEle: {},
            testingDropdownEle: {},
            testingDropdownHidden: true,
            
            packetslabelEle: {},
		    packetsDropdownEle: {},
            packetsDropdownHidden: true,

            introductionlabelEle: {},
            introductionDropdownEle: {},
            introductionDropdownHidden: true,

            testingIntroductionlabelEle: {},
            testingIntroductionDropdownEle: {},
            testingIntroductionDropdownHidden: true,

            architecturelabelEle: {},
            architectureDropdownEle: {},
            architectureDropdownHidden: true,

            testingArchitecturelabelEle: {},
            testingArchitectureDropdownEle: {},
            testingArchitectureDropdownHidden: true,

            techlabelEle: {},
            techDropdownEle: {},
            techDropdownHidden: true,

            testingTechlabelEle: {},
            testingTechDropdownEle: {},
            testingTechDropdownHidden: true,

            mediaArtslabelEle: {},
            mediaArtsDropdownEle: {},
            mediaArtsDropdownHidden: true,

            testingMediaArtslabelEle: {},
            testingMediaArtsDropdownEle: {},
            testingMediaArtsDropdownHidden: true,

           /* hardwarelabelEle: {},
            hardwearDropdownEle: {},
            hardwearDropdownHidden: true,
            componentslabelEle: {},
            componentsDropdownEle: {},
            componentsDropdownHidden: true,
            equipmentlabelEle: {},
            equipmentDropdownEle: {},
            equipmentDropdownHidden: true,*/
        //methods
            openCloseDropdown: function(dropdown, openOrClose){
                if(!this.initialized){this.init(); this.initialized = true;}
                //console.log("after init(). dropdown = " + dropdown);
                switch(dropdown){
                    case ("packets-menu-dd-lev-1"):
                        console.log("this.packetsDropdownHidden = " + this.packetsDropdownHidden);
                        console.log("openOrClose = " + openOrClose);
                        this.toggleDropdown(this.packetsDropdownEle, "packets-menu-dd-lev-1-hidden", openOrClose);
                        this.packetsDropdownHidden = !this.packetsDropdownHidden;
                        break;
                    case ("menu-dd-lev-1"):
				        //console.log("in 'menu-dd-lev-1'");
                        this.toggleDropdown(this.trainingDropdownEle, "menu-dd-lev-1-hidden", openOrClose);
                        this.trainingDropdownHidden = !this.trainingDropdownHidden;
                        break;
                    case ("edu-nav-dropdown"):
				        //console.log("in 'edu-nav-dropdown'");
                        this.toggleDropdown(this.eduNavDropdownEle, "hide-nav-dropdown", openOrClose);
                        this.introductionDropdownEle = !this.introductionDropdownEle;
                        break;
                    case ("test-menu-dd-lev-1"):
				        //console.log("in test-menu-dd-lev-1");
                        this.toggleDropdown(this.testingDropdownEle, "menu-dd-lev-1-hidden", openOrClose);
                        this.testingDropdownHidden = !this.testingDropdownHidden;
                        break;
                    case ("introduction-dropdown"):
				        //console.log("in training 'introduction-dropdown'");
                        this.toggleDropdown(this.introductionDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.introductionDropdownHidden = !this.introductionDropdownHidden;
                        break;
                    case ("test-introduction-dropdown"):
				        //console.log("in testing 'introduction-dropdown'");
                        this.toggleDropdown(this.testingIntroductionDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.testingIntroductionDropdownHidden = !this.testingIntroductionDropdownHidden;
                        break;
                    case ("architecture-dropdown"):
                        this.toggleDropdown(this.architectureDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.architectureDropdownHidden = !this.architectureDropdownHidden;
                        break;
                    case ("test-architecture-dropdown"):
                        this.toggleDropdown(this.testingArchitectureDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.testingArchitectureDropdownHidden = !this.testingArchitectureDropdownHidden;
                        break;
                    case ("tech-dropdown"):
                        this.toggleDropdown(this.techDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.techDropdownHidden = !this.techDropdownHidden;
                        break;
                    case ("test-tech-dropdown"):
                        this.toggleDropdown(this.testingTechDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.testingTechDropdownHidden = !this.testingTechDropdownHidden;
                        break;
                    case ("media-arts-dropdown"):
                        this.toggleDropdown(this.mediaArtsDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.mediaArtsDropdownHidden = !this.mediaArtsDropdownHidden;
                        break;
                    case ("test-media-arts-dropdown"):
                        this.toggleDropdown(this.testingMediaArtsDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.testingMediaArtsDropdownHidden = !this.testingMediaArtsDropdownHidden;
                        break;
                    default:(console.log("No Such Dropdown"));
                }
            },

            toggleDropdown: function(dropdownEle, hiddenClassName, openOrClose){
                //console.log("dropdownHidden = " + hiddenClassName);
                //console.log("dropdownEle.id = " + dropdownEle.id);
                if(openOrClose === "open"){
                    //console.log("removing hidenClassName = " + hiddenClassName);
                    dropdownEle.classList.remove(hiddenClassName);
                }else{
                    //console.log("adding hidenClassName = " + hiddenClassName);
                    dropdownEle.classList.add(hiddenClassName);
                }
            },

            init: function(){
            //console.log(" in EduNavManager.init()");
                this.eduNavlabelEle = document.getElementById('edu-nav-label-id');
                this.eduNavDropdownEle = document.getElementById("edu-nav-dropdown-id");
                this.traininglabelEle = document.getElementById('training-menu-label-id');
                this.trainingDropdownEle = document.getElementById('training-menu-dd-id');
                this.testinglabelEle = document.getElementById('testing-menu-label-id');
                this.testingDropdownEle = document.getElementById('testing-menu-dd-id');
                this.packetslabelEle = document.getElementById('packets-menu-label-id');
                this.packetsDropdownEle = document.getElementById("packets-menu-dd-id");

                this.introductionlabelEle = document.getElementById('training-menu-intro-label-id');
                this.introductionDropdownEle = document.getElementById('training-menu-intro-dd-id');
                this.testingIntroductionlabelEle = document.getElementById('testing-menu-intro-label-id');
                this.testingIntroductionDropdownEle = document.getElementById('testing-menu-intro-dd-id');

                this.architecturelabelEle = document.getElementById('training-menu-arch-label-id');
                this.architectureDropdownEle = document.getElementById('training-menu-arch-dd-id');
                this.testingArchitecturelabelEle = document.getElementById('testing-menu-arch-label-id');
                this.testingArchitectureDropdownEle = document.getElementById('testing-menu-arch-dd-id');

                this.techlabelEle = document.getElementById('training-menu-tech-label-id');
                this.techDropdownEle = document.getElementById('training-menu-tech-dd-id');
                this.testingTechlabelEle = document.getElementById('testing-menu-tech-label-id');
                this.testingTechDropdownEle = document.getElementById('testing-menu-tech-dd-id');

                this.mediaArtslabelEle = document.getElementById('training-menu-media-arts-label-id');
                this.mediaArtsDropdownEle = document.getElementById('training-menu-media-arts-dd-id');
                this.testingMediaArtslabelEle = document.getElementById('testing-menu-media-arts-label-id');
                this.testingMediaArtsDropdownEle = document.getElementById('testing-menu-media-arts-dd-id');
               // console.log("this.equipmentlabelEle.id = " + this.equipmentlabelEle.id);
                //console.log("this.equipmentDropdownEle.id = " + this.equipmentDropdownEle.id);
                //console.log("Ending EduNavManager.init()");
            }

    }
//End EduNavManager





// BEGIN EduHtmlManager 
    let EduHtmlManager = {
        //Properties
        eduContentsEle: {},
        icDataEle: {},
        requestedFile: "",
        initialized: false,
    
        //Methods
        request: function(HTMLsourceFile, contentId){
            if (!this.initialized){this.init(); this.initialized = true;};
            //console.log("in EduHtmlManager.request() HTMLsourceFile =  " + HTMLsourceFile);
        //alert("in request HTMLsourceFile =  " + HTMLsourceFile);
            //console.log("contentId = " + contentId);
    //        TrainingNavEventHandler.closeDropDown("training"); needs updating
            //EduNavManager("training");
            this.requestedFile = HTMLsourceFile;
            //console.log("this.requestedFile = " + this.requestedFile);
            this.load(contentId);
        },

        load: function(contentId) {
           // console.log("in EduHtmlManager.load ");
            fetch(this.requestedFile)
                .then(res => {
                    if (res.ok) {
                        //console.log("res.ok");
                        return res.text();
                    }
                })
                .then(resultHTML => {
                    //console.log("loading resultHTML contentId = " + contentId);
                    this.eduContentsEle.innerHTML = resultHTML;
                    //console.log("scrolling Into View");
                    /*document.getElementById(contentId).scrollIntoView({block: 'start'});*/
                
                    //console.log("this.requestedFile = " + resultHTML);
                    //console.log("this.requestedFile.slice(0,24) = " + this.requestedFile.slice(0,24));
                    if(this.requestedFile.slice(0,24) == "html/Education/Training/"){
                        //console.log("reset page to top of page");
                        document.getElementById(contentId).scrollIntoView({block: 'start'});
                        //PracticeTruthTableManager.initialize();
                       // PracticeTruthTableManager.create("circuit","NotXor");
                    }
                    /*if(this.requestedFile == "html/Education/Training/GatesIcs.html"){
                        //console.log("reset page to top of page");
                        document.getElementById(contentId).scrollIntoView({block: 'start'});
                        //PracticeTruthTableManager.initialize();
                       // PracticeTruthTableManager.create("circuit","NotXor");
                    }*/
                    //console.log("before if(this.requestedFile == 'html////LS00 ");
                   //if(this.requestedFile == "html/Education/Resources/Data_Sheets/LS00_Data_Sheet.html"){
                    //console.log("this.requestedFile = " + resultHTML);
                    //console.log("this.requestedFile.slice(0,37) = " + this.requestedFile.slice(0,37));
                    if(this.requestedFile.slice(0,37) == "html/Education/Resources/Data_Sheets/"){
                        //console.log("in DataSheetTableManager.createTable");
                        console.log("this.requestedFile.slice(37, this.requestedFile.length -5) = " + this.requestedFile.slice(37, this.requestedFile.length -5));
                        let JsonTableData = {};
                        let idThead = "";
                        let idTbody = "";
                        switch(this.requestedFile.slice(37, this.requestedFile.length -5)){
                            case "LS00_Data_Sheet":
                                console.log("in LS00_Data_Sheet");
                                JsonTableData = JsonTableData74LS00;
                                idThead = "id-thead-7400";
                                idTbody = "id-tbody-7400";
                            break;
                            case "LS02_Data_Sheet":
                                console.log("in LS02_Data_Sheet");
                                JsonTableData = JsonTableData74LS02;
                                idThead = "id-thead-7402";
                                idTbody = "id-tbody-7402";
                            break;
                            case "LS04_Data_Sheet":
                                console.log("in LS04_Data_Sheet");
                                JsonTableData = JsonTableData74LS04;
                                idThead = "id-thead-7404";
                                idTbody = "id-tbody-7404";
                            break;
                            case "LS08_Data_Sheet":
                                console.log("in LS08_Data_Sheet");
                                JsonTableData = JsonTableData74LS08;
                                idThead = "id-thead-7408";
                                idTbody = "id-tbody-7408";
                            break;
                            case "LS32_Data_Sheet":
                                console.log("in LS32_Data_Sheet");
                                JsonTableData = JsonTableData74LS32;
                                idThead = "id-thead-7432";
                                idTbody = "id-tbody-7432";
                            break;
                            case "LS86_Data_Sheet":
                                console.log("in LS86_Data_Sheet");
                                JsonTableData = JsonTableData74LS86;
                                idThead = "id-thead-7486";
                                idTbody = "id-tbody-7486";
                            break;
                            default: alert("No Such JsonTableData");
                        }
                        DataSheetTableManager.createTable(JsonTableData, idThead, idTbody);
                    }
                    //console.log("Closing Packets DropDown");
                    //EduNavManager.openCloseDropdown('packets-menu-dd-lev-1', 'close');
                })
        },

        show: function() { 
         //alert("in EduHTML_Manager this.show()");
           // this.load();
            this.targetEle.classList.replace("transition-1-0","transition-0-1")
            this.targetEle.style.opacity = "1";
        },

        close: function(){
           // alert("in EduHTML_Manager this.close");
            this.icDataEle.style.opacity = 0;
            this.icDataEle.style.display = "none";
        },

        init: function() {
        //console.log("in EduHtmlManager.init()");
         //alert("this.eduNavOneContentsEle.classList = " + this.eduNavOneContentsEle.classList);
            this.eduContentsEle = document.getElementById("edu-contents-id");
        // alert("this.eduContentsEle.classList = " + this.eduContentsEle.classList);
          //  this.eduContentsEle.addEventListener("transitionend", this.show().bind, false);
            this.eduContentsEle.style.opacity = 1;   /*eduTransitionHasEnded*/
       // alert("after this.eduContentsEle");
            this.icDataEle = document.getElementById("ic-data-contents-id");
        //console.log("end of EduHtmlManager.init()");
        }
    }
    // END EduHtmlManager 






//Beginning of HardwarePageManager
       /* let HardwarePageManager = {
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
        }*/
		
//END of HardwarePageManager


//BEGINNING of TrainingNavEventHandler
/*
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
		//switch(evt){
		//	case ("trainingLabel"):
		//	break;
		//	default: alert("No such dropDownHandler Item");
		//}
	}, 

	openDropDown: function(selectedItemId){
		console.log("openDropDown this selectedItemId = " + selectedItemId);
		if(this.openDropDownIDs.length === 0){console.log("No DropDowns are Open");}
		if(this.openDropDownIDs.length === 1){console.log("training DropDown is Open.");}
		if(this.openDropDownIDs.length === 2){console.log(this.openDropDownIDs[1] + " is Open.");}
		if(this.openDropDownIDs.length === 3){console.log(this.openDropDownIDs[2] + " is Open.");}
		if(this.openDropDownIDs.length === 4){console.log(this.openDropDownIDs[3] + " is Open.");}
		//if(this.openDropDownIDs.length == 2){
		//		console.log("removing " + this.openDropDownIDs[1] + "  from openDropDownIDs");
		//	this.closeDropDown(this.openDropDownIDs[1]);
		//	this.openDropDownIDs.pop(this.openDropDownIDs[1]);
		//}
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
			//	if(this.openDropDownIDs.length == 2){
			//		console.log("removing " + this.openDropDownIDs[1] + "  from openDropDownIDs");
			//		this.closeDropDown(this.openDropDownIDs[1]);
			//		this.openDropDownIDs.pop(this.openDropDownIDs[1]);
			//	}
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
			default: ;//alert("Can not close! No such dropDownHandler Item")
		}
	},

	init: function(){
		// For Main Training DropDown
		this.trainingNavContainerEle = document.getElementById("training-menu-container-id");
		this.trainingLabelEle = document.getElementById("training-menu-label-id");
		this.trainingDropdownEle = document.getElementById("training-menu-dd-id");

		this.trainingNavContainerEle.addEventListener("mouseleave", function(event){
			TrainingNavEventHandler.closeDropDown(event.target.id, "mouseleave");
		}, true)
		this.trainingLabelEle.addEventListener("click", function(event){
			TrainingNavEventHandler.openDropDown(event.target.id, "click");
		}, true)
			// For "Introduction" Sub Dropdown
			this.introSubContainerEle = document.getElementById("training-menu-intro-container-id");
			this.introSubLabelEle = document.getElementById("training-menu-intro-label-id");
			this.introSubDropdownEle = document.getElementById("training-menu-intro-dd-id");
				
			this.introSubContainerEle.addEventListener("mouseleave", function(event){
				TrainingNavEventHandler.closeDropDown(event.target.id, "mouseleave");
			}, true)
			this.introSubLabelEle.addEventListener("click", function(){
					TrainingNavEventHandler.openDropDown("intro-sub-nav-label-id");
			}, true); 

				// For "Codes" 
		//		this.codesSubSubLabelEle = document.getElementById("intro-codes-sub-nav-label-id");
		//		this.codesSubSubLabelEle.addEventListener("click", function(event){
		//			EduHTML_Manager.request('html/Education/Training/Codes.html','codes-contents-id');
		//			alert("this.openDropDownIDs.length = " + this.openDropDownIDs.length);
		//			for(var i = this.openDropDownIDs.length; i >= 0; i--){
		//				TrainingNavEventHandler.closeDropDown(this.openDropDownIDs, "mouseleave");
		//			}
		//		}, true)

			// For "Architect" Sub DropDown"
			this.archSubContainerEle = document.getElementById("training-menu-arch-container-id");
			this.archSubLabelEle = document.getElementById("training-menu-arch-label-id");
			this.archSubDropdownEle = document.getElementById("training-menu-arch-dd-id");
				
			this.archSubContainerEle.addEventListener("mouseleave", function(event){
				TrainingNavEventHandler.closeDropDown(event.target.id, "mouseleave");
			}, true)
			this.archSubLabelEle.addEventListener("click", function(){
					TrainingNavEventHandler.openDropDown("architect-sub-nav-label-id");
			}, true); */

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
/*	}
}*/



/*
// BEGIN CodesTabManager 
    let CodesTabManager = {
        //Properties
        introductionTabEle: {},
        exampleTabEle: {},
        computerTabEle: {},
        introductionContentsEle: {},
        exampleContentsEle: {},
        computerContentsEle: {},
        initiated: false,

        selectedTab: "1",
        numberOfTabs: "3",
        //Methods
        changeTab: function(newTab){
        // alert("in CodesTabManager.changeTab");
        // alert("this.initiated =  " + this.initiated);
            if(!this.initiated){
            // alert("sending to this.init()");
                this.init();
                this.initiated = true;
            }
            //TODO remove .selectedTab from this.selectedTab and add to newTab
            if(newTab == this.selectedTab){return}
            //alert("this.selectedTab =  " + this.selectedTab + "<br>newTab =  " + newTab);
            switch (this.selectedTab){
                case "1":
                //  alert("removing selected-tab from intro tab");
                    this.introductionTabEle.classList.replace("selected-tab", "unselected-tab");
                    this.introductionContentsEle.classList.replace("selected-contents","unselected-contents");
                //  alert("after remove selected-tab from #1");
                    break;
                case "2":
                    this.exampleTabEle.classList.replace("selected-tab", "unselected-tab");
                    this.exampleContentsEle.classList.replace("selected-contents","unselected-contents");
                //  alert("after remove selected-tab from #2");
                    break;
                case "3":
                    this.computerTabEle.classList.replace("selected-tab", "unselected-tab");
                    this.computerContentsEle.classList.replace("selected-contents","unselected-contents");
                //  alert("after remove selected-tab from #3");
                    break;
                default: alert("No Such Tab Number");
            }
            //alert("after 1st switch to remove");
            switch (newTab){
                case "1":
                    this.introductionTabEle.classList.replace("unselected-tab","selected-tab");
                    this.introductionContentsEle.classList.replace("unselected-contents","selected-contents");
                    break;
                case "2":
                //  alert("adding selected-tab to example tab");
                    this.exampleTabEle.classList.replace("unselected-tab","selected-tab");
                    this.exampleContentsEle.classList.replace("unselected-contents","selected-contents");
                    break;
                case "3":
                    this.computerTabEle.classList.replace("unselected-tab","selected-tab");
                    this.computerContentsEle.classList.replace("unselected-contents","selected-contents");
                    break;
                default: alert("No Such Tab Number");
            }
            this.selectedTab = newTab;
            //alert("this.selectedTab now =  " + newTab);
        },
        
        init: function(){
         //alert("in CodesTabManager.init()");
            this.introductionTabEle = document.getElementById("introduction-tab-id");
            this.exampleTabEle = document.getElementById("example-tab-id");
            this.computerTabEle = document.getElementById("computer-tab-id");
            this.introductionContentsEle = document.getElementById("introduction-contents-id");
            this.exampleContentsEle = document.getElementById("example-contents-id");
            this.computerContentsEle = document.getElementById("computer-contents-id");
        //  alert("CodesTabManager.init() finished and removing selected-tab from intro");
        // this.introductionTabEle.classList.remove("selected-tab");
        //    alert("after removal"); 
        }
    }

// END of CodesTabManager 
*/




// BEGIN ModuleArchitectManager 
        let ModuleBlockManager = {
            //Properties
            selectedBlock: "memory",
            selectedMode: 0, // 0 => "block mode"    1 => "74LS mode"
            selectionData: {
                memory: {
                    title: "Memory Module",
                    source: ["MemoryBlock.svg", "MemoryBlock74LS.svg"]
                },
                alu: {
                    title: "Arithmetic Logic Unit (ALU) Module",
                    source: ["ALU_Block.svg","ALU_Block74LS.svg"]
                },
                input: {
                    title: "Input Module",
                    source: ["InputBlock.svg","InputBlock74LS.svg"]
                },
                output: {
                    title: "Output Module",
                    source: ["OutputBlock.svg","OutputBlock74LS.svg"]
                },
                programCounter: {
                    title: "Program Counter Module",
                    source: ["PcBlock.svg","PcBlock74LS.svg"]
                },
                control: {
                    title: "Control Module",
                    source: ["ControlBlock.svg","ControlBlock74LS.svg"]
                },
                clock: {
                    title: "Clock Module",
                    source: ["ClockBlock.svg","ClockBlock74LS.svg"]
                },
                bus: {
                    title: "BUS Module",
                    source: ["BusBlock.svg","BusBlock74LS.svg"]
                }
            },
            //Methods
            display: function(target){
              //  alert("this.selectedBlock = " + this.selectedBlock + "  target = " + target);
                document.getElementById(this.selectedBlock + "-button-id").classList.remove("selected-block-button");
                document.getElementById(target + "-button-id").classList.add("selected-block-button");
              //  alert("in between"); 
                let labelEle = document.getElementById("block-label-id");
                let imgEle = document.getElementById("block-img-id");
               // alert("entering switch");
                switch (target){
                    case ("memory"):
                        labelEle.innerHTML = this.selectionData.memory.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.memory.source[this.selectedMode];
                    break;
                    case ("alu"):
                        labelEle.innerHTML =  this.selectionData.alu.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.alu.source[this.selectedMode];
                    break;
                    case ("input"):
                        labelEle.innerHTML = this.selectionData.input.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.input.source[this.selectedMode];
                    break;
                    case ("output"):
                        labelEle.innerHTML =  this.selectionData.output.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.output.source[this.selectedMode];
                    break;
                    case ("programCounter"):
                       // alert("this.selectionData.programCounter.source[this.selectedMode] = " + this.selectionData.programCounter.source[this.selectedMode]);
                        labelEle.innerHTML = this.selectionData.programCounter.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.programCounter.source[this.selectedMode];
                    break;
                    case ("control"):
                        labelEle.innerHTML =  this.selectionData.control.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.control.source[this.selectedMode];
                    break;
                    case ("clock"):
                        labelEle.innerHTML = this.selectionData.clock.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.clock.source[this.selectedMode];
                    break;
                    case ("bus"):
                        labelEle.innerHTML =  this.selectionData.bus.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.bus.source[this.selectedMode];
                    break;
                    default: alert("No Such Module");
                    
                }
                
                this.selectedBlock = target;
            },
            changeMode: function(){
               // alert("in changeMode");
                let modeBlockEle = document.getElementById("mode-block-id");
                let mode74lsEle = document.getElementById("mode-74ls-id");
                if(this.selectedMode == 0){
                    modeBlockEle.classList.remove("selected-mode");
                    mode74lsEle.classList.add("selected-mode");
                    this.selectedMode = 1;
                }else{
                    modeBlockEle.classList.add("selected-mode");
                    mode74lsEle.classList.remove("selected-mode");
                    this.selectedMode = 0;
                }
                this.display(this.selectedBlock);
            }
        }
// END ModuleArchitectManager 