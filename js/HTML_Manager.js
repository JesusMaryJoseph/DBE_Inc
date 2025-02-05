/*
/   EduHTML_Manager         8
/   CeoHTML_Manager         66
/   TableManager            122
/   CodesTabManager         139
/   QuestionAnswerManager   264
*/
function eduTransitionHasEnded(){
    alert("in eduTransitionHasEnded and<br>EduHTML_Manager.eduEle.style.opacity =  " + EduHTML_Manager.eduEle.style.opacity);
   if(EduHTML_Manager.eduEle.style.opacity == 0){
    EduHTML_Manager.show();
   }
}

// PracticeTruthTableManager
let PracticeTruthTableManager = {
    //Properties
    dataCreated: false,
    tablesInitialized: false,

    basicTitleEle: {},
    basicImgEle: {},
    basicTheadEle: {},
    basicTbodyEle: {},
    basicSolutionTheadEle: {},
    basicSolutionTbodyEle: {},

    circuitTitleEle: {},
    circuitImgEle: {},
    circuitTheadEle: {},
    circuitTbodyEle: {},
    circuitSolutionTheadEle: {},
    circuitSolutionTbodyEle: {},

    tableSelection: "basic",

    gateName: "AND",
    circuitName: "NotXor",
    completeDataSet: {},
    basicDataEle: {},
    circuitDataEle: {},
    practiceTableEle: {},
    solutionTableEle: {},
    inputOutputValues: [["0","1"],["F","T"]],
    valueSelector: 1, 
                        
    //Methods

    initialize: function(){
        this.createData();
        this.dataCreated = true;
        this.update("basic","AND");
        this.update("circuit","NotXor");
        this.tablesInitialized = true;

          
    // create TableBodys
        // "basic" Table Body


     /*  let tBodysEle = [this.basicTbodyEle,this.basicSolutionTbodyEle,this.circuitTbodyEle,this.circuitSolutionTbodyEle];
        let imgId = ["basic-img-id","","circuit-img-id",""];
        // create tableBody Input (NOT for Solution's Tables)
        //alert("begin fill of Table Body");
        for( table = 0; table < 4; table += 2){
            //alert("table = " + table);
            let numberInputCols = dataElement[table].inputs;
            let numberOfRows = 2**numberInputCols;
            let inputOutputValue = "";
            for(var row = 0; row < numberOfRows; row++){
               // alert("row =  " + row);
                let tdText = "";
                const tableBodyRow = tBodysEle[table].insertRow();
               // alert("after const tableBodyRow");
                for(var col = numberInputCols - 1; col >= 0 ; col--){
                    const td = document.createElement("td");
                   // alert("col = " + col );
                    if( col == 0 ){
                        //alert("in P0");
                            inputOutputValue = this.inputOutputValues[this.valueSelector][row % 2];
                    }else{
                        if( col == 2 ){
                            //alert("in P2");
                            //alert("Math.floor(row / 4) = " + parseInt(Math.floor(row / 4))); 
                            inputOutputValue = this.inputOutputValues[this.valueSelector][Math.floor(row / 4)];
                            //alert("inputOutputValue =  " + inputOutputValue);
                        }else{
                            //alert("in P1"); 
                            inputOutputValue = this.inputOutputValues[this.valueSelector][Math.floor(row / 2) % 2];
                        } 
                    }
                    tdText = document.createTextNode(inputOutputValue);
                   // alert("tdText = " + tdText);
                    td.appendChild(tdText);
                    //alert("col = " + col);
                    tableBodyRow.appendChild(td);
                }

                // Adding Image to row 0 with rowSpan = numberOfRows
                if(row == 0){
                    // add img col with rowSpan = # of rows
                    let tdCellImg = tableBodyRow.insertCell(-1);   
                    tdCellImg.rowSpan = numberOfRows;  
                    let tdImg = document.createElement('img');
                    tdImg.id = imgId[table];
                    tdImg.src = dataElement[table].img;
                    tdCellImg.appendChild(tdImg);
                }

                // Adding Outputs to "basic" and "circuit" Tables
                let numberOutputCols = dataElement[table].outputs;
                for(var col = numberOutputCols - 1; col >= 0 ; col--){
                    const td = document.createElement("td");
                    const inputEle = document.createElement("input");
                    inputEle.type = "number";
                    inputEle.maxlength = 1;
                    td.appendChild(inputEle);
                    tableBodyRow.appendChild(td);
                }
                
            }
        }
        
        this.updateSolutionTableBody(1,2**this.basicDataEle.inputs,this.basicDataEle.outputs);
        this.updateSolutionTableBody(3,2**this.circuitDataEle.inputs,this.circuitDataEle.outputs);*/
        
/*   this.tablesInitialized = true; */
    },


    update: function(tableSelection, gateCircuitName){
        // alert("in create");
         //alert("tableSelection = " + tableSelection);
         //alert("gateCircuitName = " + gateCircuitName);
         this.tableSelection = tableSelection;
         if(tableSelection == "basic"){
             //alert("in BASIC this.practiceTableEle");
             this.practiceTableEle = document.getElementById("basic-table-id");
            // this.solutionTableEle = document.getElementById("basic-solution-table-id");
            this.gateName = gateCircuitName;
         }else{
             this.practiceTableEle = document.getElementById("circuit-table-id");
            // this.solutionTableEle = document.getElementById("circuit-solution-table-id");
            this.circuitName = gateCircuitName;
         }
 
         switch (gateCircuitName){
            case "NOT":
                this.basicDataEle = this.completeDataSet.Not;
                break;
            case "AND":
                this.basicDataEle = this.completeDataSet.And;
                break;
            case "OR":
                this.basicDataEle = this.completeDataSet.Or;
                break;
            case "XOR":
                this.basicDataEle = this.completeDataSet.Xor;
                break;
            case "NAND": 
                this.basicDataEle = this.completeDataSet.Nand;
                break;
            case "NOR":
                this.basicDataEle = this.completeDataSet.Nor;
                break;
            case "NXOR":
                this.basicDataEle = this.completeDataSet.Nxor;
                break;
            case "NotXor":
                this.circuitDataEle = this.completeDataSet.NotXor;
                break;
            case "AndNotOr":
                this.circuitDataEle = this.completeDataSet.AndNotOr;
                break;
            case "OrAndXor":
                this.circuitDataEle = this.completeDataSet.OrAndXor;
                break;
            case "NotAndXorOr":
                this.circuitDataEle = this.completeDataSet.NotAndXorOr;
                break;
            case "NotXorOrNand":
                this.circuitDataEle = this.completeDataSet.NotXorOrNand;
                break;
            case "NandNotNand": 
                this.circuitDataEle = this.completeDataSet.NandNotNand;
                break;
            case "NorNandNxor":
                this.circuitDataEle = this.completeDataSet.NorNandNxor;
            break;
            case "AndOrNandNxorNandNor":
                this.circuitDataEle = this.completeDataSet.AndOrNandNxorNandNor;
                break;
            case "NorNorNor":
                this.circuitDataEle = this.completeDataSet.NorNorNor;
                break;
            case "TwoToFourDecoder":
                this.circuitDataEle = this.completeDataSet.TwoToFourDecoder;
                break;
            case "AndAndOrW3Inputs":
                this.circuitDataEle = this.completeDataSet.AndAndOrW3Inputs;
                break;
            default: alert("no Data Source for this entry");
         }
            this.updateTableHeads();
            this.updateTableBodys();
    },

    updateTableHeads: function(){
         //alert("setting Array data");
        // Create TableHeads (eg titles)
        let tHeadsEle = [this.basicTheadEle,this.basicSolutionTheadEle,this.circuitTheadEle,this.circuitSolutionTheadEle];
        let dataElement = [this.basicDataEle,this.basicDataEle,this.circuitDataEle,this.circuitDataEle];
        let circuitColSpan = this.circuitDataEle.inputs + 1 + this.circuitDataEle.outputs;
        let titleColSpan = [4,this.basicDataEle.outputs,circuitColSpan,this.circuitDataEle.outputs];
        let titleId = ["basic-title-id","basic-solution-title-id","circuit-title-id","circuit-solution-title-id"];
        let headings = ["Inputs", "Digital Circuit", "Outputs"];
         
        let titleRow = {};
        let tableStart = "";
        let tableEnd = "";

        if(this.tableSelection == "basic"){
            while(this.basicTheadEle.firstChild){
                //alert("removing firstChild");
                this.basicTheadEle.removeChild(this.basicTheadEle.firstChild);
            }
            while(this.basicSolutionTheadEle.firstChild){
                this.basicSolutionTheadEle.removeChild(this.basicSolutionTheadEle.firstChild);
            }
            tableStart = 0;
            tableEnd = 2;
        }else{
            while(this.circuitTheadEle.firstChild){
                //alert("removing firstChild");
                this.circuitTheadEle.removeChild(this.circuitTheadEle.firstChild);
            }
            while(this.circuitSolutionTheadEle.firstChild){
                this.circuitSolutionTheadEle.removeChild(this.circuitSolutionTheadEle.firstChild);
            }
            tableStart = 2;
            tableEnd = 4;
        }
       // alert("setting title");
       for(table = tableStart; table < tableEnd; table++){
            titleRow = tHeadsEle[table].insertRow();
            const titleRowTh = document.createElement('th');
            titleRowTh.innerHTML = dataElement[table].title;
            titleRowTh.colSpan = titleColSpan[table];
            titleRowTh.id = titleId[table];
            titleRow.appendChild(titleRowTh);
        }
         
        // Input/Circuit/Output headings Row
            let colSpanValues = [[this.basicDataEle.inputs, 1, this.basicDataEle.outputs],[this.basicDataEle.inputs, 1, this.basicDataEle.outputs],[this.circuitDataEle.inputs, 1, this.circuitDataEle.outputs],[/*this.circuitDataEle.inputs, 1, */this.circuitDataEle.outputs]];
            let maxCol = [3,1,3,1]; // 3 headings for "Practice Tables" and 1 heading for "Solution Tables"
      //  alert("setting Input/Circuit/Output");
       for(table = tableStart; table < tableEnd; table++){
            let headingsRow = tHeadsEle[table].insertRow();
            for(var col = 0; col < maxCol[table]; col++){
                const thTag = document.createElement('th');
                if( (table == 0) || (table == 2)){
                    thTag.innerHTML = headings[col];
                }else{
                    thTag.innerHTML = headings[2];
                }
                if(col == 1){
                    thTag.rowSpan = 2;
                }
                //alert("thTag.innerHTML = " + thTag.innerHTML);
                thTag.colSpan = colSpanValues[table][col];
                headingsRow.appendChild(thTag);
            }
        }
        
        // Input/Output(labels)
        
      //  alert("setting Input/Output(labels)");
        for(table = tableStart; table < tableEnd; table++){   
            let inputsOutputsRow = tHeadsEle[table].insertRow();
            if( (table == 0) || (table == 2)){
                for(var col = dataElement[table].inputs - 1; col >= 0 ; col--){
                    const thTag = document.createElement('th');
                    thTag.innerHTML = "P<sub>" + col + "</sub>";
                    inputsOutputsRow.appendChild(thTag);
                } 
            }
            for(var col = 0; col < dataElement[table].outputs; col++){
            const thTag = document.createElement('th');
            thTag.innerHTML = "Q<sub>" + col + "</sub>";
            inputsOutputsRow.appendChild(thTag);
            }
        } 
    },


    updateTableBodys: function(){
        //alert("in updateTableBodys");

        if(this.tableSelection == "basic"){
            while(this.basicTbodyEle.firstChild){
                //alert("removing 'basic' firstChild");
                this.basicTbodyEle.removeChild(this.basicTbodyEle.firstChild);
            }
            while(this.basicSolutionTbodyEle.firstChild){
                //alert("removing 'circuit' firstChild");
                this.basicSolutionTbodyEle.removeChild(this.basicSolutionTbodyEle.firstChild);
            }
            tableStart = 0;
            tableEnd = 2;
        }else{
            while(this.circuitTbodyEle.firstChild){
                //alert("removing firstChild");
                this.circuitTbodyEle.removeChild(this.circuitTbodyEle.firstChild);
            }
            while(this.circuitSolutionTbodyEle.firstChild){
                this.circuitSolutionTbodyEle.removeChild(this.circuitSolutionTbodyEle.firstChild);
            }
            tableStart = 2;
            tableEnd = 4;
        }

        // "basic" Table Body
        let dataElement = [this.basicDataEle,this.basicDataEle,this.circuitDataEle,this.circuitDataEle,]
        let circuitColSpan = this.circuitDataEle.inputs + 1 + this.circuitDataEle.outputs;
        let titleColSpan = [4,this.basicDataEle.outputs,circuitColSpan,this.circuitDataEle.outputs];
        let titleId = ["basic-title-id","basic-solution-title-id","circuit-title-id","circuit-solution-id"];


      let tBodysEle = [this.basicTbodyEle,this.basicSolutionTbodyEle,this.circuitTbodyEle,this.circuitSolutionTbodyEle];
        let imgId = ["basic-img-id","","circuit-img-id",""];
        // create tableBody Input (NOT for Solution's Tables)
        //alert("begin fill of Table Body");
        for( table = tableStart; table < tableEnd; table += 2){
            //alert("table = " + table);
            let numberInputCols = dataElement[table].inputs;
            let numberOfRows = 2**numberInputCols;
            let inputOutputValue = "";
            for(var row = 0; row < numberOfRows; row++){
               // alert("row =  " + row);
                let tdText = "";
                const tableBodyRow = tBodysEle[table].insertRow();
               // alert("after const tableBodyRow");
                for(var col = numberInputCols - 1; col >= 0 ; col--){
                    const td = document.createElement("td");
                   // alert("col = " + col );
                    if( col == 0 ){
                        //alert("in P0");
                            inputOutputValue = this.inputOutputValues[this.valueSelector][row % 2];
                    }else{
                        if( col == 2 ){
                            //alert("in P2");
                            //alert("Math.floor(row / 4) = " + parseInt(Math.floor(row / 4))); 
                            inputOutputValue = this.inputOutputValues[this.valueSelector][Math.floor(row / 4)];
                            //alert("inputOutputValue =  " + inputOutputValue);
                        }else{
                            //alert("in P1"); 
                            inputOutputValue = this.inputOutputValues[this.valueSelector][Math.floor(row / 2) % 2];
                        } 
                    }
                    tdText = document.createTextNode(inputOutputValue);
                   // alert("tdText = " + tdText);
                    td.appendChild(tdText);
                    //alert("col = " + col);
                    tableBodyRow.appendChild(td);
                }

                // Adding Image to row 0 with rowSpan = numberOfRows
                if(row == 0){
                    // add img col with rowSpan = # of rows
                    let tdCellImg = tableBodyRow.insertCell(-1);   
                    tdCellImg.rowSpan = numberOfRows;  
                    let tdImg = document.createElement('img');
                    tdImg.id = imgId[table];
                    tdImg.src = dataElement[table].img;
                    tdCellImg.appendChild(tdImg);
                }

                // Adding Outputs to "basic" and "circuit" Tables
                let numberOutputCols = dataElement[table].outputs;
                for(var col = numberOutputCols - 1; col >= 0 ; col--){
                    const td = document.createElement("td");
                    const inputEle = document.createElement("input");
                    inputEle.type = "number";
                    inputEle.maxlength = 1;
                    td.appendChild(inputEle);
                    tableBodyRow.appendChild(td);
                }
                
            }
        }
        
        this.updateSolutionTableBody(1,2**this.basicDataEle.inputs,this.basicDataEle.outputs);
        this.updateSolutionTableBody(3,2**this.circuitDataEle.inputs,this.circuitDataEle.outputs);
        
    },


    updateSolutionTableBody: function(table,numberOfRows,numberOutputCols){
       // alert("in updateSolutionTableBody");
        let tBodysEle = [this.basicTbodyEle,this.basicSolutionTbodyEle,this.circuitTbodyEle,this.circuitSolutionTbodyEle];
        let dataElement = [this.basicDataEle,this.basicDataEle,this.circuitDataEle,this.circuitDataEle]
        let solutionValues = dataElement[table].solutions01;
        if(this.valueSelector == 1){
            solutionValues = dataElement[table].solutionsTF;
        }else{
            solutionValues = dataElement[table].solutions01;
        }
       // alert("solutionValues[0][0] = " + solutionValues[0][0]);
        tBodysEle[table].innerHTML = "";
      // alert("numberOfRows = " + numberOfRows);
       for(var row = 0; row < numberOfRows; row++){
           // alert("row =  " + row);
            let tdText = "";
            const tableBodyRow = tBodysEle[table].insertRow();
            // alert("after const tableBodyRow");
             for(var col = 0; col < numberOutputCols; col++){
                const td = document.createElement("td");
                if(numberOutputCols == 1){
                   // alert("row = " + row);
                    tdText = document.createTextNode(solutionValues[row]);
                }else{
                    tdText = document.createTextNode(solutionValues[col][row]);
                }
               // alert("tdText = " + tdText);
                td.appendChild(tdText);
                //alert("col = " + col);
                tableBodyRow.appendChild(td);
            }
        }
    },


    createData: function(){
       // alert("in this.createData"); 
        let dataString = `{"Not":{"title": "The NOT Logic Gate","inputs": 1,"outputs": 1,"solutions01":[1,0],"solutionsTF":["T","F"],"img":"media/imgs/basicLogicGates/NOT_wPQ.svg"},
                           "And":{"title": "The AND Logic Gate","inputs": 2,"outputs": 1,"solutions01":[0,0,0,1],"solutionsTF":["F","F","F","T"],"img":"media/imgs/basicLogicGates/AND_wPQ.svg"},
                           "Or":{"title": "The OR Logic Gate","inputs": 2,"outputs": 1,"solutions01":[0,1,1,1],"solutionsTF":["F","T","T","T"],"img":"media/imgs/basicLogicGates/OR_wPQ.svg"},
                           "Xor":{"title": "The XOR Logic Gate","inputs": 2,"outputs": 1,"solutions01":[0,1,1,0],"solutionsTF":["F","T","T","F"],"img":"media/imgs/basicLogicGates/XOR_wPQ.svg"},
                           "Nand":{"title": "The NAND Logic Gate","inputs": 2,"outputs": 1,"solutions01":[1,1,1,0],"solutionsTF":["T","T","T","F"],"img":"media/imgs/basicLogicGates/NAND_wPQ.svg"},
                           "Nor":{"title": "The NOR Logic Gate","inputs": 2,"outputs": 1,"solutions01":[1,0,0,0],"solutionsTF":["T","F","F","F"],"img":"media/imgs/basicLogicGates/NOR_wPQ.svg"},
                           "Nxor":{"title": "The NXOR Logic Gate","inputs": 2,"outputs": 1,"solutions01":[1,0,0,1],"solutionsTF":["T","F","F","T"],"img":"media/imgs/basicLogicGates/NXOR_wPQ.svg"},
                           "NotXor":{"title": "The NotXor Circuit","inputs": 2,"outputs": 2,"solutions01":[[1,1,0,0],[1,0,0,1]],"solutionsTF":[["T","T","F","F"],["T","F","F","T"]],"img":"media/imgs/basicLogicGates/NotXor_wPQ.svg"},
                           "AndNotOr":{"title": "The AndNotOr Circuit","inputs": 2,"outputs": 3,"solutions01":[[0,0,0,1],[1,0,1,0],[1,0,1,1]],"solutionsTF":[["F","F","F","T"],["T","F","T","F"],["T","F","T","T"]],"img":"media/imgs/basicLogicGates/AndNotOr_wPQ.svg"},
                           "OrAndXor":{"title": "The OrAndXor Circuit","inputs": 2,"outputs": 3,"solutions01":[[0,1,1,1],[0,0,0,1],[0,1,1,0]],"solutionsTF":[["F","T","T","T"],["F","F","F","T"],["F","T","T","F"]],"img":"media/imgs/basicLogicGates/OrAndXor_wPQ.svg"},
                           "NotAndXorOr":{"title": "The NotAndXorOr Circuit","inputs": 2,"outputs": 4,"solutions01":[[1,1,0,0],[0,1,0,0],[1,0,0,1],[1,1,0,1]],"solutionsTF":[["T","T","F","F"],["F","T","F","F"],["T","F","F","T"],["T","T","F","T"]],"img":"media/imgs/basicLogicGates/NotAndXorOr_wPQ.svg"},
                           "NotXorOrNand":{"title": "The NotXorOrNand Circuit","inputs": 2,"outputs": 4,"solutions01":[[1,1,0,0],[1,0,0,1],[1,1,0,0],[0,1,1,1]],"solutionsTF":[["T","T","F","F"],["T","F","F","T"],["T","T","F","F"],["F","T","T","T"]],"img":"media/imgs/basicLogicGates/NotXorOrNand_wPQ.svg"},
                           "NandNotNand":{"title": "The NandNotNand Circuit","inputs": 2,"outputs": 3,"solutions01":[[1,1,1,0],[1,0,1,0],[0,1,0,1]],"solutionsTF":[["T","T","T","F"],["T","F","T","F"],["F","T","F","T"]],"img":"media/imgs/basicLogicGates/NandNotNand_wPQ.svg"},
                           "NorNandNxor":{"title": "The NorNandNxor Circuit","inputs": 2,"outputs": 3,"solutions01":[[1,0,0,0],[1,1,1,0],[1,0,0,1]],"solutionsTF":[["T","F","F","F"],["T","T","T","F"],["T","F","F","T"]],"img":"media/imgs/basicLogicGates/NorNandNxor_wPQ.svg"},
                           "AndOrNandNxorNandNor":{"title": "The AndOrNandNxorNandNor Circuit","inputs": 2,"outputs": 6,"solutions01":[[0,0,0,1],[0,1,1,1],[1,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]],"solutionsTF":[["F","F","F","T"],["F","T","T","T"],["T","T","T","F"],["T","F","F","T"],["T","F","F","T"],["F","T","T","F"]],"img":"media/imgs/basicLogicGates/AndOrNandNxorNandNor_wPQ.svg"},
                           "NorNorNor":{"title": "The NorNorNor Circuit","inputs": 2,"outputs": 3,"solutions01":[[1,0,1,0],[1,1,0,0],[0,0,0,1]],"solutionsTF":[["T","F","T","F"],["T","T","F","F"],["F","F","F","T"]],"img":"media/imgs/basicLogicGates/NorNorNor_wPQ.svg"},
                           "TwoToFourDecoder":{"title": "The TwoToFourDecoder Circuit","inputs": 2,"outputs": 6,"solutions01":[[1,0,1,0],[1,1,0,0],[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],"solutionsTF":[["T","F","T","F"],["T","T","F","F"],["F","T","T","T"],["T","F","T","T"],["T","T","F","T"],["T","T","T","F"]],"img":"media/imgs/basicLogicGates/TwoToFourDecoder_wPQ.svg"},
                           "AndAndOrW3Inputs":{"title": "The AndAndOrW3Inputs Circuit","inputs": 3,"outputs": 3,"solutions01":[[0,0,0,1,0,1,0,1],[0,0,0,1,0,1,0,1],[0,0,0,1,0,1,0,1]],"solutionsTF":[["F","F","F","T","F","T","F","T"],["F","F","F","T","F","T","F","T"],["F","F","F","T","F","T","F","T"]],"img":"media/imgs/basicLogicGates/AndAndOr_w3InPQ.svg"}
                           }`;

        /*,
                           "AndAndOrW3Inputs":{"title": "The AndAndOrW3Inputs Circuit","inputs": 3,"outputs": 3,"solutions01":[[0,0,0,1,0,1,0,1],[0,0,0,1,0,1,0,1],[0,0,0,1,0,1,0,1]],"solutionsTF":[["F","F","F","T","F","T","F","T"],["F","F","F","T","F","T","F","T"],["F","F","F","T","F","T","F","T"]],"img":"media/imgs/basicLogicGates/AndAndOr_w3InPQ.svg"}  */                   
        //alert("after let dataString =");
       this.completeDataSet = JSON.parse(dataString);
        //alert("after JSON.parse");
        //alert("gateCircuitData created");
    //	this.basicTitleEle = document.geElementById("basic-title-id");
    //	this.basicImgEle = document.getElementById("basic-img-id"),
        this.basicTheadEle = document.getElementById("basic-thead-id");
        this.basicTbodyEle = document.getElementById("basic-tbody-id");
        this.basicSolutionTheadEle = document.getElementById("basic-solution-thead-id");
        this.basicSolutionTbodyEle = document.getElementById("basic-solution-tbody-id");

     /*	this.circuitTitleEle = document.getElementById("circuit-title-id");
        this.circuitImgEle = document.getElementById("circuit-img-id");*/
        this.circuitTheadEle = document.getElementById("circuit-thead-id");
        this.circuitTbodyEle = document.getElementById("circuit-tbody-id");
        this.circuitSolutionTheadEle = document.getElementById("circuit-solution-thead-id");
        this.circuitSolutionTbodyEle = document.getElementById("circuit-solution-tbody-id");
        
        this.dataCreated = "true";
        alert("data created");
    }
    

}// END PracticeTruthTableManager






/* EduHTML_Manager */
    let EduHTML_Manager = {
        //Properties
      /*  eduNavOneContentsEle: {},
        eduNavTwoContentsEle: {},*/
        eduContentsEle: {},
      /*  targetEle: {},*/
        requestedFile: "",
    
        //Methods
        request: function(HTMLsourceFile){
        //alert("in request HTMLsourceFile =  " + HTMLsourceFile);
        // alert("targetEdu = " + targetEdu);
        // alert("requestingEle = " + requestingEle);
            this.requestedFile = HTMLsourceFile;
         /*   switch(targetEdu){
                case "nav-one":
                   // alert("in case nav-one");
                    this.targetEle = this.eduNavOneContentsEle;
                break;
                case "nav-two":
                    //alert("in case nav-two");
                    this.targetEle = this.eduNavTwoContentsEle;
                break;
                case "edu-contents":
                   // alert("in case contents");
                    this.targetEle = this.eduContentsEle;
                    //alert("this.eduContentsEle.classList = " + this.eduContentsEle.classList);
                break;
                default: alert("No Such Target");
            }*/
           /* if(requestingEle ==="videos" || requestingEle === "datasheets" || requestingEle === "packets"){
                // alert("requestingEle = " + requestingEle);
                // alert("requesting Element was 'true'");
                this.eduNavOneContentsEle.innerHTML = "";
                this.eduNavTwoContentsEle.innerHTML = "";
            }*/
           // alert("just before  this.targetEle.classList.replace");
            //this.targetEle.classList.replace("transition-0-1","transition-1-0");
           // alert("between");
            //this.targetEle.style.opacity = 1;
           // alert("this.load() next");
            this.load();
        },

        load: function() {
           // alert("in load");
            //alert("HTMLsourceFile: " + HTMLsourceFile);
            //alert("targetOption =  " + targetOption);

            fetch(this.requestedFile)
                .then(res => {
                   // alert("in res =>");
                    if (res.ok) {
                       //alert("res.ok");
                        return res.text();
                    }
                })
                .then(resultHTML => {
                    //alert("loading resultHTML");
                    this.eduContentsEle.innerHTML = resultHTML;
                })
                .then((loaded) =>{
                    if(this.requestedFile == "html/Education/Training/GatesIcs.html"){
                       // alert("in .then(loaded =>");
                        PracticeTruthTableManager.initialize();
                       // PracticeTruthTableManager.create("circuit","NotXor");
                    }
                })
        },

        show: function() { 
         //alert("in EduHTML_Manager this.show()");
           // this.load();
            this.targetEle.classList.replace("transition-1-0","transition-0-1")
            this.targetEle.style.opacity = "1";
        },

        init: function() {
        //alert("in EduHTML_Manager init()");
           /* this.eduNavOneContentsEle = document.getElementById("edu-nav-one-contents-id");
           this.eduNavOneContentsEle.addEventListener("transitionend", eduTransitionHasEnded, false);
            this.eduNavTwoContentsEle = document.getElementById("edu-nav-two-contents-id");
            this.eduNavTwoContentsEle.addEventListener("transitionend", eduTransitionHasEnded, false);
            this.eduNavOneContentsEle.style.opacity = 1;
            this.eduNavTwoContentsEle.style.opacity = 1;*/
         //alert("this.eduNavOneContentsEle.classList = " + this.eduNavOneContentsEle.classList);
            this.eduContentsEle = document.getElementById("edu-contents-id");
        // alert("this.eduContentsEle.classList = " + this.eduContentsEle.classList);
            this.eduContentsEle.addEventListener("transitionend", this.show().bind, false);
            this.eduContentsEle.style.opacity = 1;   /*eduTransitionHasEnded*/
        //    alert("end of EduHTML_Manager init()");
        }
    }
    /* End EduHTML_Manager */


/*
function ceoTransitionHasEnded(){
    //alert("in transitionhasEnded");
    CeoHTML_Manager.ceoFinishTransition();
} */

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
            this.ceoEle.addEventListener("transitionend", this.ceoFinishTransition().bind, false);
        //alert("leaving EduHTML_Manager init()");
        } /* ceoTransitionHasEnded   */
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
        /* this.introductionTabEle.classList.remove("selected-tab");
            alert("after removal"); */
        }
    }

    /* End of CodesTabManager */


    /* Begin QuestionAnswerManager */

            let QuestionAnswerManager = {
                //Properties

                //Methods
                revealAnswer: function(id){
                // alert("in revealAnswer");
                // alert("id =  " + id);
                    document.getElementById(id).classList.remove("answer-hidden");
                }
            }

    /* End QuestionAnswerManager */