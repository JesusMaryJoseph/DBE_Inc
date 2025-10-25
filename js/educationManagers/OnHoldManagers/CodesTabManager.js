
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
