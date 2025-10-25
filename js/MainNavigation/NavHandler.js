
let NavHandler = {
	//Properties
	hidden: true,
//	changingPg: false,
//	navDropDownId: "home-nav-id",
//	selectedPgId: "home-pg-id", 
	navDropDownId: {},
//	navOptsCntnrId: {},
//	mouseActionEle: {},


	//Methods
	mouseLeave: function(){
		console.log("in mouseLeave");
		if(this.hidden == true){ return };
		this.showHide();
	},

	showHide: function() {  //show or hide Navigation selection list
		console.log("in showHide");
		if(this.hidden) {
			console.log("in show dropdown");
		    this.navDropDownId.classList.remove('dbe-hide-dropdown');
			this.hidden = false; 
		//	alert('this.hidden: ' + this.hidden);
		}else{
			console.log("in hide dropdown");
			this.navDropDownId.classList.add('dbe-hide-dropdown');
			this.hidden = true;
		}
	}, //End of Mehod: showHide()

	hideNav: function(){
		document.getElementById('nav-cntnr-id').classList.remove('display-nav')
	    this.hidden = true;
	},

	displayNav: function(){
	//	alert("in displayNav");
	/*	this.navOptsCntnrId.classList.remove('hide-nav'); */
		this.navCntnrId.classList.remove('hide-nav');
	    this.hidden = false;
	},

	init: function(){
		//console.log("in NavHandler.init()");
		this.navDropDownId = document.getElementById("nav-dropdown-id");
	    //console.log("NavHandler.init() finished");
	}


} 