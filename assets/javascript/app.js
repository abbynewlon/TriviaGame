
<script>
        //starts game
        $("#to-start-section").click(function(){ 
            if($("#to-start-section").css("display")==="block"){
                $("#to-start-section").css("display", "none");
                $("#quiz-section").css("display", "block");
            }
            event.preventDefault();
        });



        var timerEnded = false;
        var endTime = 0;
        var time = 120;
            //put setTimeout here potentially
        setInterval(function() {
            time--;
            console.log(time);
            $("#timer").text(time);
            if(time <= endTime){
                timerEnded = true; 
            }

        }, 1000);
    
        
        //the form and figuring out the number correct/not correct answeres
        var correct = 0;
        var incorrect = 0;
        var unanswered = 3;
        var answers = [["question-one", "option1"], ["question-two", "option2"], ["question-three", "option2"]]

        $( "form" ).submit(function( event ) {
            console.log( $( this ).serializeArray() );
            checkAgainst($( this ).serializeArray())
            console.log("correct" +correct);
            console.log("incorrect"+incorrect);
            
            $("#end-section").css("display", "none");
            $("#quiz-section").css("display", "none");
            $("#start-section").css("display", "none");
            console.log(unanswered);
            event.preventDefault();
        });

        function checkAgainst(guesses){
            for (let i = 0; i < guesses.length; i++) {
                for (let j = i; j < answers.length ; j++) {
                    if(guesses[i].name === answers[j][0]){
                        unanswered--;
                        if(guesses[i].value === answers[i][j]){
                            correct++;
                            break;
                        } else{
                            incorrect++;
                        }
                    }

                        }
            }
                console.log(didWin());
        }

        function didWin(){
            var results = false;
            if(correctj >1){
                results = true;
            }
            correct = 0;
            unanswered = 3;
            incorrect = 0;
            return results;
        }

        

