/*
/  EduHTML_Manager     10
/  CeoHTML_Manager    145
/  TableManager       280
*/



/* EduHTML_Manager */

let EduHTML_Manager = {
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
    eduEle: {},
    eduArticleEle: {},
    /*pdfIframe: {}, */
  
    //Methods
    load: function(HTMLsourceFile, targetOption) {
       // alert("in load");
        //alert("HTMLsourceFile: " + HTMLsourceFile);
        //alert("targetOption =  " + targetOption);
        switch(targetOption){
            case "edu":
                this.htmlTargetEle = this.eduEle;
            break;
            case "edu-article":
                this.htmlTargetEle = this.eduArticleEle;
            break;
            default:
                alert("no such load target");
        }
       // alert("this.htmlTargetEle.style.opacity = " + this.eduEle.style.opacity);
         this.htmlTargetEle.style.zIndex = 10;
        this.htmlTargetEle.style.opacity = "1";
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
                //alert("loading resultHTML");
                this.htmlTargetEle.innerHTML = resultHTML;
            })
        // TODO: reset dropdown
        //EduNavHandler.showHide("packets");
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

    close: function(selectedNav) {
        this.htmlTargetEle.style.zIndex = -10;
        this.htmlTargetEle.style.opacity = "0";
      /*  if(!EduNavHandler.hidden){
            EduNavHandler.showHide(selectedNav);
        } */
      //  this.setActiveInactiveLabel("set", this.liveDropdown);
      //  this.setActiveInactiveLabel("reSet", "Proposal");
    },

    transitionHasEnded: function() {
       // alert("in transitionHasEnded");
        if (this.htmlTargetEle.style.opacity == 0) {
            this.htmlTargetEle.style.zIndex = -10;
        }
       /* if(!EduNavHandler.hidden){
                EduNavHandler.showHide(selectedNav);
        } */
    }, 

    init: function() {
    // alert("in EduHTML_Manager init()");
        this.eduEle = document.getElementById("edu-contents-id");
        this.eduEle.addEventListener("transitionend", this.transitionHasEnded);
        this.eduArticleEle = document.getElementById("edu-article-id");
        this.eduArticleEle.addEventListener("transitionend",this.transitionHasEnded);
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
     // alert("leaving EduHTML_Manager init()");
    }
}
/* End EduHTML_Manager */


/* Begin TableManager  */
let TableManager = {
    //Properties

    //Methods
    generateTable: function(lsType){
       /* alert("lsType = " + lsType); */
        EduHTML_Manager.load("html/Education/Resources/Data_Sheets/LS107/LS107_Data_Sheet.html", "edu-article");
    },

    init: function(){
    }
}

/* End TableManager  */