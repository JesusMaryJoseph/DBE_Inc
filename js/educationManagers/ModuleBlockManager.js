
        let ModuleBlockManager = {
            //Properties
            selectedBlock: "memory",
            selectedMode: 0, // 0 => "block mode"    1 => "74LS mode"
            selectionData: {
                memory: {
                    title: "Memory Module",
                    source: ["MemoryBlock.svg", "MemoryBlock74LS.svg"]
                },
                alu: {
                    title: "Arithmetic Logic Unit (ALU) Module",
                    source: ["ALU_Block.svg","ALU_Block74LS.svg"]
                },
                input: {
                    title: "Input Module",
                    source: ["InputBlock.svg","InputBlock74LS.svg"]
                },
                output: {
                    title: "Output Module",
                    source: ["OutputBlock.svg","OutputBlock74LS.svg"]
                },
                programCounter: {
                    title: "Program Counter Module",
                    source: ["PcBlock.svg","PcBlock74LS.svg"]
                },
                control: {
                    title: "Control Module",
                    source: ["ControlBlock.svg","ControlBlock74LS.svg"]
                },
                clock: {
                    title: "Clock Module",
                    source: ["ClockBlock.svg","ClockBlock74LS.svg"]
                },
                bus: {
                    title: "BUS Module",
                    source: ["BusBlock.svg","BusBlock74LS.svg"]
                }
            },
            //Methods
            display: function(target){
              //  alert("this.selectedBlock = " + this.selectedBlock + "  target = " + target);
                document.getElementById(this.selectedBlock + "-button-id").classList.remove("selected-block-button");
                document.getElementById(target + "-button-id").classList.add("selected-block-button");
              //  alert("in between"); 
                let labelEle = document.getElementById("block-label-id");
                let imgEle = document.getElementById("block-img-id");
               // alert("entering switch");
                switch (target){
                    case ("memory"):
                        labelEle.innerHTML = this.selectionData.memory.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.memory.source[this.selectedMode];
                    break;
                    case ("alu"):
                        labelEle.innerHTML =  this.selectionData.alu.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.alu.source[this.selectedMode];
                    break;
                    case ("input"):
                        labelEle.innerHTML = this.selectionData.input.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.input.source[this.selectedMode];
                    break;
                    case ("output"):
                        labelEle.innerHTML =  this.selectionData.output.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.output.source[this.selectedMode];
                    break;
                    case ("programCounter"):
                       // alert("this.selectionData.programCounter.source[this.selectedMode] = " + this.selectionData.programCounter.source[this.selectedMode]);
                        labelEle.innerHTML = this.selectionData.programCounter.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.programCounter.source[this.selectedMode];
                    break;
                    case ("control"):
                        labelEle.innerHTML =  this.selectionData.control.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.control.source[this.selectedMode];
                    break;
                    case ("clock"):
                        labelEle.innerHTML = this.selectionData.clock.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.clock.source[this.selectedMode];
                    break;
                    case ("bus"):
                        labelEle.innerHTML =  this.selectionData.bus.title;
                        imgEle.src = "media/imgs/Architecture/" + this.selectionData.bus.source[this.selectedMode];
                    break;
                    default: alert("No Such Module");
                    
                }
                
                this.selectedBlock = target;
            },
            changeMode: function(){
               // alert("in changeMode");
                let modeBlockEle = document.getElementById("mode-block-id");
                let mode74lsEle = document.getElementById("mode-74ls-id");
                if(this.selectedMode == 0){
                    modeBlockEle.classList.remove("selected-mode");
                    mode74lsEle.classList.add("selected-mode");
                    this.selectedMode = 1;
                }else{
                    modeBlockEle.classList.add("selected-mode");
                    mode74lsEle.classList.remove("selected-mode");
                    this.selectedMode = 0;
                }
                this.display(this.selectedBlock);
            }
        }