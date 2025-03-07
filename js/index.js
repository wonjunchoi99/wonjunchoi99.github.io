window.addEventListener('load', function () {
    const introElement = document.querySelector('.intro');
    const warpElement = document.querySelector('.warp');
    const bodyElement = document.body; // body 요소 선택

    // 스크롤 고정
    window.scrollTo(0, 0);

    // 스크롤 잠금 (인트로 시작 시)
    function lockScroll() {
        bodyElement.classList.add('no-scroll');
    }

    // 스크롤 잠금 해제 (인트로 종료 시)
    function unlockScroll() {
        bodyElement.classList.remove('no-scroll');
    }

    function changeBackground() {
        introElement.classList.add('color-change'); // 배경색 변경
        setTimeout(hideIntro, 1000); // 1초 후에 페이드아웃 시작
    }

    function hideIntro() {
        introElement.classList.add('hidden'); // 서서히 사라지는 효과 적용
        
        // opacity가 1초 동안 0이 된 후 display: none 적용
        setTimeout(() => {
            introElement.style.display = 'none'; // 완전히 숨기기
            warpElement.classList.add('visible'); // warp 표시
            unlockScroll(); // 스크롤 잠금 해제
            warpElement.scrollTo(0,0);

            //////////////////////////////////메인 페이지 이벤트//////////////////////////////////////////////
            function showBestText() {
                const best = document.querySelector('.best');
                best.classList.add('best_show'); // 페이드인 효과 적용
            }

            function furnituretxtshow(){
                const furnituretxt = document.querySelector(".furniture_txt");
                furnituretxt.classList.add('furniture_txt_show');
            }

            function smalltxttop(){
                const smalltxttop = document.querySelector('.smalltxt_top');
                smalltxttop.classList.add('smalltxt_top_show');
            }

            function smalltxtbottom(){
                const smalltxtbottom = document.querySelector('.smalltxt_bottom');
                smalltxtbottom.classList.add('smalltxt_bottom_show');
            }

            function imgmain(){
                const imgmain = document.querySelector('.img_main');
                imgmain.classList.add('img_main_show');
            }

            function more(){
                const more = document.querySelector('.more');
                more.classList.add('more_show');
            }

            function orange(){
                const orange = document.querySelector('.orange');
                orange.classList.add('orange_show');
            }

            function green(){
                const green = document.querySelector('.green');
                green.classList.add('green_show');
            }

            function greenin(){
                const greenin = document.querySelector('.green_in');
                greenin.classList.add('green_in_show');
            }

            function sofatxt(){
                const sofatxt = document.querySelector('.sofa_txt');
                sofatxt.classList.add('sofa_txt_show');
            }
            
            // 기존 intro가 사라진 후 warp가 나타나는 코드 뒤에 추가
            setTimeout(() => {
                showBestText();
            }, 1000); //

            setTimeout(() => {
                furnituretxtshow();
            },1500);

            setTimeout(() => {
                smalltxttop();
            },2000);
            
            setTimeout(() => {
                smalltxtbottom();
            },2500);

            setTimeout(() => {
                imgmain();
            },3000);

            setTimeout(() => {
                more();
            },3000);

            setTimeout(() => {
                orange();
            },3500);

            setTimeout(() => {
                green();
            },4000);

            setTimeout(() => {
                greenin();
            },4500);

            setTimeout(() => {
                sofatxt();
            },5000);


            //////////////////////////////////메인 페이지 이벤트//////////////////////////////////////////////

        }, 1000);
    }

    // 페이지 로드 시 스크롤 잠금 적용
    lockScroll();
    
    
    setTimeout(changeBackground, 2000);
});


//헤더 스크롤 이벤트

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(scrollY > 968){
        header.style.position = "fixed";
    }else{
        header.style.position = "relative";
    }

});


// 헤더 로고 클릭시 상단으로 올라가기

const mainlogo = document.querySelector(".mainlogo");

function scrollTopBtn(){
    let scrollLength = setInterval (function() {
      if(window.scrollY  > 0) {
        window.scrollBy(0, -20);
      } else {
        clearInterval(scrollLength);
      }
    }, 10)
  }

  mainlogo.addEventListener('click', ()=>{
    scrollTopBtn()
  })


// 헤더 메뉴
const menu_move = document.querySelector(".menubox");
const hamberger = document.querySelector(".navi");
const menu_close = document.querySelector(".close");

hamberger.addEventListener("click" , () => {

    menu_move.classList.add("menu_move");
    hamberger.classList.add("navidelete");
    menu_close.style.display = "block";

});

menu_close.addEventListener("click" , () => {

    menu_move.classList.remove("menu_move");
    hamberger.classList.remove("navidelete");
    menu_close.style.display = "none";

});

document.addEventListener("DOMContentLoaded", function () {
    const mainNavItems = document.querySelectorAll(".main_navi > a");

    mainNavItems.forEach((navItem) => {
        const parent = navItem.parentElement;
        const submenu = parent.querySelector(".submenu_navi");
        const imagePreview = parent.querySelector(".image_preview");

        navItem.addEventListener("mouseenter", () => {
            if (window.innerWidth > 500) {
                if (submenu) submenu.style.display = "block";
                if (imagePreview) imagePreview.style.display = "block";
            } else {
                if (submenu) submenu.style.display = "block";
            }
        });

        parent.addEventListener("mouseleave", () => {
            if (submenu) submenu.style.display = "none";
            if (imagePreview) imagePreview.style.display = "none";
        });
    });
});

// 롤링 배너 복제본 생성
let roller = document.querySelector('.banner_1_img');
roller.id = 'rolling1'; // 아이디 부여

let clone = roller.cloneNode(true);
clone.id = 'roller2';

document.querySelector('.banner_1').appendChild(clone);

roller.classList.add('original');
clone.classList.add('clone');

// 롤링 배너 복제본 생성
let roller2 = document.querySelector('.banner_2_img');
roller2.id = 'rolling1'; // 아이디 부여

let clone2 = roller2.cloneNode(true);
clone2.id = 'roller2';

document.querySelector('.banner_2').appendChild(clone2);

roller2.classList.add('original2');
clone2.classList.add('clone2');

// 롤링 배너 복제본 생성
let roller3 = document.querySelector('.banner_3_img');
roller3.id = 'rolling1'; // 아이디 부여

let clone3 = roller3.cloneNode(true);
clone3.id = 'roller2';

document.querySelector('.banner_3').appendChild(clone3);

roller3.classList.add('original3');
clone3.classList.add('clone3');


// 스크롤 확인

// window.addEventListener('scroll', () => {
//     console.log( window.scrollY )
// });


window.addEventListener('scroll' , () => {

    const second_slide = document.querySelector('.second_slide');


    if(scrollY > 500){
        second_slide.classList.add('scroll');

    }else{
        second_slide.classList.remove('scroll');
    }

});

// 두번쨰 슬라이드
document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category_btn");
    const sliders = document.querySelectorAll(".slider");
    const rangeInput = document.querySelector("#input");

    let activeSlider = document.querySelector(".slider"); // 기본 활성 슬라이더
    let currentIndex = 0; // 현재 슬라이드 인덱스
    const itemsPerSlide = 4; // 보이는 슬라이드 개수

    // 카테고리 버튼 클릭 이벤트
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {

            // 모든 버튼에서 active 클래스 제거
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // 클릭된 버튼에 active 클래스 추가
            this.classList.add('active');

            const category = this.getAttribute("data-category");

            // 모든 슬라이더 숨기기
            sliders.forEach(slider => {
                slider.style.display = "none";
            });

            // 해당 카테고리에 맞는 슬라이더 찾기
            activeSlider = [...sliders].find(slider => 
                slider.getAttribute("data-category") === category
            );

            if (activeSlider) {
                activeSlider.style.display = "flex"; // 선택한 슬라이더 보이기
            }

            currentIndex = 0; // 첫 번째 슬라이드로 초기화
            updateSliderPosition();
        });
    });

    // 슬라이드 이벤트 (수평 이동)
    function handleWheel(event) {
        if (window.innerWidth <= 500) return; // 화면 크기가 500px 이하이면 이벤트를 중지

        event.preventDefault();
        if (event.deltaY > 0) {
            moveSlide(1);
        } else {
            moveSlide(-1);
        }
    }

    // 마우스 휠 이벤트 리스너
    document.querySelector(".slider_container").addEventListener("wheel", handleWheel);

    // 슬라이드 이동 함수
    function moveSlide(direction) {
        if (!activeSlider) return;

        const filteredSlides = activeSlider.querySelectorAll(".slide-item");
        const maxIndex = Math.ceil(filteredSlides.length / itemsPerSlide) - 1;

        if (direction === 1 && currentIndex < maxIndex) {
            currentIndex++;
        } else if (direction === -1 && currentIndex > 0) {
            currentIndex--;
        }
        updateSliderPosition();
    }

    // 슬라이드 위치 업데이트
    function updateSliderPosition() {
        if (!activeSlider) return;

        activeSlider.style.transform = `translateX(${-currentIndex * 100}%)`;
        updateRangeInput();
    }

    // range input 업데이트
    function updateRangeInput() {
        rangeInput.max = 1; // 2단계 슬라이더 (0과 1)
        rangeInput.value = currentIndex;
    }

    // range input 변경 시 슬라이드 이동
    rangeInput.addEventListener("input", function () {
        currentIndex = parseInt(this.value);
        updateSliderPosition();
    });

    // 초기 설정
    updateSliderPosition();
});


//////// 1024 슬라이드

document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category_btn");
    const girds = document.querySelectorAll(".gird");
    const rangeInput = document.querySelector("#input2");

    let activeGird = document.querySelector(".gird"); // 기본 활성 gird
    let currentIndex = 0; // 현재 슬라이드 인덱스
    const itemsPerGird = 4; // 보이는 gird 개수

    // 카테고리 버튼 클릭 이벤트
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {

            // 모든 버튼에서 active 클래스 제거
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // 클릭된 버튼에 active 클래스 추가
            this.classList.add('active');

            const category = this.getAttribute("data-category");

            // 모든 gird 숨기기
            girds.forEach(gird => {
                gird.style.display = "none";
            });

            // 해당 카테고리에 맞는 gird 찾기
            activeGird = [...girds].find(gird => 
                gird.getAttribute("data-category") === category
            );

            if (activeGird) {
                activeGird.style.display = "grid"; // 선택한 gird 보이기
            }

            currentIndex = 0; // 첫 번째 gird로 초기화
            updateGirdPosition();
        });
    });

    // 마우스 휠 이벤트 (수평 이동)
    document.querySelector(".gird_container").addEventListener("wheel", function (event) {
        event.preventDefault();
        if (event.deltaY > 0) {
            moveGird(1);
        } else {
            moveGird(-1);
        }
    });

    // gird 이동 함수
    function moveGird(direction) {
        if (!activeGird) return;

        const filteredGirds = activeGird.querySelectorAll(".gird-item");
        const maxIndex = Math.ceil(filteredGirds.length / itemsPerGird) - 1;

        if (direction === 1 && currentIndex < maxIndex) {
            currentIndex++;
        } else if (direction === -1 && currentIndex > 0) {
            currentIndex--;
        }
        updateGirdPosition();
    }

    // gird 위치 업데이트
    function updateGirdPosition() {
        if (!activeGird) return;

        activeGird.style.transform = `translateX(${-currentIndex * 53}%)`;
        updateRangeInput();
    }

    // range input 업데이트
    function updateRangeInput() {
        rangeInput.max = 1; // 2단계 gird (0과 1)
        rangeInput.value = currentIndex;
    }

    // range input 변경 시 gird 이동
    rangeInput.addEventListener("input", function () {
        currentIndex = parseInt(this.value);
        updateGirdPosition();
    });

    // 초기 설정
    updateGirdPosition();
});

//
// svg 길이 측정
//   var cl = document.querySelector("#Line2");
//   function circleLine(el) {
//       var line = el.getTotalLength();
//       el.style.strokeDasharray = line;
//       el.style.strokeDashoffset = line;

//       console.log(line)
//   }

//   circleLine(cl);

//


window.addEventListener("scroll", () => {

    const offset = (element) => element.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;

    const isometric = document.querySelector(".isometric");
    const cross = document.querySelector(".cross");

    const room1 = document.querySelector(".bed");
    const room2 = document.querySelector(".office");
    const room3 = document.querySelector(".toilet");
    const room4 = document.querySelector(".kitchen");
    const room5 = document.querySelector(".livingroom");


    const point1 = offset(isometric);

    if (window.innerWidth > 500) {
        if (window.scrollY > point1) {
            isometric.classList.add("opacity_1");

            setTimeout(() => {
                cross.classList.add("crossactive");
            }, 500);

            setTimeout(() => {
                room1.classList.add("bedactive");

                setTimeout(() => {
                    room2.classList.add("officeactive");
                }, 500);

                setTimeout(() => {
                    room3.classList.add("toiletactive");
                }, 700);

                setTimeout(() => {
                    room4.classList.add("kitchenactive");
                }, 900);

                setTimeout(() => {
                    room5.classList.add("livingroomactive");
                }, 1100);
            }, 1500);
        };

    }else if (window.innerWidth <= 500){
        isometric.classList.add("opacity_1");
    };
});

// // 세번째 호버시

// const cross1 = document.querySelector('.cross1');
// const cross2 = document.querySelector('.cross2');
// const cross3 = document.querySelector('.cross3');
// const cross4 = document.querySelector('.cross4');
// const cross5 = document.querySelector('.cross5');

// const room1 = document.querySelector('.bed > span');
// const room2 = document.querySelector('.office > span');
// const room3 = document.querySelector('.toilet > span');
// const room4 = document.querySelector('.kitchen > span');
// const room5 = document.querySelector('.livingroom > span');

// cross1.addEventListener('mouseover', () => {

//     room1.style.opacity = '1';
// });

// cross1.addEventListener('mouseout', () => {

//     room1.style.opacity = '0';
// });

// cross2.addEventListener('mouseover', () => {

//     room2.style.opacity = '1';
// });

// cross2.addEventListener('mouseout', () => {

//     room2.style.opacity = '0';
// });

// cross3.addEventListener('mouseover', () => {

//     room3.style.opacity = '1';
// });

// cross3.addEventListener('mouseout', () => {

//     room3.style.opacity = '0';
// });

// cross4.addEventListener('mouseover', () => {

//     room4.style.opacity = '1';
// });

// cross4.addEventListener('mouseout', () => {

//     room4.style.opacity = '0';
// });

// cross5.addEventListener('mouseover', () => {

//     room5.style.opacity = '1';
// });

// cross5.addEventListener('mouseout', () => {

//     room5.style.opacity = '0';
// });

// ///

// room1.addEventListener('mouseover', () => {

//     cross1.style.transform = 'scale, (0.9)';
// });

// room1.addEventListener('mouseout', () => {

//     cross1.style.transform = 'scale, 1';
// });

// 네번째 스크롤 이벤트

window.addEventListener('scroll', () => {
    const maintitle = document.querySelector('.maintitle');
    const subtitle = document.querySelector('.subtitle');
    const fourvideo = document.querySelector('.fourvideo > video');
    const sopa = document.querySelector('.sopa');
    const house1 = document.querySelector('.house1');
    const main_txt = document.querySelector('.main_txt');
    const sub_txt = document.querySelector('.sub_txt');
    const house2 = document.querySelector('.house2');
    const txt2 = document.querySelector('.txt2');
    const house3 = document.querySelector('.house3');
    const house4 = document.querySelector('.house4');
    const house5 = document.querySelector('.house5');
    const house6 = document.querySelector('.house6');
    const house7 = document.querySelector('.house7');
    const house8 = document.querySelector('.house8');
    const house9 = document.querySelector('.house9');
    const txt3 = document.querySelector('.txt3');
    const house10 = document.querySelector('.house10');
    const txt4 = document.querySelector('.txt4');
    const sopa_more = document.querySelector('.sopa_more');
    const stand_more = document.querySelector('.stand_more');
    const table_more = document.querySelector('.table_more');

    const scrollPos = scrollY; // 현재 스크롤 위치

    const point1 = maintitle.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point2 = fourvideo.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point3 = house1.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point4 = house2.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point5 = txt2.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point6 = house3.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point7 = house4.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point8 = house5.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point9 = house6.getBoundingClientRect().top + window.scrollY - window.innerHeight;
    const point10 = house8.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point11 = house9.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point12 = txt4.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;




    if(scrollPos > point1){
        maintitle.classList.add('mainmoving');
        setTimeout(() => {
            subtitle.classList.add('subtitlemoving');
        },1000);
    }else{
        maintitle.classList.remove('mainmoving');
        maintitle.style.transition = 'ease-in-out 0.5s';
        subtitle.classList.remove('subtitlemoving');
        subtitle.style.transition = 'ease-in-out 0.5s';
    };

    if(scrollPos > point2){
        fourvideo.classList.add('videomoving');
        setTimeout(() => {
            sopa.classList.add('sopamove');
        },1000);
    }else{
        fourvideo.classList.remove('videomoving');
        fourvideo.style.transition = 'ease-in-out 0.5s';
        sopa.classList.remove('sopamove');
        sopa.style.transition = 'ease-in-out 0.5s';
    };

    if(scrollPos > point3){
        house1.classList.add("img1move");
        setTimeout(() => {
            main_txt.classList.add('main_txtmove');
        },500);
        setTimeout(() => {
            sub_txt.classList.add('sub_txtmove');
        },1000);
    }else{
        house1.classList.remove("img1move");
        house1.style.transition = 'ease-in-out 0.5s';
        main_txt.classList.remove('main_txtmove');
        main_txt.style.transition = 'ease-in-out 0.5s';
        sub_txt.classList.remove('sub_txtmove');
        sub_txt.style.transition = 'ease-in-out 0.5s';
    };

    if(scrollPos > point4){
        house2.classList.add('house2move');
        setTimeout(() => {
            sopa_more.classList.add('sopa_more_move');
        },1000);
    }else{
        house2.classList.remove('house2move');
        house2.style.transition = 'ease-in-out 0.5s';
        sopa_more.classList.remove('sopa_more_move');
        sopa_more.style.transition = 'ease-in-out 0.5s';
    };

    if(scrollPos > point5){
        txt2.classList.add('txt2move');
    }else{
        txt2.classList.remove('txt2move');
        txt2.style.transition = 'ease-in-out 0.5s';
    };

    if(scrollPos > point6){
        house3.classList.add('house3move');
    }else{
        house3.classList.remove('house3move');
        house3.style.transition = 'ease-in-out 0.5s';
    };
    
    if(scrollPos > point7){
        house4.classList.add('house4move');
    }else{
        house4.style.transition = 'ease-in-out 0.5s';
        house4.classList.remove('house4move');
    };

    if(scrollPos > point8){
        house5.classList.add('house5move');
        setTimeout(() => {
            stand_more.classList.add('stand_more_move');
        },1500);
    }else{
        house5.classList.remove('house5move');
        house5.style.transition = 'ease-in-out 0.5s';
        stand_more.classList.remove('stand_more_move');
        stand_more.style.transition = 'ease-in-out 0.5s';
    };

    if(scrollPos > point9){
        house6.classList.add('house6move');
    }else{
        house6.classList.remove('house6move');
        house6.style.transition = 'ease-in-out 0.5s';
    };

    if(scrollPos > point10){
        house7.classList.add('house7move');
        setTimeout(() => {
            house8.classList.add('house8move');
        },500);
    }else{
        house7.classList.remove('house7move');
        house7.style.transition = 'ease-in-out 0.5s';
        house8.classList.remove('house8move');
        house8.style.transition = 'ease-in-out 0.5s';
    };
    
    if(scrollPos > point11){
        house9.classList.add('house9move');
        setTimeout(() => {
            txt3.classList.add('txt3move');
        },500);
        setTimeout(() => {
            house10.classList.add('house10move');
        },1000);
        setTimeout(() => {
            table_more.classList.add('table_more_move');
        },1500);
    }else{
        house9.classList.remove('house9move');
        house9.style.transition = 'ease-in-out 0.5s';
        txt3.classList.remove('txt3move');
        txt3.style.transition = 'ease-in-out 0.5s';
        house10.classList.remove('house10move');
        house10.style.transition = 'ease-in-out 0.5s';
        table_more.classList.remove('table_more_move');
    };

    if(scrollPos > point12){
        txt4.classList.add('txt4move');
    }else{
        txt4.classList.remove('txt4move');
        txt4.style.transition = 'ease-in-out 0.5s';
    };
});


// 네번째 십자가 호버 시

const hover_cross = document.querySelector('.sopa_more');
const sopa_box = document.querySelector('.sopa_more_box');

hover_cross.addEventListener('mouseover' , () => {

    sopa_box.classList.add('sopa_more_box_moving');

});

hover_cross.addEventListener('mouseout' , () => {

    sopa_box.classList.remove('sopa_more_box_moving');

});

const hover_cross2 = document.querySelector('.stand_more');
const stand_box = document.querySelector('.stand_more_box');

hover_cross2.addEventListener('mouseover' , () => {

    stand_box.classList.add('stand_more_box_moving');

});

hover_cross2.addEventListener('mouseout' , () => {

    stand_box.classList.remove('stand_more_box_moving');

});

const hover_cross3 = document.querySelector('.table_more');
const table_box = document.querySelector('.table_more_box');

hover_cross3.addEventListener('mouseover' , () => {

    table_box.classList.add('stand_more_box_moving');

});

hover_cross3.addEventListener('mouseout' , () => {

    table_box.classList.remove('stand_more_box_moving');

});

// 다섯번째

window.addEventListener('scroll', () => {

    const five = document.querySelector(".five_warp");
    const five_video = document.querySelector('.five_video');
    const five_img1 = document.querySelector('.five_img1');
    const five_img2 = document.querySelector('.five_img2');
    const five_img3 = document.querySelector('.five_img3');
    const box_white = document.querySelector('.box_white');
    const box_white2 = document.querySelector('.box_white2');
    const box_white3 = document.querySelector('.box_white3');

    const point1 = five.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point2 = five_img1.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const point3 = box_white.getBoundingClientRect().top + window.scrollY - window.innerHeight;

    if(scrollY > point1){
        five.classList.add('five_warp_black');

        setTimeout(() => {
            five_video.classList.add('video_move');
        },3000);

    }else{
        five.classList.remove('five_warp_black');
        five.style.transition = 'ease-in-out 3s';
        five_video.classList.remove('video_move');
        five_video.style.transition = 'ease-in-out 0.5s';
    };


    if(scrollY > point2){
        five_img1.classList.add('img_opacity');

        setTimeout(() => {
            five_img2.classList.add('img_opacity');
        },500)

        setTimeout(() => {
            five_img3.classList.add('img_opacity');
        },1000)

    }else{
        five_img1.classList.remove('img_opacity');
        five_img1.style.transition = 'ease-in-out 0.5s';
        five_img2.classList.remove('img_opacity');
        five_img2.style.transition = 'ease-in-out 0.5s';
        five_img3.classList.remove('img_opacity');
        five_img3.style.transition = 'ease-in-out 0.5s';
    };

    if(scrollY > point3){

  
        box_white.classList.add('box_white_down');

        setTimeout(() => {
            box_white2.classList.add('box_white_up');
        },500);

        setTimeout(() => {
            box_white3.classList.add('box_white_right');
        },1000);

    }else{
        box_white.classList.remove('box_white_down');
        box_white.style.transition = 'ease-in-out 0.5s';
        box_white2.classList.remove('box_white_up');
        box_white2.style.transition = 'ease-in-out 0.5s';
        box_white3.classList.remove('box_white_right');
        box_white3.style.transition = 'ease-in-out 0.5s';
    };

});


// 롤링 배너 복제본 생성
let roller4 = document.querySelector('.banner_white_img');
roller4.id = 'rolling1'; // 아이디 부여

let clone4 = roller4.cloneNode(true);
clone4.id = 'roller2';

document.querySelector('.banner_white').appendChild(clone4);

roller4.classList.add('originalwb');
clone4.classList.add('clonewb');


// 다섯번째 호버 시
const box_white = document.querySelector('.box_white');

box_white.addEventListener(('mouseover') , () => {

    const hoverimg = document.querySelector('.hover_img');

    hoverimg.style.display = 'block';

});

box_white.addEventListener(('mouseout') , () => {

    const hoverimg = document.querySelector('.hover_img');

    hoverimg.style.display = 'none';

});

const box_white2 = document.querySelector('.box_white2');

box_white2.addEventListener(('mouseover') , () => {

    const hoverimg2 = document.querySelector('.hover_img2');

    hoverimg2.style.display = 'block';

});

box_white2.addEventListener(('mouseout') , () => {

    const hoverimg2 = document.querySelector('.hover_img2');

    hoverimg2.style.display = 'none';

});

const box_white3 = document.querySelector('.box_white3');

box_white3.addEventListener(('mouseover') , () => {

    const hoverimg3 = document.querySelector('.hover_img3');

    hoverimg3.style.display = 'block';

});

box_white3.addEventListener(('mouseout') , () => {

    const hoverimg3 = document.querySelector('.hover_img3');

    hoverimg3.style.display = 'none';

});


// 여섯번쨰

window.addEventListener('scroll', () => {

    const six1 = document.querySelector('.six1_img');
    const six2 = document.querySelector('.six2_img');
    const six3 = document.querySelector('.six3_box');
    const six4 = document.querySelector('.six4_img');
    const six5 = document.querySelector('.six5_img');


    const point1 = six1.getBoundingClientRect().top + window.scrollY - window.innerHeight;
    const point2 = six3.getBoundingClientRect().top + window.scrollY - window.innerHeight;
    const point3 = six4.getBoundingClientRect().top + window.scrollY - window.innerHeight;


    if (scrollY > point1) {
        six1.classList.add('six_up_move');

        setTimeout(() => {
            six2.classList.add('six_up_move');
        }, 500);

    } else {
        six1.classList.remove('six_up_move');
        six1.style.transition = 'ease-in-out 0.5s';
        six2.classList.remove('six_up_move');
        six2.style.transition = 'ease-in-out 0.5s';
    };

    if (scrollY > point2) {
        six3.classList.add('six_up_move');
    } else {
        six3.classList.remove('six_up_move');
        six3.style.transition = 'ease-in-out 0.5s';
    };


    if (scrollY > point3) {
        six4.classList.add('six_up_move');
        setTimeout(() => {
            six5.classList.add('six_up_move');
        }, 500);
    } else {
        six4.classList.remove('six_up_move');
        six4.style.transition = 'ease-in-out 0.5s';
        six5.classList.remove('six_up_move');
        six5.style.transition = 'ease-in-out 0.5s';
    };

});

// six3 호버시 
const six3 = document.querySelector('.six3');

six3.addEventListener('mouseover' , () => {

    const cloud = document.querySelector('.cloud');
    const cloud_hover = document.querySelector('.cloud_hover');

    cloud.style.opacity = '0';
    cloud.style.transition = 'opacity, 0.1s';

    cloud_hover.style.opacity = '1';
    cloud_hover.style.transition = 'opacity, 0.1s';

});

six3.addEventListener('mouseout' , () => {

    const cloud = document.querySelector('.cloud');
    const cloud_hover = document.querySelector('.cloud_hover');

    cloud.style.opacity = '1';
    cloud.style.transition = 'opacity, 0.1s';

    cloud_hover.style.opacity = '0';
    cloud_hover.style.transition = 'opacity, 0.1s';

});
