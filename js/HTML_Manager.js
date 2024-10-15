let HTML_Manager = {
    //Properties
    //  loaded: false,
    eduManagersDropdown: {},
    eduResourcesDropdown: {},
    eduTestingDropdown: {},
    eduTrainingDropdown: {},
    managersLabel: {},
    resourcesLabel: {},
    trainingLabel: {},
    testingLabel: {},
    proposalLabel: {},
    activeDropdown:{},
    activeSelectorLabel: {},
    eduContentsSelected: "edu-managers-dropdown",
    htmlTargetEle: {},

    //Methods
    load: function (HTMLsourceFile) {
        //alert("in load");
         // alert("HTMLsourceFile: " + HTMLsourceFile);
        this.htmlTargetEle.style.zIndex = 10;
        this.htmlTargetEle.style.opacity = "1";
        //  if(!this.loaded){ 
        fetch(HTMLsourceFile)
            .then(res => {
               // alert("in res =>");
                if (res.ok) {
                   // alert("res.ok");
                    return res.text();
                }
            })
            .then(resultHTML => {
               // alert("loading resultHTML");
                this.htmlTargetEle.innerHTML = resultHTML;
            })
    }, 

    display: function (contentsSelected) {
       // alert("in display");
        //alert("contentsSelected: " + contentsSelected);
        this.activeDropdown.classList.replace("edu-dropdown-display","edu-dropdown-none")
        this.activeDropdown.style.display = "none";
        this.activeSelectorLabel.classList.remove("edu-label-active");
        switch (contentsSelected) {
            case "Managers":
                this.activeDropdown = this.eduManagersDropdown;
                this.activeSelectorLabel = this.managersLabel;
                break;
            case "Resources":
                this.activeDropdown = this.eduResourcesDropdown;
                this.activeSelectorLabel = this.resourcesLabel;
                break;
            case "Training":
                this.activeDropdown = this.eduTrainingDropdown;
                this.activeSelectorLabel = this.trainingLabel;
                break;
            case "Testing":
                this.activeDropdown = this.eduTestingDropdown;
                this.activeSelectorLabel = this.testingLabel;
                break;
            default: alert("no such edu-contents");
        }
        this.activeDropdown.classList.replace("edu-dropdown-none","edu-dropdown-replace")
        this.activeDropdown.style.display = "flex";
        this.activeSelectorLabel.classList.add("edu-label-active"); 
    },

    close: function() {
        this.htmlTargetEle.style.opacity = "0";
        this.setActiveInactiveLabel("set", this.liveDropdown);
        this.setActiveInactiveLabel("reSet", "Proposal");
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
        this.htmlTargetEle = document.getElementById("html-target-id");
        this.htmlTargetEle.addEventListener("transitionend", this.transitionHasEnded);
        this.eduManagersDropdown = document.getElementById("edu-managers-dropdown-id");
        this.eduResourcesDropdown = document.getElementById("edu-resources-dropdown-id");
        this.eduTrainingDropdown = document.getElementById("edu-training-dropdown-id");
        this.eduTestingDropdown = document.getElementById("edu-testing-dropdown-id");
        this.managersLabel = document.getElementById("managers-label-id");
        this.resourcesLabel = document.getElementById("resources-label-id");
        this.trainingLabel = document.getElementById("training-label-id");
        this.testingLabel = document.getElementById("testing-label-id");
        this.proposalLabel = document.getElementById("proposal-label-id");
        this.activeDropdown = this.eduManagersDropdown;
        this.activeSelectorLabel = this.managersLabel;
        //alert("after HTML_Manager init()");
    }
}