const togglebutton=document.getElementsByClassName('bar-button')[0]
const navbarlinks=document.getElementsByClassName('links')[0]

togglebutton.addEventListener('click',()=>{
navbarlinks.classList.toggle('active')
})