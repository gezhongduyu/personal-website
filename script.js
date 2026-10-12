// The website is usable without JavaScript. No animation or tracking dependencies.
document.getElementById('year').textContent = new Date().getFullYear();

// Native modal: keyboard focus is contained and Escape closes the exploration.
document.querySelectorAll('[data-open-dialog]').forEach(button=>{const dialog=document.getElementById(button.dataset.openDialog);button.addEventListener('click',()=>{dialog.showModal();document.body.classList.add('dialog-open')});dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');button.focus()})});
