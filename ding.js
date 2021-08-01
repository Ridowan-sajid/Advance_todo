const list=document.querySelector('.input-text');
const done=document.querySelectorAll('.done');
const main_two=document.querySelector('.main-two');
const list2=document.querySelector('.show-done');
const dlt=document.querySelectorAll('.dlt');
const search=document.querySelector('.search');
const form2=document.forms['form1'];
const allList=document.querySelectorAll('.li');


//add
const addForm=document.forms['form']
addForm.addEventListener('submit',(e)=>{
 e.preventDefault();

 const value=addForm.querySelector('.input');
 const li=document.createElement('div');
 const name=document.createElement('div');
 const oper=document.createElement('div');
 const done=document.createElement('button');
 const del=document.createElement('button');

 li.classList.add('li')
 name.classList.add('name');
 oper.classList.add('oper');
 done.classList.add('done');
 del.classList.add('dlt');

 oper.appendChild(done);
 oper.appendChild(del);
 li.appendChild(name);
 li.appendChild(oper);
 list.appendChild(li);


 done.textContent+='Done';
 done.style.marginRight="6px";
 del.textContent+='Delete';
 name.textContent+=value.value;
 value.value="";

})


//remove
const remove=(parent,children)=>{
   parent.removeChild(children)
 }

//add in done
const add=(e)=>{
 const li2=document.createElement('div');
 const name=document.createElement('div');

   li2.classList.add('li2');
   name.classList.add('name');

   
   li2.appendChild(name);
   list2.appendChild(li2);
   const result=e.target.parentElement.parentElement.firstElementChild.textContent;
   name.textContent+=result;
}

//done

list.addEventListener('click',(e)=>{
if(e.target.textContent==='Done'){
   add(e);
}
})

//delete

list.addEventListener('click',(e)=>{
 if(e.target.textContent==='Done' || e.target.textContent==='Delete'){
  const parent=e.target.parentElement.parentElement.parentElement;
  const children = e.target.parentElement.parentElement;
  remove(parent,children)
 }
  
})

//search

form2.addEventListener('keyup',(e)=>{
   allList.forEach((a)=>{
    if(a.firstChild.nextSibling.textContent.toLowerCase().includes(search.value.toLowerCase())){
      // const styleDisplay=getComputedStyle(a).display.toString();
      a.style.display='flex';
    }
    else{
      a.style.display='none';
    }
   })
})

//dark/white mood

const btn=document.querySelector('.btn');
const container=document.querySelector('.container');
const main_three=document.querySelector('.main-three');
const text=document.querySelector('.text');

btn.addEventListener('click',(e)=>{
   if(e.target.textContent=='black'){
      btn.parentElement.parentElement.style.backgroundColor='white';
      btn.parentElement.parentElement.style.color='black';
      container.style.color='white';
      main_three.style.color='white';
      text.style.color='black';
      e.target.textContent='white'
      
   }
   else if(e.target.textContent=='white'){
      btn.parentElement.parentElement.style.backgroundColor='hsl(261, 88%, 17%)';
      btn.parentElement.parentElement.style.color='white';
      text.style.color='white';
      e.target.textContent='black'
   }
   
})
