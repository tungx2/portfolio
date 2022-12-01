const projectShort = document.querySelector('.shortcut_project a');
const allLi = document.querySelector('.side_gnb li');
const firstGnb = document.querySelector('.side_gnb li:first-of-type');
const aboutGnb = document.querySelector('.side_gnb li:nth-of-type(2)');
const projectGnb = document.querySelector('.side_gnb li:nth-of-type(4)');
const mySkillGnb = document.querySelector('.side_gnb li:nth-of-type(3)');
const contactGnb = document.querySelector('.side_gnb li:last-of-type');
const easterEgg = document.querySelector('#easter');

projectShort.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:3242
  });
  
});

contactGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:4320
  });
});

projectGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:3242
  });
});

mySkillGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:2160
  });
});

aboutGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:1080
  });
});

firstGnb.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo:0
  });
});

easterEgg.addEventListener('click',function(){
  console.log('설마하고 넣었는데 누르셨군요!! 안녕하세요. 백지훈입니다. 항상 행복하시고 제 포트폴리오 사이트에 방문해주셔서 감사합니다');
});


