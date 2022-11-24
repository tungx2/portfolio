const slideWrapper = document.querySelector('.project-wrapper');
const slide = document.querySelector('.web-slide');
const vSlide = document.querySelector('.video-slide');
const slideImg = document.querySelectorAll('.web-slide figure');
const slideVideo = document.querySelectorAll('.video-slide figure');
const buttonPrev = document.querySelector('.prev');
const buttonPrev2 = document.querySelector('.prev2');
const buttonNext = document.querySelector('.next');
const buttonNext2 = document.querySelector('.next2');

const imgNum = slideImg.length; // 목록 갯수
const videoNum = slideVideo.length; // 목록 갯수
// console.log(imgNum);
const imgWidth = 480; // 이미지 장당 넓이
const margin = 52; // 사이 여백
const viewImg = 2; // 보여줄 갯수
let count = 0;

//감싸는 요소의 넓이 구하기
// slide.style.width = (imgWidth + margin) * imgNum - margin + 'px';
//1620 = (300+30)*5-30

//함수작성
function webSlide(n){
  // slide.style.width = (imgWidth + margin) * imgNum - margin + 'px';
  slide.style.left = -(imgWidth + margin) * n + 'px'; //-330 , -660................................
  count = n;
  // console.log(slide.style.left);
}

// 버튼클릭시 해당 방향으로 움직이게 하기
buttonPrev.addEventListener('click',function(){
  if(count>0){
    webSlide(count-1);
  }else{
    webSlide(imgNum-viewImg);
  }
});
buttonNext.addEventListener('click',function(){
  if(count<imgNum-viewImg){
    webSlide(count+1);
  }else{
    webSlide(0);
  }
});

function videoSlide(n){
  // slide.style.width = (imgWidth + margin) * imgNum - margin + 'px';
  vSlide.style.left = -(imgWidth + margin) * n + 'px'; //-330 , -660................................
  count = n;
  // console.log(vSlide.style.left);
}

buttonPrev2.addEventListener('click',function(){
  if(count>0){
    videoSlide(count-1);
  }else{
    videoSlide(videoNum-viewImg);
  }
});
buttonNext2.addEventListener('click',function(){
  if(count<videoNum-viewImg){
    videoSlide(count+1);
  }else{
    videoSlide(0);
  }
});


function getId(e) {
  
  const idId = document.getElementById(e.getAttribute('id')).getAttribute('id');
  // console.log(idId);

  document.querySelector('.iframe_modal').classList.add('show_modal');

  document.querySelector('.iframe_modal').innerHTML=`<h2>${idId}</h2>
  <video src="https://tungx2.github.io/portfolio_video/${idId}.mp4" autoplay muted controls></video> <i class="fas fa-times"></i>`;

  document.querySelector('i.fas.fa-times').addEventListener('click',function(){
    document.querySelector('.iframe_modal').classList.remove('show_modal');
  })
}

