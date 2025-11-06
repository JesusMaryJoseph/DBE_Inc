
    let QuestionAnswerManager = {
        //Properties

        //Methods
        revealAnswer: function(id){
        // alert("in revealAnswer");
        // alert("id =  " + id);
            document.getElementById(id).classList.remove("answer-hidden");
        }
    }
