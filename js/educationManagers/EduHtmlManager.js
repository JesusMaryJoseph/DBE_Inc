
    let EduHtmlManager = {
        //Properties
        eduContentsEle: {},
        icDataEle: {},
        requestedFile: "",
        initialized: false,
        //JsonTableData74173: {},
    
        //Methods
        request: function(HTMLsourceFile, contentId){
            if (!this.initialized){this.init(); this.initialized = true;};
           // console.log("in EduHtmlManager.request() HTMLsourceFile =  " + HTMLsourceFile);
        //alert("in request HTMLsourceFile =  " + HTMLsourceFile);
           // console.log("contentId = " + contentId);
    //        TrainingNavEventHandler.closeDropDown("training"); needs updating
            //EduNavManager("training");
            this.requestedFile = HTMLsourceFile;
            //console.log("this.requestedFile = " + this.requestedFile);
            this.load(contentId);
        },

        load: function(contentId) {
           // console.log("in EduHtmlManager.load ");
            fetch(this.requestedFile)
                .then(res => {
                    if (res.ok) {
                        //console.log("res.ok");
                        return res.text();
                    }
                })
                .then(resultHTML => {
                    //console.log("loading resultHTML contentId = " + contentId);
                    this.eduContentsEle.innerHTML = resultHTML;
                    //console.log("scrolling Into View");
                    /*document.getElementById(contentId).scrollIntoView({block: 'start'});*/
                
                    //console.log("this.requestedFile = " + resultHTML);
                    //console.log("this.requestedFile.slice(0,24) = " + this.requestedFile.slice(0,24));
                if(this.requestedFile.slice(0,24) == "html/Education/Training/"){
                   // console.log("reset page to top of page");
                    document.getElementById(contentId).scrollIntoView({block: 'start'});
                    //PracticeTruthTableManager.initialize();
                    //PracticeTruthTableManager.create("circuit","NotXor");
                }
                    if(this.requestedFile == "html/Education/Training/GatesIcs.html"){
                        PracticeTruthTableManager.initialize();
                        PracticeTruthTableManager.create("circuit","NotXor");
                    }
                    //console.log("before if(this.requestedFile == 'html////LS00 ");
                   //if(this.requestedFile == "html/Education/Resources/Data_Sheets/LS00_Data_Sheet.html"){
                    //console.log("this.requestedFile = " + resultHTML);
                    //console.log("this.requestedFile.slice(0,37) = " + this.requestedFile.slice(0,37));
                    if(this.requestedFile.slice(0,37) == "html/Education/Resources/Data_Sheets/"){
                        //console.log("in DataSheetTableManager.createTable");
                       // console.log("this.requestedFile.slice(37, this.requestedFile.length -5) = " + this.requestedFile.slice(37, this.requestedFile.length -5));
                        let JsonTableData = {};
                        let idThead = "";
                        let idTbody = "";
                        switch(this.requestedFile.slice(37, this.requestedFile.length -5)){
                            case "LS00_Data_Sheet":
                               // console.log("in LS00_Data_Sheet");
                                JsonTableData = JsonTableData74LS00;
                                idThead = "id-thead-7400";
                                idTbody = "id-tbody-7400";
                            break;
                            case "LS02_Data_Sheet":
                              //  console.log("in LS02_Data_Sheet");
                                JsonTableData = JsonTableData74LS02;
                                idThead = "id-thead-7402";
                                idTbody = "id-tbody-7402";
                            break;
                            case "LS04_Data_Sheet":
                              //  console.log("in LS04_Data_Sheet");
                                JsonTableData = JsonTableData74LS04;
                                idThead = "id-thead-7404";
                                idTbody = "id-tbody-7404";
                            break;
                            case "LS08_Data_Sheet":
                               // console.log("in LS08_Data_Sheet");
                                JsonTableData = JsonTableData74LS08;
                                idThead = "id-thead-7408";
                                idTbody = "id-tbody-7408";
                            break;
                            case "LS32_Data_Sheet":
                               // console.log("in LS32_Data_Sheet");
                                JsonTableData = JsonTableData74LS32;
                                idThead = "id-thead-7432";
                                idTbody = "id-tbody-7432";
                            break;
                            case "LS86_Data_Sheet":
                               // console.log("in LS86_Data_Sheet");
                                JsonTableData = JsonTableData74LS86;
                                idThead = "id-thead-7486";
                                idTbody = "id-tbody-7486";
                            break;
                            case "LS107_Data_Sheet":
                                JsonTableData = JsonTableData74LS107;
                                idThead = "id-thead-74107";
                                idTbody = "id-tbody-74107";
                            break;
                            case "LS161_Data_Sheet":
                                JsonTableData = JsonTableData74LS161;
                                idThead = "id-thead-74161";
                                idTbody = "id-tbody-74161";
                            break;
                            case "LS173_Data_Sheet":
                               // console.log("in LS173_Data_Sheet");
                                JsonTableData = JsonTableData74LS173;
                               // console.log("after JsonTableData = JsonTableData74LS173;");
                                idThead = "id-thead-74173";
                                idTbody = "id-tbody-74173";
                            break;
                            default: alert("No Such JsonTableData");
                        }
                        DataSheetTableManager.createTable(JsonTableData, idThead, idTbody);
                    }
                    //console.log("Closing Packets DropDown");
                    //EduNavManager.openCloseDropdown('packets-menu-dd-lev-1', 'close');
                })
        },

        show: function() { 
         //alert("in EduHTML_Manager this.show()");
           // this.load();
            this.targetEle.classList.replace("transition-1-0","transition-0-1")
            this.targetEle.style.opacity = "1";
        },

        close: function(){
           // alert("in EduHTML_Manager this.close");
            this.icDataEle.style.opacity = 0;
            this.icDataEle.style.display = "none";
        },

        init: function() {
        //console.log("in EduHtmlManager.init()");
         //alert("this.eduNavOneContentsEle.classList = " + this.eduNavOneContentsEle.classList);
            this.eduContentsEle = document.getElementById("edu-contents-id");
        // alert("this.eduContentsEle.classList = " + this.eduContentsEle.classList);
          //  this.eduContentsEle.addEventListener("transitionend", this.show().bind, false);
            this.eduContentsEle.style.opacity = 1;   /*eduTransitionHasEnded*/
       // alert("after this.eduContentsEle");
            this.icDataEle = document.getElementById("ic-data-contents-id");
        //console.log("end of EduHtmlManager.init()");
        }
    }