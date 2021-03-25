

    //  검색 왼쪽에서 오른쪽으로 열리고 닫히는 기능
    function openSerch() {
        document.getElementById("open_serch").style.display ="none";
        document.getElementById("close_serch").style.display ="block";
        document.getElementById("open_serch_menu_").style.left ="0%";
        }
        
        function closeSerch() {
          document.getElementById("open_serch").style.display ="block";
          document.getElementById("close_serch").style.display ="none";
          document.getElementById("open_serch_menu_").style.left ="-100%";
          
        }

          // 검색 열리기 pc버전
        function openSerch_pc() {
          document.getElementById("open_pc_navi_serch").style.display ="none";
          document.getElementById("close_pc_navi_serch").style.display ="block";
          document.getElementById("open_serch_menu_").style.left ="0%";
          }
          
          function closeSerch_pc() {
            document.getElementById("open_pc_navi_serch").style.display ="block";
            document.getElementById("close_pc_navi_serch").style.display ="none";
            document.getElementById("open_serch_menu_").style.left ="-100%";
            
          }
        // 햄버거 열고 닫기
        function openHam() {
          document.getElementById("open_ham_menu_").style.right ="0";
          }
  
          function closeHam() {
            document.getElementById("open_ham_menu_").style.right ="-300px";
          }

        // 햄버거 토글 메뉴 제이쿼리
        $('.title_').click(function(){
          $(this).next().slideToggle();
          $(this).next().siblings('.title_contens').slideUp();
        });

             // 햄버거 하단 토글 메뉴 제이쿼리
        function openBottomHam() {
          document.getElementById("ham_bottom").style.bottom ="0";
          }
  
          function closeBottomHam() {
          document.getElementById("ham_bottom").style.bottom ="-25.5%";
          }

              //스와이퍼 자동재생,네비게이션,페이지네이션 메인
        var swiper = new Swiper('.swiper1', {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
              delay: 1000000,
              disableOnInteraction: false,
            },

            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },

            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });

          
              //스와이퍼 수동재생 제품슬라이더
          var swiper = new Swiper('.swiper2', {
            
            breakpoints: { // 화면의 넓이가 0px 이상일 때 
              0: { slidesPerView: 1,
                     spaceBetween: 10 
                    }, 
                    // 화면의 넓이가 999px 이상일 때 
            999: { 
              slidesPerView: 2,
                    spaceBetween: 10 
                  } 
                },

            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });

          // 배너 2 왼쪽 오른쪽 이동 버튼 함수
          function goRight() {
            document.getElementById("steb_wrap").style.marginLeft = "0%";
            };
            
            function goLeft() {
              document.getElementById("steb_wrap").style.marginLeft = "-50%";
            };

            // 인스타 스와이퍼
            var swiper = new Swiper('.swiper3', {
              breakpoints: { // 화면의 넓이가 0px 이상일 때 
                0: { slidesPerView: 1,
                       spaceBetween: 10 
                      }, 
                      // 화면의 넓이가 999px 이상일 때 
              999: { 
                slidesPerView: 3,
                      spaceBetween: 10 
                    } 
                  },
              spaceBetween: 30,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
      // 푸터 클릭하면 아래 섹션이 밑에를 밀고 올라와야 되는데 아직 구현못함...
            // 메소드랑 문법 찾아보자
        // $('.foo_btn').click(() => {
        //     $('.foo_open_sec').slideToggle();
        //     $('.foo_open_sec').attr('marginBottom','100px');
        //   });
  
            

          // +스와이퍼 2개 쓸때는 클래스 명을 나눠서 써줘야함. 
          // <div class="swiper-container swiper1">
          //   var swiper = new Swiper('.swiper1',
          //   <div class="swiper-container swiper2">
          //   var swiper = new Swiper('.swiper2',

            

          // // // 재생 일시 정지 버튼
          // // $('#button').toggle(function() {
          //   $(this).parent().css('height', 'auto');
          // }, function() {
          //   $(this).parent().css('height', '18px');
          // });


        

    // // 네비 안에 각각 메뉴 열리고 닫히는 기능 + 제이쿼리
        
    //     $("p.title").on('click', function() {
    //         $(this).next(".con").slideToggle(100);
    //     });
        
    //     $("span.title_").on('click', function() {
    //         $(this).next(".con").slideToggle(100);
    //     });


    
    // // 4개 아티클 섹션 열고 닫기
    // function openArticle() {
    //     document.getElementById("pro_open_bt").style.display ="none";
    //     document.getElementById("pro_close_bt").style.display ="block";
    //     document.getElementById("pro_imgs").style.transform ="translatex(-85%)";
    //     document.getElementById("pro_imgs").style.zIndex ="1";
    //     document.getElementById("pro_imgs_text").style.display ="block";
    //     document.getElementById("pro_imgs_text").style.transform ="translatex(10%)";
    //     document.getElementById("pro_imgs_text").style.zIndex = "0";

        
        
    //     }
        
    //     function closeArticle() {
    //         document.getElementById("pro_close_bt").style.display ="none";
    //         document.getElementById("pro_open_bt").style.display ="block";
    //         document.getElementById("pro_imgs").style.transform ="translatex(0%)";
    //         document.getElementById("pro_imgs_text").style.display ="none";
            
    //     }
        
      
    //                 }
    //     // 제품 슬라이더+스와이퍼
    //     var swiper = new Swiper('.swiper1-container', {
    //         slidesPerView: 2,
    //         spaceBetween: 10,
    //         loop: true,

    //         breakpoints: { // 화면의 넓이가 320px 이상일 때 
    //           0: { slidesPerView: 2,
    //                  spaceBetween: 10 
    //                 }, 
    //                 // 화면의 넓이가 640px 이상일 때 
    //         999: { slidesPerView: 4,
    //                 spaceBetween: 40 
    //               } 
    //             }
    //       });
        
    //       var swiper = new Swiper('.swiper2-container', {
    //         slidesPerView: 1.1,
    //         spaceBetween: 10,

    //         breakpoints: { // 화면의 넓이가 0px 이상일 때 
    //           0: { slidesPerView: 1.1,
    //                  spaceBetween: 10 
    //                 }, 
    //                 // 화면의 넓이가 999px 이상일 때 
    //         999: { slidesPerView: 2,
    //                 spaceBetween: 20 
    //               } 
    //             }
    //       });


        //   // 미디어쿼리같이 js 화면 길이에 따라 제어하기 근데 잘 안됨
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


          // 미디어쿼리같이 js 화면 길이에 따라 제어하기 근데 잘 안됨 2
      //   $(window).resize(function() { if($(window).width() <999) { 
      //     /* do something */ 
      //   } 
      // });



    
    
        