 const inputBox=document.querySelector('#input-box');  
 const btn=document.querySelector('#Add-btn');
 const tasklist=document.querySelector('.task-list');

 btn.addEventListener('click',function(){

    if(inputBox.value === ''){
        alert('you must write something');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        tasklist.appendChild(li);

        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
     }
     inputBox.value = ''; 
     saveData();
 })
 tasklist.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
      e.target.classList.toggle('checked');
      saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
 },false);


 function saveData(){
    localStorage.setItem('Data',tasklist.innerHTML);
 }
 function showTask(){
    tasklist.innerHTML=localStorage.getItem('Data');
 }
 showTask();