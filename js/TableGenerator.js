
/* BEGIN TableGenerator */ 
    let  TableGenerator = {
        //Properties
        //Methods

        createTable: function(tableId, tableData){
            console.log("in this.createTable");
            //console.log("tableId = " + tableId);
           // console.log("tableBodyId = " + tableBodyId);
            if(document.getElementById(tableId)){
                console.log("got document.getElementById(" + tableId + ")");
            }else{
                console.log("did not get document.getElementById(" + tableId + ")");
                return;
            }
            this.tableEle = document.getElementById(tableId);
            this.tableHeadEle = document.createElement("thead");
            //this.tableEle.appendChild(this.tableHeadEle);
            this.tableBodyEle = document.createElement("tbody");
            //this.tableEle.appendChild(this.tableBodyEle);
            //this.tableData = tableData;
            this.createTableSection(tableData.head.row, "head");
            this.createTableSection(tableData.body.row, "body");
            //this.generateTable();
        },

        createTableSection: function(tableDataRow, tableSection){
           // console.log("In createTableSection table section: " + tableSection);
           // console.log("tableDataRow[0].col[0].label = " + tableDataRow[0].col[0].label);
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
                    if(tableSection == "head"){
                        //alert("creating new dataEld for 'th'");
                        const thEle = document.createElement('th');
                        thEle.textContent = colArray[colEle].text;
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
                        //if(colArray[colEle].label.slice(0,5) == "media"){
                        if(colArray[colEle].image){
                       // console.log("adding img");
                            var imgEle = document.createElement('img');
                        //console.log("colArray[colEle].label = " + colArray[colEle].label);
                            imgEle.src = colArray[colEle].image;
                            //console.log("img.src: " + imgEle.src); 
                            imgEle.alt = "Rising Edge";
                            imgEle.classList.add("rising-edge-img");
                            tdEle.appendChild(imgEle);
                        //console.log("imgEle appended");
                        }else{
                            tdEle.textContent = colArray[colEle].text;
                        }
                        //tdEle.textContent = colArray[colEle].label;
                        //console.log("tdEle.textContent = " + tdEle.textContent);
                        //tdEle.appendChild(divEle);
                        tdEle.setAttribute('colSpan', colArray[colEle].colSpan); // colApan
                        tdEle.setAttribute('rowSpan', colArray[colEle].rowSpan); // rowSpan
                        trEle.appendChild(tdEle);
                    }
                }
               // console.log("tableId = " + tableId);
                if(tableSection == "head"){
                    this.tableHeadEle.appendChild(trEle);
                }else{
                    this.tableBodyEle.appendChild(trEle);
                }                                                
            }

            if(tableSection == "head"){
                this.tableEle.appendChild(this.tableHeadEle);
            }else{
                this.tableEle.appendChild(this.tableBodyEle);
            } 
        }
    }
/* END TableGenerator */