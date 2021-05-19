var container=document.createElement("div");
container.setAttribute("class","container panelbody bg-warning bg");
container.setAttribute("id","container");
document.body.appendChild(container);
var cal=document.createElement("div");
cal.setAttribute("class","heading");
var h2=document.createElement("h2");
h2.setAttribute("class","heading");
h2.innerHTML="calculator";
cal.appendChild(h2);
container.appendChild(cal);

var input1=document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("class","input_txt");
input1.setAttribute("id","inputdata")
container.appendChild(input1);

var row=document.createElement("div");
row.setAttribute("class","rowpad");
row.setAttribute("id","row");
document.getElementById("container").appendChild(row);

var input2=document.createElement("input");
input2.setAttribute("type","text");
input2.setAttribute("class","output_txt");
input2.setAttribute("id","outputdata");
input2.setAttribute("placeholder","0");
container.appendChild(input2);

var row1=document.createElement("div");
row1.setAttribute("class","rowpad");
row1.setAttribute("id","rowp");
document.getElementById("container").appendChild(row1);

var b1=document.createElement("button");
b1.setAttribute("class","b1 btn btn-secondary");
b1.setAttribute("onclick","getdata('1')");
b1.innerHTML="1";
document.getElementById("rowp").appendChild(b1);


var b2=document.createElement("button");
b2.setAttribute("class","b2 btn btn-secondary");
b2.setAttribute("onclick","getdata('2')");
b2.innerHTML="2";
document.getElementById("rowp").appendChild(b2);


var b3=document.createElement("button");
b3.setAttribute("class","b2 btn btn-secondary");
b3.setAttribute("onclick","getdata('3')");
b3.innerHTML="3";
document.getElementById("rowp").appendChild(b3);


var b4=document.createElement("button");
b4.setAttribute("class","b2 btn btn-secondary");
b4.setAttribute("onclick","getdata('+')");
b4.innerHTML="+";
document.getElementById("rowp").appendChild(b4);


var row2=document.createElement("div");
row2.setAttribute("class","rowpad");
row2.setAttribute("id","row2");
document.getElementById("container").appendChild(row2);

var b5=document.createElement("button");
b5.setAttribute("class","b btn btn-secondary");
b5.setAttribute("onclick","getdata('4')");
b5.innerHTML="4";
document.getElementById("row2").appendChild(b5);


var b6=document.createElement("button");
b6.setAttribute("class","b2 btn btn-secondary");
b6.setAttribute("onclick","getdata('5')");
b6.innerHTML="5";
document.getElementById("row2").appendChild(b6);


var b7=document.createElement("button");
b7.setAttribute("class","b2 btn btn-secondary");
b7.setAttribute("onclick","getdata('6')");
b7.innerHTML="6";
document.getElementById("row2").appendChild(b7);


var b8=document.createElement("button");
b8.setAttribute("class","b2 btn btn-secondary");
b8.setAttribute("onclick","getdata('-')");
b8.innerHTML="-";
document.getElementById("row2").appendChild(b8);


var row3=document.createElement("div");
row3.setAttribute("class","rowpad");
row3.setAttribute("id","row3");
document.getElementById("container").appendChild(row3);


var b9=document.createElement("button");
b9.setAttribute("class","btn btn-secondary");
b9.setAttribute("onclick","getdata('7')");
b9.innerHTML="7";
document.getElementById("row3").appendChild(b9);


var b10=document.createElement("button");
b10.setAttribute("class","b2 btn btn-secondary");
b10.setAttribute("onclick","getdata('8')");
b10.innerHTML="8";
document.getElementById("row3").appendChild(b10);


var b11=document.createElement("button");
b11.setAttribute("class","b2 btn btn-secondary");
b11.setAttribute("onclick","getdata('9')");
b11.innerHTML="9";
document.getElementById("row3").appendChild(b11);


var b12=document.createElement("button");
b12.setAttribute("class","b2 btn btn-secondary");
b12.setAttribute("onclick","getdata('*')");
b12.innerHTML="x";
document.getElementById("row3").appendChild(b12);


var row4=document.createElement("div");
row4.setAttribute("class","rowpad");
row4.setAttribute("id","row4");
document.getElementById("container").appendChild(row4);

var b13=document.createElement("button");
b13.setAttribute("class","btn btn-secondary");
b13.setAttribute("onclick","getdata('.')");
b13.innerHTML=".";
document.getElementById("row4").appendChild(b13);


var b14=document.createElement("button");
b14.setAttribute("class","b3 btn btn-secondary");
b14.setAttribute("onclick","getdata('0')");
b14.innerHTML="0";
document.getElementById("row4").appendChild(b14);


var b15=document.createElement("button");
b15.setAttribute("class","b2 btn btn-primary");
b15.setAttribute("onclick","inputvalidation()");
b15.innerHTML="=";
document.getElementById("row4").appendChild(b15);


var b16=document.createElement("button");
b16.setAttribute("class","b2 btn btn-secondary");
b16.setAttribute("onclick","getdata('/')");
b16.innerHTML="/";
document.getElementById("row4").appendChild(b16);


var row5=document.createElement("div");
row5.setAttribute("class","rowpad");
row5.setAttribute("id","row5");
document.getElementById("container").appendChild(row5);


var b17=document.createElement("button");
b17.setAttribute("class","btn btn-secondary");
b17.setAttribute("onclick","getclear()");
b17.innerHTML="DELETE";
document.getElementById("row5").appendChild(b17);

var b18=document.createElement("button");
b18.setAttribute("class","b5 btn btn-danger");
b18.setAttribute("onclick","clearall()");
b18.innerHTML="CLEAR";
document.getElementById("row5").appendChild(b18);





var exp=[];
function getdata(data){
    exp.push(data);
    document.getElementById("inputdata").value=exp.join("");
}
function inputvalidation(){
    var expression=document.getElementById("inputdata").value;
    try{
        document.getElementById("inputdata").value="";
        document.getElementById("outputdata").value=eval(expression);
    }catch(e){
document.getElementById("outputdata").value="invalid expression";
    }
}
function clearall(){
    exp=[];
    document.getElementById("inputdata").value="";
    document.getElementById("outputdata").value="";
}
function getclear(){
    exp.pop();
    document.getElementById("inputdata").value=exp.join("");
}
function percentage(data){
 var exp=[];
    exp.push(data/100);
    document.getElementById("inputdata").value=exp.join("");

}



