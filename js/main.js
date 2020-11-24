'use strict';
{
  const clickMenu=document.getElementById('clickMenu');
  const spMenu=document.getElementById('spMenu');
  clickMenu.addEventListener('click',()=>{
    if(spMenu.classList.contains('displayNone') === true){
      spMenu.classList.remove('displayNone');
    }else{
      spMenu.classList.add('displayNone');
    }
  });
}