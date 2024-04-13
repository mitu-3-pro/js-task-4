var c = new Date();
var h = c.getHours();
console.log(c);

var d = new Date();
var m = d.getMinutes();
console.log(d);

var j=document.getElementById('input');
var hr=document.getElementById('selecthr');
for(i = h; i<24;i++)
{
    var a=document.createElement('option');
    a.innerHTML=i;
    hr.appendChild(a);
    console.log(hr);
}
function hrchange(){
    var selhour = document.getElementById('selecthr').value;

if(selhour == h){
    var min=document.getElementById('selecmin');
    min.innerHTML="";
    for(i = m; i<60;i++)
    {
        var b=document.createElement('option');
        b.innerHTML=i;
        min.appendChild(b);
        console.log(min);
    }
}
else{
    var min=document.getElementById('selectmin');
    min.innerHTML="";
    for(i = 0; i<60;i++)
    {
        var b=document.createElement('option');
        b.innerHTML=i;
        min.appendChild(b);
        console.log(min);
    }
    if(selecthr.value > 12){
        j.innerHTML = selecthr.value-12 + ':' + selectmin.value + 'pm';
    }
     else{
        j.innerHTML = selecthr.value + ':' + selectmin.value + 'am';
    }
}
inputmin.innerHTML=selectmin.value;
inputhr.innerHTML = selecthr.value;
}

function minchange(){
    inputmin.innerHTML=selectmin.value;
    if(selecthr.value > 12){
        j.innerHTML = selecthr.value-12 + ':' + selectmin.value + 'pm';
     }
     else{
         j.innerHTML = selecthr.value + ':' + selectmin.value + 'am';
     }
}

var selhour = document.getElementById('selecthr').value;

if(selhour == h){
    var min=document.getElementById('selectmin');
    min.innerHTML="";
    for(i = m; i<60;i++)
    {
        var b=document.createElement('option');
        b.innerHTML=i;
        min.appendChild(b);
        console.log(min);
    }
}
else{
    var min=document.getElementById('selectmin');
    min.innerHTML="";
    for(i = 0; i<60;i++)
    {
        var b=document.createElement('option');
        b.innerHTML=i;
        min.appendChild(b);
        console.log(min);
    }
}
inputmin.innerHTML=selectmin.value;
inputhr.innerHTML = selecthr.value;
if(selecthr.value > 12){
    j.innerHTML = selecthr.value-12 + ':' + selectmin.value + 'pm';
 }
 else{
     j.innerHTML = selecthr.value + ':' + selectmin.value + 'am';
 }