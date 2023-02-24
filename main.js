function reset(){
    location.reload();
    document.getElementById('t1').value = '';
    document.getElementById('t2').value = '';
    document.getElementById('t3').value = '';
    document.getElementById('t4').value = '';
    document.getElementById('t5').value = '';
    document.getElementById('t6').value = '';
    document.getElementById('t7').value = '';
    document.getElementById('t8').value = '';
    document.getElementById('t9').value = '';
}

flag = 1;
function t1_func(){
    if(flag === 1){
        document.getElementById("t1").value = 'X';
        document.getElementById("t1").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("t1").value = '0';
        document.getElementById("t1").disabled = true;
        flag=1;
    }
}
function t2_func(){
    if(flag === 1){
        document.getElementById("t2").value = 'X';
        document.getElementById("t2").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("t2").value = '0';
        document.getElementById("t2").disabled = true;
        flag=1;
    }
}
function t3_func(){
    if(flag === 1){
        document.getElementById("t3").value = 'X';
        document.getElementById("t3").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("t3").value = '0';
        document.getElementById("t3").disabled = true;
        flag=1;
    }
}
function t4_func(){
    if(flag === 1){
        document.getElementById("t4").value = 'X';
        document.getElementById("t4").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("t4").value = '0';
        document.getElementById("t4").disabled = true;
        flag=1;
    }
}
function t5_func(){
    if(flag === 1){
        document.getElementById("t5").value = 'X';
        document.getElementById("t5").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("t5").value = '0';
        document.getElementById("t5").disabled = true;
        flag=1;
    }
}
function t6_func(){
    if(flag === 1){
        document.getElementById("t6").value = 'X';
        document.getElementById("t6").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("t6").value = '0';
        document.getElementById("t6").disabled = true;
        flag=1;
    }
}
function t7_func(){
    if(flag === 1){
        document.getElementById("t7").value = 'X';
        document.getElementById("t7").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("t7").value = '0';
        document.getElementById("t7").disabled = true;
        flag=1;
    }
}
function t8_func(){
    if(flag === 1){
        document.getElementById("t8").value = 'X';
        document.getElementById("t8").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("t8").value = '0';
        document.getElementById("t8").disabled = true;
        flag=1;
    }
}
function t9_func(){
    if(flag === 1){
        document.getElementById("t9").value = 'X';
        document.getElementById("t9").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("t9").value = '0';
        document.getElementById("t9").disabled = true;
        flag=1;
    }
}

function myfunc(){
var t1,t2,t3,t4,t5,t6,t7,t8,t9;
t1 = document.getElementById("t1").value;
t2 = document.getElementById("t2").value;
t3 = document.getElementById("t3").value;
t4 = document.getElementById("t4").value;
t5 = document.getElementById("t5").value;
t6 = document.getElementById("t6").value;
t7 = document.getElementById("t7").value;
t8 = document.getElementById("t8").value;
t9 = document.getElementById("t9").value;
    if((t1 == 'x' || t1 == 'X') && (t2 == 'x' || t2 == 'X') && (t3 == 'x' || t3 == 'X')){
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
        document.getElementById("printResult").innerHTML = "player1 Won this match";
    }
    else if((t4 == 'x' || t4 == 'X') && (t5 == 'x' || t5 == 'X') && (t6 == 'x' || t6 == 'X')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
        document.getElementById("printResult").innerHTML = "player1 Won this match";
    }
    else if((t7 == 'x' || t7 == 'X') && (t8 == 'x' || t8 == 'X') && (t9 == 'x' || t9 == 'X')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("printResult").innerHTML = "player1 Won this match";
    }
    else if((t1 == '0') && (t2 == '0') && (t3 == '0')){
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
        document.getElementById("printResult").innerHTML = "player2 Won this match";
    }
    else if((t4 == '0') && (t5 == '0') && (t6 == '0')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
        document.getElementById("printResult").innerHTML = "player2 Won this match";
    }
    else if((t7 == '0') && (t8 == '0') && (t9 == '0')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("printResult").innerHTML = "player2 Won this match";
    }
    else if((t1 == 'x' || t1 == 'X') && (t4 == 'x' || t4 == 'X') && (t7 == 'x' || t7 == 'X')){
        document.getElementById("t2").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
        document.getElementById("printResult").innerHTML = "player1 Won this match";
    }
    else if((t2 == 'x' || t2 == 'X') && (t5 == 'x' || t5 == 'X') && (t8 == 'x' || t8 == 'X')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t9").disabled = true;
        document.getElementById("printResult").innerHTML = "player1 Won this match";
    }
    else if((t3 == 'x' || t3 == 'X') && (t6 == 'x' || t6 == 'X') && (t9 == 'x' || t9 == 'X')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("printResult").innerHTML = "player1 Won this match";
    }
    else if((t1 == '0') && (t4 == '0') && (t7 == '0')){
        document.getElementById("t2").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
        document.getElementById("printResult").innerHTML = "player2 Won this match";
    }
    else if((t2 == '0') && (t5 == '0') && (t8 == '0')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t9").disabled = true;
        document.getElementById("printResult").innerHTML = "player2 Won this match";
    }
    else if((t3 == '0') && (t6 == '0') && (t9 == '0')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("printResult").innerHTML = "player2 Won this match";
    }
    else if((t1 == 'x' || t1 == 'X') && (t5 == 'x' || t5 == 'X') && (t9 == 'x' || t9 == 'X')){
        document.getElementById("t4").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("printResult").innerHTML = "player1 Won this match";
    }
    else if((t3 == 'x' || t3 == 'X') && (t5 == 'x' || t5 == 'X') && (t7 == 'x' || t7 == 'X')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t9").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("printResult").innerHTML = "player1 Won this match";
    }
    else if((t1 == '0') && (t5 == '0') && (t9 == '0')){
        document.getElementById("t4").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("printResult").innerHTML = "player2 Won this match";
    }
    else if((t3 == '0') && (t5 == '0') && (t7 == '0')){
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("printResult").innerHTML = "player1 Won this match";
    }
    else if((t1 == 'X' || t1 == '0') && (t2 == 'X' || t2 == '0') && (t3 == 'X' || t3 == '0') && (t4 == 'X' || t4 == '0') && (t5 == 'X' || t5 == '0') && (t6 == 'X' || t6 == '0') && (t7 == 'X' || t7 == '0') && (t8 == 'X' || t8 == '0') && (t9 == 'X' || t9 == '0')){
        document.getElementById("printResult").innerHTML = "its a tie, lets go for another round";
    } 

}