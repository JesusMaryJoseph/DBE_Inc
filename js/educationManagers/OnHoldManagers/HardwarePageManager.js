
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
