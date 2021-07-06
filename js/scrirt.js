class Calculator  {
    constructor(num){
        this.calcNum = num; 
        this.num1 =  `num1=${this.calcNum}`; 
        this.num2 =  `num2=${this.calcNum}`; 
        this.operator =  `operator=${this.calcNum}`; 
        this.result =  `result =${this.calcNum}`; 

    }
    createElem () {
        let inp1 = document.createElement("input");
        inp1.type = "number";
        inp1.id = this.num1; 
        document.body.append(inp1); 
        ///////////
        let operator = document.createElement("input");
        operator.id = this.operator; 
        document.body.append(operator);
        /////////////////
        let inp2 = document.createElement("input");
        inp2.type = "number";
        inp2.id = this.num2; 
        document.body.append(inp2);

        let btn = document.createElement("input");
        btn.type ="button";
        btn.className = "btn";
        btn.value = "calculate" ;
        ////////////////////////////
        document.body.append(btn);  
        let span = document.createElement("span");
        btn.type ="button";
        document.body.append(span);  
        ///////////////////////////
    
        btn.addEventListener("click", function(event) { 
        if (event.target.className === "btn") { 
            //console.log("salam"); 
            //span.innerHTML = (+inp2.value + +inp1.value); 
           /* if (operator.value == "+") { 
                span.innerHTML = (+inp1.value + +inp2.value);
            }
            else if (operator.value == "-") { 
                span.innerHTML = (+inp1.value - +inp2.value);

            }
            else if (operator.value == "*") { 
                span.innerHTML = (+inp1.value * +inp2.value);

            }
            else if (operator.value == "/") { 
                span.innerHTML = (+inp1.value / +inp2.value);

            }*/
            switch (operator.value) {
                case "+":
                    span.innerHTML = (+inp1.value + +inp2.value);
                    break;
                case "-":
                    span.innerHTML = (+inp1.value - +inp2.value);
                    break;
                case "*":
                    span.innerHTML = (+inp1.value * +inp2.value);
                    break;
                case "/":
                    span.innerHTML = (+inp1.value / +inp2.value);
                    break;                
                default:
                  alert( "Введите только математические операторы /,*,-,+" );
              }

        }
    } )

    }

    


}

let cal = new Calculator (1);
cal.createElem() ;

let asd =new Calculator(2);
asd.createElem();

let asd2 =new Calculator(3);
asd2.createElem();