let HTML_Manager = {
    //Properties
  //  loaded: false,
    liveDropdown: "Packets",
    eduContentsSelected: "none",
    htmlTargetEle: {},
    eduPacketsDropdown: {},
    eduResourcesDropdown: {},
    eduTestingDropdown: {},
    eduTrainingDropdown: {},
    packetsLabel: {},
    resourcesLabel: {},
    trainingLabel: {},
    testingLabel: {},
    proposalLabel: {},

    //Methods
    load: function(HTMLsourceFile) {
        //alert("in load");
      //  alert("HTMLsourceFile: " + HTMLsourceFile);
        if(HTMLsourceFile == "html/Proposal.html"){
            this.setActiveInactiveLabel("set", "Proposal");
            this.setActiveInactiveLabel("reSet", this.liveDropdown);
        }
        this.htmlTargetEle.style.zIndex = 10;
        this.htmlTargetEle.style.opacity= "1";
      //  if(!this.loaded){
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
                this.htmlTargetEle.innerHTML = resultHTML;
            })

           // this.loaded = true;
     //   } 
      //  this.showing = true; 
    },

    display: function(contentsSelected){
        switch(this.liveDropdown){
            case "Packets":
              //  alert("in Packets & " + this.liveDropdown + " Selected");
                this.eduPacketsDropdown.style.display = "none";
                this.packetsLabel.classList.remove("edu-label-active"); 
                break;
            case "Resources":
             //   alert("in Resources & " + this.liveDropdown + " Selected");
                this.eduResourcesDropdown.style.display = "none";
                this.resourcesLabel.classList.remove("edu-label-active"); 
                break;
            case "Training":
             //   alert("in Training & " + this.liveDropdown + " Selected");
                this.eduTrainingDropdown.style.display = "none";
                this.trainingLabel.classList.remove("edu-label-active"); 
                break;
            case "Testing":
             //   alert("in Testing & " + this.liveDropdown + " Selected");
                this.eduTestingDropdown.style.display = "none";
                this.testingLabel.classList.remove("edu-label-active"); 
                break;
            default: alert("no such edu-contents");
        }
        switch(contentsSelected){
            case "Packets":
                if( window.getComputedStyle( this.eduPacketsDropdown ).display === "none" ){
                    this.eduPacketsDropdown.style.display = "flex";
                  //  alert("add orangered color to Packets");
                    this.setActiveInactiveLabel("set", "Packets");
                  //  this.packetsLabel.classList.add("edu-label-active");
                }
                this.liveDropdown = "Packets";
                break;
            case "Resources":
                if( window.getComputedStyle( this.eduResourcesDropdown ).display === "none" ){
                    this.eduResourcesDropdown.style.display = "flex";
                    this.setActiveInactiveLabel("set", "Resources");
                   // this.resourcesLabel.classList.add("edu-label-active");
                }
                this.liveDropdown = "Resources";
                break;
            case "Training":
                if( window.getComputedStyle( this.eduTrainingDropdown ).display === "none" ){
                    this.eduTrainingDropdown.style.display = "flex";
                    this.setActiveInactiveLabel("set", "Training");
                  //  this.trainingLabel.classList.add("edu-label-active");
                }
                this.liveDropdown = "Training";
                break;
            case "Testing":
                if( window.getComputedStyle( this.eduTestingDropdown ).display === "none" ){
                    this.eduTestingDropdown.style.display = "flex";
                    this.setActiveInactiveLabel("set", "Testing");
                   // this.testingLabel.classList.add("edu-label-active");
                }
                this.liveDropdown = "Testing";
                break;
            default: alert("no such edu-contents");
        }
        this.showingDropdown = contentsSelected;
    }, 

    setActiveInactiveLabel: function(setReset, label){
        switch(label){
            case "Proposal":
                if(setReset == "set"){
                    this.proposalLabel.classList.add("edu-label-active");
                }else{
                    this.proposalLabel.classList.remove("edu-label-active");
                }
                break;
            case "Packets":
                if(setReset == "set"){
                    this.packetsLabel.classList.add("edu-label-active");
                }else{
                    this.packetsLabel.classList.remove("edu-label-active");
                }
                break;
            case "Resources":
                if(setReset == "set"){
                    this.resourcesLabel.classList.add("edu-label-active");
                }else{
                    this.resourcesLabel.classList.remove("edu-label-active");
                }
                break;
            case "Training":
                if(setReset == "set"){
                    this.trainingLabel.classList.add("edu-label-active");
                }else{
                    this.trainingLabel.classList.remove("edu-label-active");
                }
                break;
            case "Testing":
                if(setReset == "set"){
                    this.testingLabel.classList.add("edu-label-active");
                }else{
                    this.testingLabel.classList.remove("edu-label-active");
                }
                break;
            default: alert("no such edu-contents");
        }
    },

    close: function(){
        this.htmlTargetEle.style.opacity = "0";
        this.setActiveInactiveLabel("set", this.liveDropdown);
        this.setActiveInactiveLabel("reSet", "Proposal");
       /* this.htmlTargetEle.style.zIndex = -10; */
    },

    transitionHasEnded: function(){
        //alert("in transitionHasEnded");
        let newEle = document.getElementById("html-target-id");
        if(newEle.style.opacity == 0){
            newEle.style.zIndex = -10;	
        }
    },

    init: function(){
        //alert("in HTML_Manager init()");
        this.htmlTargetEle = document.getElementById("html-target-id");
        this.htmlTargetEle.addEventListener("transitionend",this.transitionHasEnded);
        this.eduPacketsDropdown = document.getElementById("edu-packets-dropdown-id");
        this.eduResourcesDropdown = document.getElementById("edu-resources-dropdown-id");
        this.eduTrainingDropdown = document.getElementById("edu-training-dropdown-id");
        this.eduTestingDropdown = document.getElementById("edu-testing-dropdown-id");
        this.packetsLabel = document.getElementById("packets-label-id"); 
        this.resourcesLabel = document.getElementById("resources-label-id"); 
        this.trainingLabel = document.getElementById("training-label-id"); 
        this.testingLabel = document.getElementById("testing-label-id"); 
        this.proposalLabel = document.getElementById("proposal-label-id");
        //alert("after HTML_Manager init()");
    }
}