document.getElementsByTagName('body')[0]
        var divs = ["Inicio", "Op1", "Op2", "finishDiv"];
        var visibleDivId = null;

        function toggleVisibility(divId) {
            if (visibleDivId === divId) {
                visibleDivId = null;
            } else {
                visibleDivId = divId;
                hideNonVisibleDivs();
            }
        }

        function hideNonVisibleDivs() {
            var i, divId, div;
            for (i = 0; i < divs.length; i++) {
                divId = divs[i];
                div = document.getElementById(divId);
                if (visibleDivId === divId) {
                    div.style.display = "block";
                } else {
                    div.style.display = "none";
                }
            }
        }
        //--------------------------------------------------------
        var nameUser, score, aswUser; 
        var qstAns1 = ["C", "A", "D"]; 
        var qstAns2 = ["B", "C", "C"];

        function startGetName() { 
            var form1 = document.getElementById("formName");  
            form1.onsubmit = function(event) { 
                event.preventDefault();
            }
            nameUser = document.getElementById("name").value; 

            document.getElementById("showName").innerHTML = "Hola, " + nameUser; 
            document.getElementById("PreInicio").style.display = "none";
            document.getElementById("Inicio").style.display = "block";
        }

        function endGame() { 
          var form2 = document.getElementById("qstForm"); 

          form2.onsubmit = function(event) { 
              event.preventDefault();
          }

          aswUser = []; 
          asw1 = document.getElementById("qst1Select").value;
          aswUser.push(asw1);  
          asw2 = document.getElementById("qst2Select").value;
          aswUser.push(asw2); 
          asw3 = document.getElementById("qst3Select").value;
          aswUser.push(asw3); 

          getScore(1);
        }

        function endGame2() { 
          let form3 = document.getElementById("qstFormA"); 
          
          form3.onsubmit = function(event) { 
              event.preventDefault();
          }

          aswUser = []; 
          asw1 = document.getElementById("qst1ASelect").value;
          aswUser.push(asw1);  
          asw2 = document.getElementById("qst2ASelect").value;
          aswUser.push(asw2); 
          asw3 = document.getElementById("qst3ASelect").value;
          aswUser.push(asw3); 

          getScore(2);
        }

        function getScore(sel) {
          var qstAns;

          if(sel === 1) {
              qstAns = qstAns1;
          } else {
              qstAns = qstAns2;
          }

          let i; 
          score = 0; 
          for (i = 0; i < qstAns1.length; i++) {
              crtAsw = qstAns[i]; 
              usrAsw = aswUser[i]; 
              if (usrAsw === crtAsw) {
                score++;
              }
          }

          document.getElementById("finishName").innerHTML = nameUser + " ha finalizado con " + score + " puntos"; 

        }
