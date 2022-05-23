const buttons = document.querySelectorAll('.btn');
const inputs = Array.from(buttons);
const current_operand = document.getElementById('current-operand');
const previous_operand = document.getElementById('previous-operand');
const button_clear = document.getElementById('btn-clear');
const button_delete = document.getElementById('btn-delete');
let string='';

button_clear.addEventListener('click',clear);
button_delete.addEventListener('click',delete_value);


inputs.forEach((element)=>{ 
    element.addEventListener('click',function(e){
        const value = this.getAttribute('data-value');
        if(isNaN(value) && value != '.'){
            if(value ==='='){
                if(string){
                    computation();
                }
                else{
                    return;
                }
            }
            else{
                if(string === ""){
                    return;
                }
                else{
                    string+=value;
                }
            }
        }
        else{
            string+=value;
        }
        userDisplayUpdate();
    });
});

function delete_value(){      
    string = string.slice(0,-1);
    previous_operand.innerText = previous_operand.innerText.slice(0,-1);
    string = previous_operand.innerText;
    userDisplayUpdate();
}

function clear(){       
    current_operand.innerText = '0';
    previous_operand.innerText='';
    string='';
}


function userDisplayUpdate(){
    current_operand.innerText=string;
}

function computation(){
    try{ 
    previous_operand.innerText = string;
    let total = eval(string);
    string = String(total);
    userDisplayUpdate();
    }
    catch(err){
        alert('Enter Valid Input to get Results');
        string='';
        userDisplayUpdate();
        previous_operand.innerText='';
    }
}