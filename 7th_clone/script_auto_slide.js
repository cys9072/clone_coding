    // //스와이퍼 자동재생,네비게이션,페이지네이션
    // var swiper = new Swiper('.swiper-container', {
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   }
    // });
    // //재생, 일시정지 버튼 함수 제이쿼리
    // $('.start').on('click', function () {
    //   swiper.autoplay.start();
    //   return false;
    // })

    // $('.stop').on('click', function () {
    //   swiper.autoplay.stop();
    //   return false;
    // })

    // //width값에 따른 이미지 src 변경 

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          426: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
          },
          1110: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 50,
          },
        }
      });


