/* 
/   PracticeTruthTableManager   10   -  560
/   TableManager                564 - 650
/   DataSheetTableManager       655 - 730  
/   
*/  



/* BEGIN PracticeTruthTableManager */

      //  alert("in this.createData"); 
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
      "NotXorOrNand":{"title": "The NotXorOrNand Circuit","inputs": 2,"outputs": 4,"solutions01":[[1,1,0,0],[1,0,0,1],[1,1,0,1],[0,1,1,0]],"solutionsTF":[["T","T","F","F"],["T","F","F","T"],["T","T","F","T"],["F","T","T","F"]],"img":"media/imgs/basicLogicGates/NotXorOrNand_wPQ.svg"},
      "NandNotNand":{"title": "The NandNotNand Circuit","inputs": 2,"outputs": 3,"solutions01":[[1,1,1,0],[1,0,1,0],[0,1,0,1]],"solutionsTF":[["T","T","T","F"],["T","F","T","F"],["F","T","F","T"]],"img":"media/imgs/basicLogicGates/NandNotNand_wPQ.svg"},
      "NorNandNxor":{"title": "The NorNandNxor Circuit","inputs": 2,"outputs": 3,"solutions01":[[1,0,0,0],[1,1,1,0],[1,0,0,1]],"solutionsTF":[["T","F","F","F"],["T","T","T","F"],["T","F","F","T"]],"img":"media/imgs/basicLogicGates/NorNandNxor_wPQ.svg"},
      "AndOrNandNxorNandNor":{"title": "The AndOrNandNxorNandNor Circuit","inputs": 2,"outputs": 6,"solutions01":[[0,0,0,1],[0,1,1,1],[1,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]],"solutionsTF":[["F","F","F","T"],["F","T","T","T"],["T","T","T","F"],["T","F","F","T"],["T","F","F","T"],["F","T","T","F"]],"img":"media/imgs/basicLogicGates/AndOrNandNxorNandNor_wPQ.svg"},
      "NorNorNor":{"title": "The NorNorNor Circuit","inputs": 2,"outputs": 3,"solutions01":[[1,0,1,0],[1,1,0,0],[0,0,0,1]],"solutionsTF":[["T","F","T","F"],["T","T","F","F"],["F","F","F","T"]],"img":"media/imgs/basicLogicGates/NorNorNor_wPQ.svg"},
      "TwoToFourDecoder":{"title": "The TwoToFourDecoder Circuit","inputs": 2,"outputs": 6,"solutions01":[[1,0,1,0],[1,1,0,0],[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],"solutionsTF":[["T","F","T","F"],["T","T","F","F"],["F","T","T","T"],["T","F","T","T"],["T","T","F","T"],["T","T","T","F"]],"img":"media/imgs/basicLogicGates/TwoToFourDecoder_wPQ.svg"},
      "AndAndOrW3Inputs":{"title": "The AndAndOrW3Inputs Circuit","inputs": 3,"outputs": 3,"solutions01":[[0,0,0,1,0,1,0,1],[0,0,0,1,0,1,0,1],[0,0,0,1,0,1,0,1]],"solutionsTF":[["F","F","F","T","F","T","F","T"],["F","F","F","F","F","T","F","T"],["F","F","F","T","F","T","F","T"]],"img":"media/imgs/basicLogicGates/AndAndOr_w3InPQ.svg"}
      }`;

//alert("after let dataString =");
let JsonTableDataSet = JSON.parse(dataString);


let PracticeTruthTableManager = {
    //Properties
    dataCreated: false,
    tablesInitialized: false,

    basicTitleEle: {},
    basicImgEle: {},
    basicTheadEle: {},
    basicTbodyEle: {},
   // basicSolutionTheadEle: {},
   // basicSolutionTbodyEle: {},

    circuitTitleEle: {},
    circuitImgEle: {},
    circuitTheadEle: {},
    circuitTbodyEle: {},
    dataTypeFtEle: {},
    dataType01Ele: {},

    tableSelection: "basic",
    gateLabelEle: {},
    gateName: "AND",
    circuitImgEle: {},
    circuitName: "NotXor",
    /*completeDataSet: {},*/
    basicDataEle: {},
    circuitDataEle: {},
    practiceTableEle: {},
    dataSelector: 0,  // 0: "ft" values     1: "01" values
    inputOutputValues: [["F","T"],["0","1"]],
                        
    //Methods

    initialize: function(){
        //alert("in PracticeTruthTableManager.initialize");
        this.createData();
        this.dataCreated = true;
        this.update("basic", document.getElementById("and-label-id"));
        this.update("circuit", document.getElementById("NotXor"));
        //alert("start adding addEventLinstener to each input");
       /* const inputTags = document.getElementsByTagName("input");
        for(var i = 0; i < inputTags.length; i++){
            // alert("in forEach loop");
                inputTags[i].addEventListener("keyup", this.handleKeyUp.bind(this));
        } */                    
        this.tablesInitialized = true;
    },

    changeDataType: function(radioValues){
        //alert("radioValues = " + radioValues);
        if((radioValues == "01") && this.dataSelector == 1){return}
        if((radioValues == "ft") && this.dataSelector == 0){return}
        //alert("after auto return");
        if(radioValues == "01"){
            this.dataSelector = 1;
        }else{
            this.dataSelector = 0;
        }
        //alert("this.dataSelector = " + this.dataSelector);
        /*if(newDataSelector != this.dataSelector){
            const inputTags = document.getElementsByTagName("input");
            alert("# of inputTags = " + inputTags.length);
            for(var i = 0; i < inputTags.length; i++){
                if(newDataSelector == 0){
                    inputTags[i].type = "text";
                }else{
                    inputTags[i].type = "number";
                }
                alert("i = " + i);
            }                     
        }*/
        if(this.dataSelector == 1){
            //alert("in 01");
            this.dataTypeFtEle.classList.remove("selected-data-type");
            this.dataType01Ele.classList.add("selected-data-type");
            //alert("this.dataSelector = " + this.dataSelector);
        }else{
            this.dataTypeFtEle.classList.add("selected-data-type");
            this.dataType01Ele.classList.remove("selected-data-type");
           //alert("this.dataSelector = " + this.dataSelector);
        }
        this.update("basic", this.gateLabelEle);
        this.update("circuit", this.circuitImgEle);
    },

    showSolution(table){
       // alert("in showSolution & table = " + table);
        if(table == "basic"){
            //get all elements with class "basic-solution-value"
            let solutionElements = document.getElementsByClassName("basic-solution-cell");
           // alert("solutionElements.length = " + solutionElements.length);
            for(var i = 0; i < solutionElements.length; i++){
                solutionElements[i].classList.remove("hide-basic-solution");
            }
        }else{
            let solutionElements = document.getElementsByClassName("circuit-solution-cell");
            for(var i = 0; i < solutionElements.length; i++){
                solutionElements[i].classList.remove("hide-circuit-solution");
            }
        }
    },

    handleKeyUp(event){
       //alert("event.target.value = " + event.target.value);
        const setTF = new Set(["t","f","T","F"]);
        const set01 = new Set (["0","1"]);
       // alert("setTF has 'g' = " + setTF.has('g'));
        //alert("setTF has 't' = " + setTF.has('t'));
        //alert("this.dataSelector = " + this.dataSelector);
        if(this.dataSelector == 0){
            //alert("setTF.has(event.target.value = " + setTF.has(event.target.value));
            if(!(setTF.has(event.target.value))){
                alert("Please input 't','f','T' or 'F'");
            }
        }else{
            //alert("set01.has(event.target.value = " + set01.has(event.target.value));
            if(!(set01.has(event.target.value))){
                alert("Please input '0' or '1'");
            }
        }
    },

    update: function(tableSelection, thisElement){
        //console.log("tableSelection = " + tableSelection + "   thisElement = " +  thisElement);    
        //alert("in update");
       // alert("tableSelection = " + tableSelection);
        //alert("thisElement.id = " + thisElement.id);
        let gateCircuitName = "";
         this.tableSelection = tableSelection;
         if(tableSelection == "basic"){
            //alert("thisElement.textContent = " + thisElement.textContent);
           // alert("thisElement.id = " + thisElement.id);
            //remove class: "selected-gate" from this.gateLabelEle 
            this.gateLabelEle.classList.remove("selected-gate");
            this.gateLabelEle = thisElement;
            this.gateLabelEle.classList.add("selected-gate");
            this.gateName = this.gateLabelEle.textContent;   
            gateCircuitName = this.gateName;
             //alert("in BASIC this.practiceTableEle");
             this.practiceTableEle = document.getElementById("basic-table-id");
            // this.solutionTableEle = document.getElementById("basic-solution-table-id");
         }else{
            //alert("circuitid = " + thisElement.id);
            //remove class: "circuit-selected" from this.circuitLabelEle 
            this.circuitImgEle.classList.remove("circuit-selected");
            // set up new circuit
            this.circuitImgEle = thisElement;
            this.circuitImgEle.classList.add("circuit-selected");
            this.circuitName = this.circuitImgEle.id;   
            gateCircuitName = this.circuitName;
            this.practiceTableEle = document.getElementById("circuit-table-id");
            // this.solutionTableEle = document.getElementById("circuit-solution-table-id");
            //this.circuitName = gateCircuitName;
         }
         //alert("before switch gateCircuitName = " + gateCircuitName);
         switch (gateCircuitName){  //gateCircuitName){
            case "NOT":
                this.basicDataEle = JsonTableDataSet.Not;
                break;
            case "AND":
                this.basicDataEle = JsonTableDataSet.And;
                break;
            case "OR":
                this.basicDataEle = JsonTableDataSet.Or;
                break;
            case "XOR":
                this.basicDataEle = JsonTableDataSet.Xor;
                break;
            case "NAND": 
                this.basicDataEle = JsonTableDataSet.Nand;
                break;
            case "NOR":
                this.basicDataEle = JsonTableDataSet.Nor;
                break;
            case "NXOR":
                this.basicDataEle = JsonTableDataSet.Nxor;
                break;
            case "NotXor":
               // alert("in case NotXor");
                this.circuitDataEle = JsonTableDataSet.NotXor;
                break;
            case "AndNotOr":
                this.circuitDataEle = JsonTableDataSet.AndNotOr;
                break;
            case "OrAndXor":
                this.circuitDataEle = JsonTableDataSet.OrAndXor;
                break;
            case "NotAndXorOr":
                this.circuitDataEle = JsonTableDataSet.NotAndXorOr;
                break;
            case "NotXorOrNand":
                this.circuitDataEle = JsonTableDataSet.NotXorOrNand;
                break;
            case "NandNotNand": 
                this.circuitDataEle = JsonTableDataSet.NandNotNand;
                break;
            case "NorNandNxor":
                this.circuitDataEle = JsonTableDataSet.NorNandNxor;
            break;
            case "AndOrNandNxorNandNor":
                this.circuitDataEle = JsonTableDataSet.AndOrNandNxorNandNor;
                break;
            case "NorNorNor":
                this.circuitDataEle = JsonTableDataSet.NorNorNor;
                break;
            case "TwoToFourDecoder":
                this.circuitDataEle = JsonTableDataSet.TwoToFourDecoder;
                break;
            case "AndAndOrW3Inputs":
                this.circuitDataEle = JsonTableDataSet.AndAndOrW3Inputs;
                break;
            default: alert("no Data Source for this entry");
         }
            this.updateTableHeads();
            this.updateTableBodys();
    },

    updateTableHeads: function(){
         //alert("setting Array data");
        //alert("in updateTableHeads");
        let tHeadsEle = {basic: this.basicTheadEle,circuit: this.circuitTheadEle};
        let dataElement = {basic:this.basicDataEle,circuit:this.circuitDataEle};
        let circuitColSpan = this.circuitDataEle.inputs + 1 + 2*this.circuitDataEle.outputs;
        let titleColSpan = {basic:5,circuit:circuitColSpan};
        let titleId = {basic:"basic-title-id",circuit:"circuit-title-id"};
        let headings = ["Inputs", "Design Circuitry", "Outputs"]; /* Digital Circuit */
        //alert("data set");

        if(this.tableSelection == "basic"){
            while(this.basicTheadEle.firstChild){
                //alert("removing firstChild");
                this.basicTheadEle.removeChild(this.basicTheadEle.firstChild);
            }
        }else{
            while(this.circuitTheadEle.firstChild){
                //alert("removing firstChild");
                this.circuitTheadEle.removeChild(this.circuitTheadEle.firstChild);
            }
        }
        //alert("setting title");
       //for(table = tableStart; table < tableEnd; table++){
        let titleRow = {};
        if(this.tableSelection == "basic"){
            titleRow = tHeadsEle.basic.insertRow();
            const titleRowTh = document.createElement('th');
            //alert("dataElement.basic.title = " + dataElement.basic.title);
            titleRowTh.innerHTML = dataElement.basic.title;
            titleRowTh.colSpan = titleColSpan.basic;
            titleRowTh.id = titleId.basic;
            titleRow.appendChild(titleRowTh);
        }else{
            titleRow = tHeadsEle.circuit.insertRow();
            const titleRowTh = document.createElement('th');
           // alert("dataElement.circuit.title = " + dataElement.circuit.title);
            titleRowTh.innerHTML = dataElement.circuit.title;
            titleRowTh.colSpan = titleColSpan.circuit;
            titleRowTh.id = titleId.circuit;
            titleRow.appendChild(titleRowTh);
        }
       //}
        //alert("setting Headings"); 
        // Input/Circuit/Output headings Row
            let colSpanValues = {basic:[this.basicDataEle.inputs, 1, 2*this.basicDataEle.outputs],circuit:[this.circuitDataEle.inputs, 1, 2*this.circuitDataEle.outputs]};
           // let maxCol = [3,1,3,1]; // 3 headings for "Practice Tables" and 1 heading for "Solution Tables"
      //  alert("setting Input/Circuit/Output");
       //for(table = tableStart; table < tableEnd; table++){
       let headingsRow = {};
        if(this.tableSelection == "basic"){
            headingsRow = tHeadsEle.basic.insertRow();
        }else{
            headingsRow = tHeadsEle.circuit.insertRow();
        }
            for(var col = 0; col < 3; col++){
                const thTag = document.createElement('th');
                thTag.innerHTML = headings[col];
                if(col == 1){
                    thTag.rowSpan = 2;
                }
                //alert("thTag.innerHTML = " + thTag.innerHTML);
                if(this.tableSelection == "basic"){
                    thTag.colSpan = colSpanValues.basic[col];
                }else{
                    thTag.colSpan = colSpanValues.circuit[col];
                }
                headingsRow.appendChild(thTag);
            }
        //}
        
        // Input/Output(labels)
        
       // alert("setting Input/Output(labels)");
        //for(table = tableStart; table < tableEnd; table++){
            let inputsOutputsRow = {};
            let selectedDataElement = {}; 
            if(this.tableSelection == "basic"){
                inputsOutputsRow = tHeadsEle.basic.insertRow();
                selectedDataElement = dataElement.basic;
            }else{
                inputsOutputsRow = tHeadsEle.circuit.insertRow();
                selectedDataElement = dataElement.circuit;
            }
           
            for(var col = selectedDataElement.inputs - 1; col >= 0 ; col--){
                const thTag = document.createElement('th');
                thTag.innerHTML = "P<sub>" + col + "</sub>";
                inputsOutputsRow.appendChild(thTag);
            } 
            
            for(var col = 0; col < selectedDataElement.outputs; col++){
                const thTag = document.createElement('th');
                thTag.innerHTML = "Q<sub>" + col + "</sub>";
                thTag.colSpan = 2;
                inputsOutputsRow.appendChild(thTag);
            } 
       // } 
    },


    updateTableBodys: function(){
        //alert("in updateTableBodys");
        // Clear previous data in Tbody
        if(this.tableSelection == "basic"){
            while(this.basicTbodyEle.firstChild){
               //alert("removing 'basic' firstChild");
                this.basicTbodyEle.removeChild(this.basicTbodyEle.firstChild);
            }
        }else{
            while(this.circuitTbodyEle.firstChild){
                //alert("removing firstChild");
                this.circuitTbodyEle.removeChild(this.circuitTbodyEle.firstChild);
            }
        }
       // alert("previous Tbody data cleared");

        let tBodysEle = {basic: this.basicTbodyEle, circuit: this.circuitTbodyEle};
        let imgId = {basic: "basic-img-id", circuit: "circuit-img-id"};
        // create tableBody Input (NOT for Solution's Tables)
        //alert("begin fill of Table Body");
        let numberInputCols = {}; 
        let inputOutputValue = "";
        let selectedTbodyEle = {};
        if(this.tableSelection == "basic"){
            numberInputCols = this.basicDataEle.inputs;
            selectedTbodyEle = tBodysEle.basic;
           // alert("numberInputCols(basic) = " + numberInputCols);
        }else{
            numberInputCols = this.circuitDataEle.inputs;
            selectedTbodyEle = tBodysEle.circuit;
           // alert("numberInputCols(circuit) = " + numberInputCols);
        }
        let numberOfRows = 2**numberInputCols;
        //alert("Data Set and numberOfRows = " + numberOfRows);
        for(var row = 0; row < numberOfRows; row++){
            //alert("row =  " + row);
            let tdText = "";
            const tableBodyRow = selectedTbodyEle.insertRow();
            // alert("after const tableBodyRow");
            for(var col = numberInputCols - 1; col >= 0 ; col--){
               // alert("col = " + col);
                const td = document.createElement("td");
                // alert("col = " + col );
                if( col == 0 ){
                    //alert("in P0");
                        inputOutputValue = this.inputOutputValues[this.dataSelector][row % 2];
                    //alert("inputOutputValue = " + inputOutputValue);
                }else{
                    if( col == 2 ){
                       // alert("in P2");
                        //alert("Math.floor(row / 4) = " + parseInt(Math.floor(row / 4))); 
                        inputOutputValue = this.inputOutputValues[this.dataSelector][Math.floor(row / 4)];
                       // alert("inputOutputValue =  " + inputOutputValue);
                    }else{
                   // alert("in P1"); 
                        inputOutputValue = this.inputOutputValues[this.dataSelector][Math.floor(row / 2) % 2];
                    //alert("inputOutputValue = " + inputOutputValue);
                    } 
                }
                tdText = document.createTextNode(inputOutputValue);
                td.appendChild(tdText);
                //alert("appendingChild to col = " + col);
                tableBodyRow.appendChild(td);
            }

            // Adding Image to row 0 with rowSpan = numberOfRows
            let selectedDataEle = {};
            if(row == 0){
                // add img col with rowSpan = # of rows
                let tdCellImg = tableBodyRow.insertCell();   
                tdCellImg.rowSpan = numberOfRows;  
                let tdImg = document.createElement('img');
                if(this.tableSelection == "basic"){
                    tdImg.id = imgId.basic;
                    selectedDataEle = this.basicDataEle; 
                   // numberInputCols = this.basicDataEle.inputs;
                }else{
                    tdImg.id = imgId.circuit;
                    selectedDataEle = this.circuitDataEle;
                }
                tdImg.src = selectedDataEle.img;
                tdCellImg.appendChild(tdImg);
            }

            // Adding Outputs to "basic" and "circuit" Tables
            let numberOutputCols = {};
            if(this.tableSelection == "basic"){
                numberOutputCols = 2*this.basicDataEle.outputs;
            }else{
                numberOutputCols = 2*this.circuitDataEle.outputs;
                //alert("numberOutput circuit Cols = " + numberOutputCols);
            }
           // alert("numberOutputCols = " + numberOutputCols);
            let tdSolutionText = "";
           // let tdSolutionCell = {};
          // alert("numberOutputCols = " + numberOutputCols);
            for(var col = 0; col < numberOutputCols ; col++){
               // alert("col = " + col);
                const tdOutputCell = tableBodyRow.insertCell();
                if(col%2 == 0){
                   // alert("adding input for col = " +  col);
                    const inputEle = document.createElement("input");
                    if(this.dataSelector == 0){
                        inputEle.type = "text";
                    }else{
                        inputEle.type = "number";
                    }
                    inputEle.addEventListener("keyup", this.handleKeyUp.bind(this));
                    inputEle.maxLength = 1;
                    inputEle.max = 1;
                    inputEle.min = 0;
                    tdOutputCell.appendChild(inputEle);
                }else{    //alert("col = " + col);
                 //   alert("this.basicDataEle.solutionsTF[row] = " + this.basicDataEle.solutionsTF[row]);
                    if(this.tableSelection == "basic"){
                        if(this.dataSelector == 0){
                            tdSolutionText = document.createTextNode(this.basicDataEle.solutionsTF[row]);
                        }else{
                            tdSolutionText = document.createTextNode(this.basicDataEle.solutions01[row]);
                        }
                    }else{
                        //alert("adding solution value for circuit for col = " + col);
                        if(this.dataSelector == 0){
                            //alert("this.circuitDataEle.solutionsTF[col][row] = " + this.circuitDataEle.solutionsTF[parseInt(col/2)][row]);
                            tdSolutionText = document.createTextNode(this.circuitDataEle.solutionsTF[parseInt(col/2)][row]);
                        }else{
                            tdSolutionText = document.createTextNode(this.circuitDataEle.solutions01[parseInt(col/2)][row]);
                            //alert("this.circuitDataEle.solutions01[col][row] = " + this.circuitDataEle.solutions01[parseInt(col/2)][row]);
                        }
                    }
                    tdOutputCell.appendChild(tdSolutionText);
                    if(this.tableSelection == "basic"){
                        tdOutputCell.setAttribute("class", "basic-solution-cell hide-basic-solution");
                    }else{
                        tdOutputCell.setAttribute("class", "circuit-solution-cell hide-circuit-solution");
                    }
                     //alert("after appendChild");  
                }
               // alert("inputEle appended col = " + col);
                // now add Solution Value
               /* if(this.tableSelection == "basic"){
                   //alert("setting solutionsTF to td row = " + row);
                   //alert("this.basicDataEle.solutionsTF(row) = " + this.basicDataEle.solutionsTF[row]);
                    tdSolutionCell = tableBodyRow.insertCell(); 
                    tdSolutionText = document.createTextNode(this.basicDataEle.solutionsTF[row]);
                    tdSolutionCell.appendChild(tdText);
                }else{
                    tdSolutionText = document.createTextNode(this.circuitDataEle.solutionsTF[col][row]);
                    tdSolutionCell.appendChild(tdSolutionText);
                }*/
               // tableBodyRow.append(td);
            }
            
            
        }
        
      //  this.updateSolutionTableBody(1,2**this.basicDataEle.inputs,this.basicDataEle.outputs);
     //   this.updateSolutionTableBody(3,2**this.circuitDataEle.inputs,this.circuitDataEle.outputs);
        
    },

    createData: function(){
      //  alert("in this.createData"); 
       /* let dataString = `{"Not":{"title": "The NOT Logic Gate","inputs": 1,"outputs": 1,"solutions01":[1,0],"solutionsTF":["T","F"],"img":"media/imgs/basicLogicGates/NOT_wPQ.svg"},
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
                           "NotXorOrNand":{"title": "The NotXorOrNand Circuit","inputs": 2,"outputs": 4,"solutions01":[[1,1,0,0],[1,0,0,1],[1,1,0,1],[0,1,1,0]],"solutionsTF":[["T","T","F","F"],["T","F","F","T"],["T","T","F","T"],["F","T","T","F"]],"img":"media/imgs/basicLogicGates/NotXorOrNand_wPQ.svg"},
                           "NandNotNand":{"title": "The NandNotNand Circuit","inputs": 2,"outputs": 3,"solutions01":[[1,1,1,0],[1,0,1,0],[0,1,0,1]],"solutionsTF":[["T","T","T","F"],["T","F","T","F"],["F","T","F","T"]],"img":"media/imgs/basicLogicGates/NandNotNand_wPQ.svg"},
                           "NorNandNxor":{"title": "The NorNandNxor Circuit","inputs": 2,"outputs": 3,"solutions01":[[1,0,0,0],[1,1,1,0],[1,0,0,1]],"solutionsTF":[["T","F","F","F"],["T","T","T","F"],["T","F","F","T"]],"img":"media/imgs/basicLogicGates/NorNandNxor_wPQ.svg"},
                           "AndOrNandNxorNandNor":{"title": "The AndOrNandNxorNandNor Circuit","inputs": 2,"outputs": 6,"solutions01":[[0,0,0,1],[0,1,1,1],[1,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]],"solutionsTF":[["F","F","F","T"],["F","T","T","T"],["T","T","T","F"],["T","F","F","T"],["T","F","F","T"],["F","T","T","F"]],"img":"media/imgs/basicLogicGates/AndOrNandNxorNandNor_wPQ.svg"},
                           "NorNorNor":{"title": "The NorNorNor Circuit","inputs": 2,"outputs": 3,"solutions01":[[1,0,1,0],[1,1,0,0],[0,0,0,1]],"solutionsTF":[["T","F","T","F"],["T","T","F","F"],["F","F","F","T"]],"img":"media/imgs/basicLogicGates/NorNorNor_wPQ.svg"},
                           "TwoToFourDecoder":{"title": "The TwoToFourDecoder Circuit","inputs": 2,"outputs": 6,"solutions01":[[1,0,1,0],[1,1,0,0],[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],"solutionsTF":[["T","F","T","F"],["T","T","F","F"],["F","T","T","T"],["T","F","T","T"],["T","T","F","T"],["T","T","T","F"]],"img":"media/imgs/basicLogicGates/TwoToFourDecoder_wPQ.svg"},
                           "AndAndOrW3Inputs":{"title": "The AndAndOrW3Inputs Circuit","inputs": 3,"outputs": 3,"solutions01":[[0,0,0,1,0,1,0,1],[0,0,0,1,0,1,0,1],[0,0,0,1,0,1,0,1]],"solutionsTF":[["F","F","F","T","F","T","F","T"],["F","F","F","F","F","T","F","T"],["F","F","F","T","F","T","F","T"]],"img":"media/imgs/basicLogicGates/AndAndOr_w3InPQ.svg"}
                           }`;
        JsonTableDataSet = JSON.parse(dataString);*/
        //alert("after JSON.parse");
        this.gateLabelEle = document.getElementById("and-label-id");
        this.circuitImgEle = document.getElementById("not-xor-img-id")
        this.basicTheadEle = document.getElementById("basic-thead-id");
        this.basicTbodyEle = document.getElementById("basic-tbody-id");
        //this.basicSolutionTheadEle = document.getElementById("basic-solution-thead-id");
        //this.basicSolutionTbodyEle = document.getElementById("basic-solution-tbody-id");

     /*	this.circuitTitleEle = document.getElementById("circuit-title-id");*/
        this.dataTypeFtEle = document.getElementById("data-type-ft-id");
        this.dataType01Ele = document.getElementById("data-type-01-id");
        this.circuitImgEle = document.getElementById("NotXor");
        this.circuitTheadEle = document.getElementById("circuit-thead-id");
        this.circuitTbodyEle = document.getElementById("circuit-tbody-id");
        this.circuitSolutionTheadEle = document.getElementById("circuit-solution-thead-id");
        this.circuitSolutionTbodyEle = document.getElementById("circuit-solution-tbody-id");
        
        this.dataCreated = "true";
        //alert("this.dataSelector = " + this.dataSelector);
        //alert("data created");
    }
}
/* END PracticeTruthTableManager */   



/* BEGIN TableManager */  
    let TableManager = {
        //Properties

        //Methods
        generateTable: function(tableType, tableId){
        /* alert("lsType = " + lsType); 
            EduHTML_Manager.load("html/Education/Resources/Data_Sheets/LS107/LS107_Data_Sheet.html", "edu-article");*/
        },
        
        createComplexTable: function(data, containerId) {
            const container = document.getElementById(containerId);
            if (!container) {
                console.error("Container element not found.");
                return;
            }

            // Create table element
            const table = document.createElement('table');

            // Set table attributes (e.g., border, class)
            table.setAttribute('border', '1');
            table.classList.add('my-custom-table');

                // Create table header (thead)
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');

                // Add header cells (th) with attributes
                for (const key in data[0]) {
                    const th = document.createElement('th');
                    th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
                    th.setAttribute('scope', 'col'); // Accessibility attribute
                    headerRow.appendChild(th);
                }
                thead.appendChild(headerRow);
                table.appendChild(thead);

                // Create table body (tbody)
                const tbody = document.createElement('tbody');

                // Iterate through data to create rows and cells
                data.forEach(rowData => {
                    const tr = document.createElement('tr');

                    // Add data cells (td) with attributes
                    for (const key in rowData) {
                        const td = document.createElement('td');
                        td.textContent = rowData[key];
                        // Example of conditional attribute setting
                        if (key === 'status' && rowData[key] === 'Inactive') {
                            td.style.color = 'red';
                        }
                        tr.appendChild(td);
                    }
                    tbody.appendChild(tr);
                });
                table.appendChild(tbody);

        // Append the table to the container
        container.appendChild(table);
    },

// Example data
/*const tableData = [
    { name: 'Alice', age: 30, status: 'Active' },
    { name: 'Bob', age: 24, status: 'Inactive' },
    { name: 'Charlie', age: 35, status: 'Active' }
];

// Call the function to create the table
createComplexTable(tableData, 'tableContainer');
3. Explanation:
    • createComplexTable(data, containerId) function: Takes data (an array of objects) and the ID of the container element.
    • document.createElement(): Creates new HTML elements (e.g., <table>, <thead>, <tr>, <th>, <tbody>, <td>).
    • element.setAttribute(name, value): Sets an attribute for an HTML element (e.g., border, scope).
    • element.classList.add(): Adds a CSS class to an element for styling.
    • element.textContent: Sets the text content of an element.
    • parent.appendChild(child):*/

        init: function(){
            //alert("in TableManager.init()");
        }
    }


/* END TableManager */  




/* BEGIN DataSheetTableManager */ 
    let DataSheetTableManager = {
        //Properties
        //Methods

        createTable: function(tableData, tableHeadId, tableBodyId){
           // console.log("in this.createTable");
           // console.log("tableHeadId = " + tableHeadId);
           // console.log("tableBodyId = " + tableBodyId);
            //this.tableData = tableData;
            //this.tableHeadId = tableHeadId;
            //this.tableBodyId = tableBodyId;
            //if (!this.initialized){this.init(); this.initialized = true}
            this.createTableSection(tableData.head.row, tableHeadId, "th");
            this.createTableSection(tableData.body.row, tableBodyId, "td");
            //this.generateTable();
        },

        createTableSection: function(tableDataRow, tableId, dataType){
            //console.log("In createTableSection tableId: " + tableId + "dataType = " + dataType);
            //console.log("tableDataRow[0].col[0].label = " + tableDataRow[0].col[0].label);
            if(document.getElementById(tableId)){
                //console.log("got document.getElementById(tableId");
            }else{
               // console.log("did not get document.getElementById(tableId");
            }
            //console.log("tableHead = " + document.getElementById("tableId"));
            //alert("set Table Data");
            //alert("tableId = " + tableId);
            //let headRowArray = this.tableData.LS00.head.row;
            let rowArray = tableDataRow;
            nmbrRows = rowArray.length;
            //alert("nmbrRows = " + nmbrRows);
           // this.nmbrHeadRows = this.tableData.LS00.head.row.length;
            //alert("allCols[0].label = " + allCols[0].label);
           // for (const rowEle of JsonTableData74LS00.head.row) {
            for (let rowEle = 0; rowEle < nmbrRows; rowEle++) {
                const trEle = document.createElement('tr');
                //alert("rowEle = " + rowEle);
                //console.log("rowEle = " + rowEle);
                let colArray = rowArray[rowEle].col;
                let nmbrCols = rowArray[rowEle].col.length;
                //alert("nmbr of cols = " + nmbrCols);
                for(let colEle = 0; colEle < nmbrCols; colEle++) {
                    //console.log("colEle = " + colEle);
                    //alert("colEle = " + colEle);
                    //alert("dataType = " + dataType);
                    //let tdhLabel = rowArray[rowEle].col[colEle].label;
                    if(dataType == "th"){
                        //alert("creating new dataEld for 'th'");
                        const thEle = document.createElement('th');
                        thEle.textContent = colArray[colEle].label;
                        //console.log("thEle.textContent = " + thEle.textContent);
                        thEle.setAttribute('colSpan', colArray[colEle].colSpan); // colApan
                        thEle.setAttribute('rowSpan', colArray[colEle].rowSpan); // rowSpan
                        trEle.appendChild(thEle);
                        //console.log("thEle.appended to trEle");
                    }else{
                       // alert("creating new dataEld for 'td'");
                        //const divEle = document.createElement('div');
                        //divEle.textContent = colArray[colEle].label;
                        const tdEle = document.createElement('td');
                        if(colArray[colEle].label.slice(0,5) == "media"){
                        console.log("in add img");
                            const imgEle = document.createElement('img');
                        console.log("colArray[colEle].label = " + colArray[colEle].label);
                            imgEle.src = "media/imgs/Rising-Falling-Edge.svg"; //colArray[colEle].label;
                            imgEle.alt = "Rising Edge";
                            tdEle.appendChild(imgEle);
                            console.log("imgEle appended");
                        }else{
                            tdEle.textContent = colArray[colEle].label;
                        }
                        tdEle.textContent = colArray[colEle].label;
                        //console.log("tdEle.textContent = " + tdEle.textContent);
                        //tdEle.appendChild(divEle);
                        tdEle.setAttribute('colSpan', colArray[colEle].colSpan); // colApan
                        tdEle.setAttribute('rowSpan', colArray[colEle].rowSpan); // rowSpan
                        trEle.appendChild(tdEle);
                    }
                }
               // console.log("tableId = " + tableId);
                document.getElementById(tableId).appendChild(trEle);
                                                                 
            }
        }
    }
/* END DataSheetTableManager */

