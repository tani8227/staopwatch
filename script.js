let start=document.getElementById('start');
console.log(start);
let stop=document.getElementById('stop'); 
let dis=document.getElementById('displaytext');
let reset=document.getElementById('reset');
var id;
let sec=0;
let min=0;
let hr=0;
let flag = true; 

// starting the time loop
start.addEventListener('click',function()
{
      start.style.background="#33b249";
      stop.style.background="";
     if(flag==true)
     {
        flag=false;
        id =setInterval(function()
       {
        dis.innerHTML=`${(hr>9?hr+`h`: '0'+hr+`h`)}:${(min>9?min+`m`: '0'+min+`m`)} :${(sec>9?sec+`s`: '0'+sec+`s`)}`;
        if(sec==60)
        {
            sec=0
            min++;
            if(min==59)
            {
                h++;
            }

        }
        sec++;
     },1000);
     }
})
// stoping the time loop
stop.addEventListener('click',function()
{
    if(flag==false)
    {
        flag=true;
        clearInterval(id);
        stop.style.background="#dd7973";
        start.style.background="";
    }

})
// reset the stopwatch
reset.addEventListener('click',function()
{

    sec=0;
    min=0;
    dis.innerHTML=`${(min>9?min+`m`: '0'+min+`m`)} :${(sec>9?sec+`s`: '0'+sec+`s`)}`;
    if(flag==false)
    {
        flag=true;
        clearInterval(id);
        start.style.background="";
      stop.style.background="";
    }
})






