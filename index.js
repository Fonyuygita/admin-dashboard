alert("hello, javascript")

const sideMenu=document.querySelector("aside")

 const menuBtn=document.querySelector(".menu-btn")

  const closeBtn=document.querySelector("#close-btn")


//   background changer btn

const themeChanger=document.querySelector('.theme-toggler');

  menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display='block'
  })

  closeBtn.addEventListener("click", ()=>{
    sideMenu.style.display='none'

  })



//   togggling our theme
themeChanger.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables')
    themeChanger.querySelector('span:nth-child(1)').classList.toggle("active")

    themeChanger.querySelector('span:nth-child(2)').classList.toggle("active")

})
