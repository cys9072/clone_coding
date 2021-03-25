    //스와이퍼 자동재생,네비게이션,페이지네이션
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      //재생, 일시정지 버튼 함수 제이쿼리
      $('.start').on('click', function () {
        swiper.autoplay.start();
        return false;
      })
  
      $('.stop').on('click', function () {
        swiper.autoplay.stop();
        return false;
      })
