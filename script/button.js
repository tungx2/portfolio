const projectShort = document.querySelector('.shortcut_project a');

const allLi = document.querySelector('.side_gnb li');
const firstGnb = document.querySelector('.side_gnb li:first-of-type');
const aboutGnb = document.querySelector('.side_gnb li:nth-of-type(2)');
const projectGnb = document.querySelector('.side_gnb li:nth-of-type(4)');
const mySkillGnb = document.querySelector('.side_gnb li:nth-of-type(3)');
const contactGnb = document.querySelector('.side_gnb li:last-of-type');

projectShort.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:3242
  })
  
});


contactGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:4320
  })
});

projectGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:3242
  })
});

mySkillGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollto:2160
  })
});

aboutGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollto:1080
  })
});

firstGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:0
  })
});
                          
