/*
/  HTML_Manager     10
/
/  TableManager     120
*/




let HTML_Manager = {
    //Properties
    //  loaded: false,
    eduManagersSelector: {},
    eduResourcesSelector: {},
    eduTestingSelector: {},
    eduTrainingSelector: {},
    managersLabel: {},
    resourcesLabel: {},
    trainingLabel: {},
    testingLabel: {},
    activeSelector:{},
    activeSelectorLabel: {},
    eduContentsSelected: "edu-managers-dropdown",
    htmlTargetEle: {},
    htmlTargetEleArticle: {},
    loadOption: "",

    //Methods
    load: function (HTMLsourceFile, option) {
        //alert("in load");
         // alert("HTMLsourceFile: " + HTMLsourceFile);
        // alert("option =  " + option);
        this.loadOption = option;
        if(option == "edu"){
            this.htmlTargetEle.style.zIndex = 10;
            this.htmlTargetEle.style.opacity = "1";
        }else{
           // alert("in htmlTargetEleArticle");
            this.htmlTargetEleArticle.style.zIndex = 10;
            this.htmlTargetEleArticle.style.opacity = "1";
        }
        //  if(!this.loaded){ 
        fetch(HTMLsourceFile)
            .then(res => {
                //alert("in res =>");
                if (res.ok) {
                   // alert("res.ok");
                    return res.text();
                }
            })
            .then(resultHTML => {
               // alert("loading resultHTML");
               if(option == "edu"){
                    this.htmlTargetEle.innerHTML = resultHTML;
               }else{
                   // alert("loading into htmlTargetEleOpt");
                    this.htmlTargetEleArticle.innerHTML = resultHTML;
               }
            })
        // TODO: reset dropdown
        EduNavHandler.showHide();
    }, 

    display: function (contentsSelected) {
       // alert("in display");
       // alert("contentsSelected: " + contentsSelected);
        this.activeSelector.classList.replace("edu-dropdown-display","edu-dropdown-none");
        this.activeSelector.style.display = "none";
        this.activeSelectorLabel.classList.remove("edu-label-active");
        switch (contentsSelected) {
            case "Managers":
                this.activeSelector = this.eduManagersSelector;
                this.activeSelectorLabel = this.managersLabel;
                break;
            case "Resources":
              //  alert("in case-Resources");
                this.activeSelector = this.eduResourcesSelector;
                this.activeSelectorLabel = this.resourcesLabel;
              //  alert("leaving case: Resources");
                break;
            case "Training":
                this.activeSelector = this.eduTrainingSelector;
                this.activeSelectorLabel = this.trainingLabel;
                break;
            case "Testing":
                this.activeSelector = this.eduTestingSelector;
                this.activeSelectorLabel = this.testingLabel;
                break;
            default: alert("no such edu-contents");
        }
      //  alert("before activeSelector.classList.replace");
        this.activeSelector.classList.replace("edu-dropdown-none","edu-dropdown-display")
      //  alert("before actDrpdwn.style.display = flex");
        this.activeSelector.style.display = "flex";
      //  alert("before activeSelectorLabel classList.add");
        this.activeSelectorLabel.classList.add("edu-label-active"); 
    },

    close: function() {
        if(this.loadOption == "edu"){
            this.htmlTargetEle.style.zIndex = -10;
            this.htmlTargetEle.style.opacity = "0";
        }else{
            this.htmlTargetEleArticle.style.zIndex = -10;
            this.htmlTargetEleArticle.style.opacity = "0";
        }
        if(!EduNavHandler.hidden){
            EduNavHandler.showHide();
        }
      //  this.setActiveInactiveLabel("set", this.liveDropdown);
      //  this.setActiveInactiveLabel("reSet", "Proposal");
    },

    transitionHasEnded: function() {
        //alert("in transitionHasEnded");
        let newEle = document.getElementById("html-target-id");
        if (newEle.style.opacity == 0) {
            newEle.style.zIndex = -10;
        }
    },

    init: function() {
        // alert("in HTML_Manager init()");
        this.htmlTargetEle = document.getElementById("edu-contents-id");
        this.htmlTargetEle.addEventListener("transitionend", this.transitionHasEnded);
        this.htmlTargetEleArticle = document.getElementById("html-target-id");
        this.htmlTargetEleArticle.addEventListener("transitionend", this.transitionHasEnded);
        this.eduManagersSelector = document.getElementById("edu-managers-selector-id");
        this.eduResourcesSelector = document.getElementById("edu-resources-selector-id");
        this.eduTrainingSelector = document.getElementById("edu-training-selector-id");
        this.eduTestingSelector = document.getElementById("edu-testing-selector-id");
        this.managersLabel = document.getElementById("managers-label-id");
        this.resourcesLabel = document.getElementById("resources-label-id");
        this.trainingLabel = document.getElementById("training-label-id");
        this.testingLabel = document.getElementById("testing-label-id");
        this.activeSelector = this.eduManagersSelector;
        this.activeSelectorLabel = this.managersLabel;
        //alert("after HTML_Manager init()");
    }
}
/* End HTML_Manager */



/* Begin TableManager  */
let TableManager = {
    //Properties

    //Methods
    generateTable: function(lsType){
       /* alert("lsType = " + lsType); */
        HTML_Manager.load("html/Education/Resources/Data_Sheets/LS107/LS107_Data_Sheet.html", "art");
    },

    init: function(){
    }
}

/* End TableManager  */