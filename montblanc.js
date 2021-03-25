       // 헤드 네비 열리고 닫히는 기능
    function openNav() {
        document.getElementById("mobile_navi_ham").style.display ="none";
        document.getElementById("mobile_navi_clo").style.display ="block";
        document.getElementById("bottom_navi").style.width ="110%";
        
        }
        
        function closeNav() {
        document.getElementById("mobile_navi_ham").style.display ="block";
        document.getElementById("mobile_navi_clo").style.display ="none";
        document.getElementById("bottom_navi").style.width ="0%";
        }

    // 네비 안에 각각 메뉴 열리고 닫히는 기능 + 제이쿼리
        
        $("p.title").on('click', function() {
            $(this).next(".con").slideToggle(100);
        });
        
        $("span.title_").on('click', function() {
            $(this).next(".con").slideToggle(100);
        });

    //스와이퍼 자동재생,네비게이션,페이지네이션 메인
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
    
    // 4개 아티클 섹션 열고 닫기
    function openArticle() {
        document.getElementById("pro_open_bt").style.display ="none";
        document.getElementById("pro_close_bt").style.display ="block";
        document.getElementById("pro_imgs").style.transform ="translatex(-85%)";
        document.getElementById("pro_imgs").style.zIndex ="1";
        document.getElementById("pro_imgs_text").style.display ="block";
        document.getElementById("pro_imgs_text").style.transform ="translatex(10%)";
        document.getElementById("pro_imgs_text").style.zIndex = "0";

        
        
        }
        
        function closeArticle() {
            document.getElementById("pro_close_bt").style.display ="none";
            document.getElementById("pro_open_bt").style.display ="block";
            document.getElementById("pro_imgs").style.transform ="translatex(0%)";
            document.getElementById("pro_imgs_text").style.display ="none";
            
        }
        
        function openArticle_2() {
            document.getElementById("pro_open_bt_2").style.display ="none";
            document.getElementById("pro_close_bt_2").style.display ="block";
            document.getElementById("pro_imgs_2").style.transform ="translatex(-85%)";
            document.getElementById("pro_imgs_2").style.zIndex ="1";
            document.getElementById("pro_imgs_text_2").style.display ="block";
            document.getElementById("pro_imgs_text_2").style.transform ="translatex(10%)";
            document.getElementById("pro_imgs_text_2").style.zIndex = "0";
            
            
            }
            
            function closeArticle_2() {
                document.getElementById("pro_close_bt_2").style.display ="none";
                document.getElementById("pro_open_bt_2").style.display ="block";
                document.getElementById("pro_imgs_2").style.transform ="translatex(0%)";
                document.getElementById("pro_imgs_text_2").style.display ="none";
                
            }
        
            function openArticle_3() {
                document.getElementById("pro_open_bt_3").style.display ="none";
                document.getElementById("pro_close_bt_3").style.display ="block";
                document.getElementById("pro_imgs_3").style.transform ="translatex(-85%)";
                document.getElementById("pro_imgs_3").style.zIndex ="1";
                document.getElementById("pro_imgs_text_3").style.display ="block";
                document.getElementById("pro_imgs_text_3").style.transform ="translatex(10%)";
                document.getElementById("pro_imgs_text_3").style.zIndex = "0";
                
                
                }
                
                function closeArticle_3() {
                    document.getElementById("pro_close_bt_3").style.display ="none";
                    document.getElementById("pro_open_bt_3").style.display ="block";
                    document.getElementById("pro_imgs_3").style.transform ="translatex(0%)";
                    document.getElementById("pro_imgs_text_3").style.display ="none";
                    
                }
        
                function openArticle_4() {
                    document.getElementById("pro_open_bt_4").style.display ="none";
                    document.getElementById("pro_close_bt_4").style.display ="block";
                    document.getElementById("pro_imgs_4").style.transform ="translatex(-85%)";
                    document.getElementById("pro_imgs_4").style.zIndex ="1";
                    document.getElementById("pro_imgs_text_4").style.display ="block";
                    document.getElementById("pro_imgs_text_4").style.transform ="translatex(10%)";
                    document.getElementById("pro_imgs_text_4").style.zIndex = "0";
                    
                    
                    }
                    
                    function closeArticle_4() {
                        document.getElementById("pro_close_bt_4").style.display ="none";
                        document.getElementById("pro_open_bt_4").style.display ="block";
                        document.getElementById("pro_imgs_4").style.transform ="translatex(0%)";
                        document.getElementById("pro_imgs_text_4").style.display ="none";
                        
                    }
        // 제품 슬라이더+스와이퍼
        var swiper = new Swiper('.swiper1-container', {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,

            breakpoints: { // 화면의 넓이가 320px 이상일 때 
              0: { slidesPerView: 2,
                     spaceBetween: 10 
                    }, 
                    // 화면의 넓이가 640px 이상일 때 
            999: { slidesPerView: 4,
                    spaceBetween: 40 
                  } 
                }
          });
        
          var swiper = new Swiper('.swiper2-container', {
            slidesPerView: 1.1,
            spaceBetween: 10,

            breakpoints: { // 화면의 넓이가 0px 이상일 때 
              0: { slidesPerView: 1.1,
                     spaceBetween: 10 
                    }, 
                    // 화면의 넓이가 999px 이상일 때 
            999: { slidesPerView: 2,
                    spaceBetween: 20 
                  } 
                }
          });


        //   미디어쿼리같이 js 화면 길이에 따라 제어하기 근데 잘 안됨
        //   function detectMediaSize() { 
        //     if ( window.matchMedia('(min-width: 0px) and (max-width: 414px)').matches ) {
        //          console.log('Mobile');
        //     } else if ( window.matchMedia('(min-width: 0px) and (max-width: 768px)').matches ) {
        //          console.log('Tablet');
        //     } else {
        //          console.log('PC');
        //     }
        // };
        
        // //Register
        // window.addEventListener('resize', detectMediaSize, false);
        
        // // Initialization
        // detectMediaSize();  

    
    
        