 let TrainingDropdownManager = {
        //properties
            initialized: false,
            traininglabelEle: {},
            trainingDropdownEle: {},
            trainingDropdownHidden: true,

            testinglabelEle: {},
            testingDropdownEle: {},
            testingDropdownHidden: true,

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
                console.log("after init(). dropdown = " + dropdown);
                switch(dropdown){
                    case ("menu-dd-lev-1"):
				        console.log("in 'menu-dd-lev-1'");
                       this.toggleDropdown(this.trainingDropdownEle, "menu-dd-lev-1-hidden", openOrClose);
                        this.trainingDropdownHidden = !this.trainingDropdownHidden;
                        break;
                    case ("test-menu-dd-lev-1"):
				        console.log("in test-menu-dd-lev-1");
                       this.toggleDropdown(this.testingDropdownEle, "menu-dd-lev-1-hidden", openOrClose);
                        this.testingDropdownHidden = !this.testingDropdownHidden;
                        break;
                    case ("introduction-dropdown"):
				        console.log("in 'introduction-dropdown'");
                       this.toggleDropdown(this.introductionDropdownEle, "menu-dd-lev-2-hidden", openOrClose);
                        this.introductionDropdownHidden = !this.introductionDropdownHidden;
                        break;
                    case ("test-introduction-dropdown"):
				        console.log("in 'introduction-dropdown'");
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
                   /* case ("hardware-dropdown"):
                        console.log("In case 'hardware-dropdown' -- this.hardwearDropdownEle.id = " + this.hardwearDropdownEle.id);
                        console.log("In case 'hardware-dropdown' -- this.hardwearDropdownHidden = " + this.hardwearDropdownHidden);
                        this.toggleDropdown(this.hardwearDropdownEle, "menu-dd-lev-3-hidden", openOrClose);
                        this.hardwearDropdownHidden = !this.hardwearDropdownHidden;
                        break;
                    case ("components-dropdown"):
                       this.toggleDropdown(this.componentsDropdownEle, "menu-dd-lev-4-hidden", openOrClose);
                        this.componentsDropdownHidden = !this.componentsDropdownHidden;
                        break;
                    case ("equipment-dropdown"):
                       this.toggleDropdown(this.equipmentDropdownEle, "menu-dd-lev-4-hidden", openOrClose);
                        this.equipmentDropdownHidden = !this.equipmentDropdownHidden;
                        break;*/
                    
                    default:(console.log("No Such Dropdown"));
                }
            },

            toggleDropdown: function(dropdownEle, hiddenClassName, openOrClose){
                console.log("dropdownEle.id = " + dropdownEle);
                console.log("dropdownHidden = " + hiddenClassName);
                if(openOrClose === "open"){
                    //console.log("removing hidenClassName = " + hiddenClassName);
                    dropdownEle.classList.remove(hiddenClassName);
                }else{
                    dropdownEle.classList.add(hiddenClassName);
                }
            },

            init: function(){
                //console.log("beginning init()");
                this.traininglabelEle = document.getElementById('training-menu-label-id');
                this.trainingDropdownEle = document.getElementById('training-menu-dd-id');
                this.testinglabelEle = document.getElementById('testing-menu-label-id');
                this.testingDropdownEle = document.getElementById('testing-menu-dd-id');

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
               /* this.hardwearlabelEle = document.getElementById('training-hardwear-label-id');
                this.hardwearDropdownEle = document.getElementById('training-hardware-dropdown-id');
                this.componentslabelEle = document.getElementById('training-components-label-id');
                this.componentsDropdownEle = document.getElementById('training-components-dropdown-id');
                this.equipmentlabelEle = document.getElementById('training-equipment-label-id');
                this.equipmentDropdownEle = document.getElementById('training-equipment-dropdown-id');*/
               // console.log("this.equipmentlabelEle.id = " + this.equipmentlabelEle.id);
                //console.log("this.equipmentDropdownEle.id = " + this.equipmentDropdownEle.id);
                //console.log("Ending init()");
            }

    }
 
 
 /*let TrainingDropdownManager = {
        //properties
            initialized: false,
            traininglabelEle: {},
            trainingDropdownEle: {},
            trainingDropdownHidden: true,
            introductionlabelEle: {},
            introductionDropdownEle: {},
            introductionDropdownHidden: true,
            architecturelabelEle: {},
            architectureDropdownEle: {},
            architectureDropdownHidden: true,
            techlabelEle: {},
            techDropdownEle: {},
            techDropdownHidden: true,
            mediaArtslabelEle: {},
            mediaArtsDropdownEle: {},
            mediaArtsDropdownHidden: true,
            hardwarelabelEle: {},
            hardwearDropdownEle: {},
            hardwearDropdownHidden: true,
            componentslabelEle: {},
            componentsDropdownEle: {},
            componentsDropdownHidden: true,
            equipmentlabelEle: {},
            equipmentDropdownEle: {},
            equipmentDropdownHidden: true,
        //methods
            openCloseDropdown: function(dropdown, openOrClose){
                if(!this.initialized){this.init(); this.initialized = true;}
                //console.log("after init(). dropdown = " + dropdown);
                switch(dropdown){
                    case ("training-dropdown"):
                       this.toggleDropdown(this.trainingDropdownEle, "training-dropdown-hidden", openOrClose);
                        this.trainingDropdownHidden = !this.trainingDropdownHidden;
                        break;
                    case ("introduction-dropdown"):
                       this.toggleDropdown(this.introductionDropdownEle, "sub-menu-hidden", openOrClose);
                        this.introductionDropdownHidden = !this.introductionDropdownHidden;
                        break;
                    case ("architecture-dropdown"):
                       this.toggleDropdown(this.architectureDropdownEle, "sub-menu-hidden", openOrClose);
                        this.architectureDropdownHidden = !this.architectureDropdownHidden;
                        break;
                    case ("tech-dropdown"):
                       this.toggleDropdown(this.techDropdownEle, "sub-menu-hidden", openOrClose);
                        this.techDropdownHidden = !this.techDropdownHidden;
                        break;
                    case ("media-arts-dropdown"):
                       this.toggleDropdown(this.mediaArtsDropdownEle, "sub-menu-hidden", openOrClose);
                        this.mediaArtsDropdownHidden = !this.mediaArtsDropdownHidden;
                        break;
                    case ("hardware-dropdown"):
                        console.log("In case 'hardware-dropdown' -- this.hardwearDropdownEle.id = " + this.hardwearDropdownEle.id);
                        console.log("In case 'hardware-dropdown' -- this.hardwearDropdownHidden = " + this.hardwearDropdownHidden);
                        this.toggleDropdown(this.hardwearDropdownEle, "sub-sub-menu-dropdown-hidden", openOrClose);
                        this.hardwearDropdownHidden = !this.hardwearDropdownHidden;
                        break;
                    case ("components-dropdown"):
                       this.toggleDropdown(this.componentsDropdownEle, "sub-sub-menu-hidden", openOrClose);
                        this.componentsDropdownHidden = !this.componentsDropdownHidden;
                        break;
                    case ("equipment-dropdown"):
                       this.toggleDropdown(this.equipmentDropdownEle, "sub-sub-menu-hidden", openOrClose);
                        this.equipmentDropdownHidden = !this.equipmentDropdownHidden;
                        break;
                    
                    default:(console.log("No Such Dropdown"));
                }
            },

            toggleDropdown: function(dropdownEle, hiddenClassName, openOrClose){
               // console.log("dropdownEle.id = " + dropdownEle.id);
               // console.log("dropdownHidden = " + dropdownHidden);
                if(openOrClose === "open"){
                    console.log("removing hidenClassName " + hiddenClassName);
                    dropdownEle.classList.remove(hiddenClassName);
                }else{
                    dropdownEle.classList.add(hiddenClassName);
                }
            },

            init: function(){
                //console.log("beginning init()");
                this.traininglabelEle = document.getElementById('training-label-id');
                this.trainingDropdownEle = document.getElementById('training-dropdown-id');
                this.introductionlabelEle = document.getElementById('introduction-label-id');
                this.introductionDropdownEle = document.getElementById('introduction-dropdown-id');
                this.architecturelabelEle = document.getElementById('architecture-label-id');
                this.architectureDropdownEle = document.getElementById('architecture-dropdown-id');
                this.techlabelEle = document.getElementById('tech-label-id');
                this.techDropdownEle = document.getElementById('tech-dropdown-id');
                this.mediaArtslabelEle = document.getElementById('media-arts-label-id');
                this.mediaArtsDropdownEle = document.getElementById('media-arts-dropdown-id');
                this.hardwearlabelEle = document.getElementById('hardwear-label-id');
                this.hardwearDropdownEle = document.getElementById('hardware-dropdown-id');
                this.componentslabelEle = document.getElementById('components-label-id');
                this.componentsDropdownEle = document.getElementById('components-dropdown-id');
                this.equipmentlabelEle = document.getElementById('equipment-label-id');
                this.equipmentDropdownEle = document.getElementById('equipment-dropdown-id');
                //console.log("this.equipmentlabelEle.id = " + this.equipmentlabelEle.id);
               // console.log("this.equipmentDropdownEle.id = " + this.equipmentDropdownEle.id);
                //console.log("Ending init()");
            }

    }*/