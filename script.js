//cahnging of nav  bar on scroll
window.addEventListener('scroll',()=>
{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

// SHOW HIDE NAV BAR  MENU
const menu =document.querySelector(".nav__menu");
const menuBtn =document.querySelector("#open-menu-btn");
const closeBtn =document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click',()=>
{
    menu.style.display ="flex";
    menuBtn.style.display="none"
    closeBtn.style.display="inline-block"
})
// close nav menu
const closeNav =()=>{
    menu.style.display ='none'
    closeBtn.style.display ='none'
    menuBtn.style.display ='inline-block'
}

closeBtn.addEventListener('click',closeNav);
// range slider code
const slider_input = document.getElementById('slider_input'),
      slider_thumb = document.getElementById('slider_thumb'),
      slider_line = document.getElementById('slider_line');

function showSliderValue() {
  slider_thumb.innerHTML = slider_input.value;
  const bulletPosition = (slider_input.value /slider_input.max),
        space = slider_input.offsetWidth - slider_thumb.offsetWidth;

  slider_thumb.style.left = (bulletPosition * space) + 'px';
  slider_line.style.width = slider_input.value + '%';
}

showSliderValue();
window.addEventListener("resize",showSliderValue);
slider_input.addEventListener('input', showSliderValue, false);
