
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