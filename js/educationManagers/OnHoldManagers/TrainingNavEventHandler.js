
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