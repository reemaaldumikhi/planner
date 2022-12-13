const taskname= document.getElementById("task"); //not completed list id
const inputDate = document.getElementById("date"); //deadline id
const submitbtn= document.getElementById("submit");
var priority = document.querySelector('input[name="priority"]');
document.getElementById('today-date').innerHTML=todayDate();
var checkbtn;
submitbtn.addEventListener('click', function(e){
    e.preventDefault();
    var newli= document.createElement("li");
    newli.className="tasks";

    var datee= document.createElement('span');
    datee.className='datee';

    var img=document.createElement('i');
    img.className='img';

    checkbtn = document.createElement('input');
    checkbtn.type = "checkbox";
    checkbtn.className='checkbox'
    checkbtn.name = "checkbox";

    //check priority========================================
    if(document.getElementById("high").checked )
    {
        newli.setAttribute(
            'style',
            'background-color: #fd8282'
        );
    }
    else if(document.getElementById("medium").checked)
    {
      newli.setAttribute(
        'style',
        'background-color: #f8c98ad8'
      )
    }
    else{
        newli.setAttribute(
            'style',
            'background-color: #f8ed8ad8'
          )
    }
    //=======================================================

    datee.innerHTML=inputDate.value;

     var date2= inputDate.value;
     var today=new Date(date2);
     var date3= new Date();

     var dif= today.getTime()-date3.getTime();
     var b= parseInt(dif/(1000*3600*24));
     //b=Math.floor(b);
     
    if(taskname.value===''||taskname.value===' '){
        alert("please enter task name ");
    }
     else if(inputDate.value=='') {
        alert('please enter deadline')
     }
      else if(document.getElementById("high").checked==false && document.getElementById("medium").checked==false &&
     document.getElementById('low').checked==false ){
        alert('please select priority')
     }
      else if(document.getElementById("category").value=="nothing"){
        alert('please select category');
     }
    
    else 
    { 
     newli.innerHTML= '&nbsp'+taskname.value+"<br>&nbsp;";

     if(b<2 && b>=0)
     {
        img.innerHTML='<span class ="warning"><i class="fa-solid fa-triangle-exclamation id="IMAGE1"></i></span>';
     }
     else if(b<0)
     {
        img.innerHTML='<span class ="expired"><i class="fa-solid fa-circle-xmark" color="red"></i></span>';
     }

     newli.appendChild(datee);
     newli.appendChild(checkbtn);
     newli.appendChild(img);
     document.getElementById("Tasklist").appendChild(newli);

    }   
});

document.getElementById("done-btn").addEventListener('click',function(e){
   var checked=false;
   const completedTask= document.querySelector('.completedList');
   const uncompleted=document.querySelectorAll('.tasks');
   const checks= document.getElementsByName('checkbox');
   var length= checks.length;

   for(var i=0; i<length ; i++){
       if(checks[i].checked)
       {
           checked=true;
           break;
       }
   }
    if(!checked){
        alert("No task selected");
    }
    else{
   uncompleted.forEach(task=>{
       if(task.querySelector("input").checked){
           checked=true;
           task.remove();
           completedTask.appendChild(task).setAttribute('style', 'background-color:#9df4be;');
           task.querySelector('.checkbox').remove();
           task.querySelector('.img').innerHTML='<span class="doneimg"><i class="fa fa-check-circle-o" aria-hidden="true"></i></span>';
       }
     
   }); }
});

function todayDate(){
    var today = new Date();
var date1 =today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ today.getDate();
return date1;
}