/*
/  EduHTML_Manager     10
/  CeoHTML_Manager    145
/  TableManager       280
*/


function eduTransitionHasEnded(){
   // alert("in eduTransitionHasEnded");
    EduHTML_Manager.transitionFinished = true;
    EduHTML_Manager.eduFinishTransition();
}

/*function eduArticleTransitionHasEnded(){
    //alert("in transitionhasEnded");
    EduHTML_Manager.eduFinishTransition();
} */

/* EduHTML_Manager */
let EduHTML_Manager = {
    //Properties
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
        this.htmlTargetEle.style.zIndex = 10;
        this.htmlTargetEle.style.opacity = "1";
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
        this.htmlTargetEle.style.opacity = "0";
    },

    eduFinishTransition: function() {
        // alert("in eduFinishTransition");
       // alert("this.htmlTargetEle.style.opacity =  " + 'this.htmlTargetEle.style.opacity');
        if (this.htmlTargetEle.style.opacity == 0) {
            this.htmlTargetEle.style.zIndex = -10;
        }else{
            this.htmlTargetEle.style.zIndex = 10;
        }
       /* if(!EduNavHandler.hidden){
        EduNavHandler.showHide(selectedNav);
        } */
    },

    init: function() {
     //alert("in EduHTML_Manager init()");
        this.eduEle = document.getElementById("edu-contents-id");
        this.eduEle.addEventListener("transitionend", eduTransitionHasEnded);
        this.eduArticleEle = document.getElementById("edu-article-id");
        this.eduArticleEle.addEventListener("transitionend", artTransitionHasEnded);
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



function ceoTransitionHasEnded(){
    //alert("in transitionhasEnded");
    CeoHTML_Manager.ceoFinishTransition();
}

/* CeoHTML_Manager */
let CeoHTML_Manager = {
    //Properties
    ceoEle: {},

    //Methods
    load: function(HTMLsourceFile) {
        //alert("in load");
        this.ceoEle.style.zIndex = 10;
    // alert("this.ceoEle.style.zIndex =  " + this.ceoEle.style.zIndex);
        this.ceoEle.style.opacity = 1;
        fetch(HTMLsourceFile)
            .then(res => {
                //alert("in res =>");
                if (res.ok) {
                    //alert("res.ok");
                    return res.text();
                }
            })
            .then(resultHTML => {
                //alert("loading resultHTML");
                this.ceoEle.innerHTML = resultHTML;
            })
    },

    close: function() { 
        //alert("this.ceoEle.style.zIndex =  " + this.ceoEle.style.zIndex);
        //alert("this.ceo.style.opacity =  " + this.ceoEle.style.opacity);
        this.ceoEle.style.opacity = 0;
        //this.opacity = 0;
    },

    ceoFinishTransition: function() {
        //alert("in finish.Transition");
       // alert("this.ceoEle.style.opacity =  " + this.ceoEle.style.opacity);
        if (this.ceoEle.style.opacity == 0) {
            this.ceoEle.style.zIndex = -10;
        }else{
            this.ceoEle.style.zIndex = 10;
        }
    },

    init: function() {
    //alert("in CeoHTML_Manager init()");
        this.ceoEle = document.getElementById("ceo-contents-id");
        this.ceoEle.addEventListener("transitionend", ceoTransitionHasEnded, false);
    //alert("leaving EduHTML_Manager init()");
    }
}
/* End CeoHTML_Manager */	

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