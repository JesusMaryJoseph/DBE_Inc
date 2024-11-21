/*
/  EduHTML_Manager     10
/  CeoHTML_Manager    145
/  TableManager       280
*/


function eduTransitionHasEnded(){
    //alert("in eduTransitionHasEnded and<br>EduHTML_Manager.eduEle.style.opacity =  " + EduHTML_Manager.eduEle.style.opacity);
   if(EduHTML_Manager.eduEle.style.opacity == 0){
    EduHTML_Manager.show();
   }
}

/* EduHTML_Manager */
let EduHTML_Manager = {
    //Properties
    eduEle: {},
    requestedFile: "",
  
    //Methods
    request: function(HTMLsourceFile){
        //alert("in request HTMLsourceFile =  " + HTMLsourceFile);
        this.requestedFile = HTMLsourceFile;
        this.eduEle.classList.replace("transition-0-1","transition-1-0");
        this.eduEle.style.opacity = 0;
    },

    load: function() {
        //alert("in load");
        //alert("HTMLsourceFile: " + HTMLsourceFile);
        //alert("targetOption =  " + targetOption);

        fetch(this.requestedFile)
            .then(res => {
                //alert("in res =>");
                if (res.ok) {
                   // alert("res.ok");
                    return res.text();
                }
            })
            .then(resultHTML => {
                //alert("loading resultHTML");
                this.eduEle.innerHTML = resultHTML;
            })
    },

    show: function() { 
        //alert("in this.show()");
        this.load();
        this.eduEle.classList.replace("transition-1-0","transition-0-1")
        this.eduEle.style.opacity = "1";
    },

    init: function() {
     //alert("in EduHTML_Manager init()");
        this.eduEle = document.getElementById("edu-contents-id");
        this.eduEle.addEventListener("transitionend", eduTransitionHasEnded, false);
        this.eduEle.style.opacity = 1;
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
        //alert("in load HTMLsourceFile =  " + HTMLsourceFile);
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
        //alert("in TableManager.init()");
    }
}

/* End TableManager  */

/* Begin CodesTabManager */

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
                this.introductionContentsEle.classList.remove("selected-contents");
              //  alert("after remove selected-tab");
                break;
            case "2":
                this.exampleTabEle.classList.replace("selected-tab", "unselected-tab");
                this.exampleContentsEle.classList.remove("selected-contents");
                break;
            case "3":
                this.computerTabEle.classList.replace("selected-tab", "unselected-tab");
                this.computerContentsEle.classList.remove("selected-contents");
                break;
            default: alert("No Such Tab Number");
        }
        //alert("after 1st switch to remove");
        switch (newTab){
            case "1":
                this.introductionTabEle.classList.add("selected-tab");
                this.introductionContentsEle.classList.add("selected-contents");
                break;
            case "2":
              //  alert("adding selected-tab to example tab");
                this.exampleTabEle.classList.add("selected-tab");
                this.exampleContentsEle.classList.add("selected-contents");
                break;
            case "3":
                this.computerTabEle.classList.add("selected-tab");
                this.computerContentsEle.classList.add("selected-contents");
                break;
            default: alert("No Such Tab Number");
        }
        this.selectedTab = newTab;
        //alert("this.selectedTab now =  " + newTab);
    },
    
    init: function(){
       // alert("in CodesTabManager.init()");
        this.introductionTabEle = document.getElementById("introduction-tab-id");
        this.exampleTabEle = document.getElementById("example-tab-id");
        this.computerTabEle = document.getElementById("computer-tab-id");
        this.introductionContentsEle = document.getElementById("introduction-contents-id");
        this.exampleContentsEle = document.getElementById("example-contents-id");
        this.computerContentsEle = document.getElementById("computer-contents-id");
      //  alert("CodesTabManager.init() finished and removing selected-tab from intro");
       /* this.introductionTabEle.classList.remove("selected-tab");
        alert("after removal"); */
    }
}

/* End of CodesTabManager */