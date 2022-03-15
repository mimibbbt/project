

$(function () {


    const scrollValue = [2060,5798,14454,21991];
  
    $('.left_nav > div').click(function(){

        let idx = $('.left_nav > div').index(this);

        
        myHorizontalScrollbar.scrollTo(scrollValue[idx], 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
          });


    });






    
    $('#section01').addClass('on');
    $('.left_nav').addClass('on');
    $('.left_icon').addClass('on');
    $('.scroll').addClass('on');
    $('.shop_icon').addClass('on');
    $('.rotate_icon').addClass('on');

    /* scroll event section*/
    myHorizontalScrollbar.addListener((status) => {

        let v = status.offset.x
        $('.posNum').html(v);
        console.log();


        $('.circle').css('transform',`rotate(${v * 0.03}deg)`);
        

    });



    $('.back_to_top').click(function () {

        myHorizontalScrollbar.scrollTo(0, 0, 600, {
            callback: () => console.log('done'),
            easing: easing.easeInOutCirc,
        });



    });


    /* slide, click event section */



    gsap.to('#section02', {
        // rotation: 360,
        // x: -innerWidth*3,
        scrollTrigger: {
          trigger: "#section02",
          start: "left left",
          // end: () => "+=" + 300,
          end: 'right right',
          horizontal: true,
          // pinSpace:false,
          scrub: true,
          onEnter : ()=>{
              $('#section02').addClass('on');
          }
        }
      });


    gsap.to('#section02 .sc02_scale_img img', {
        scale: 1,
        // x:
        // y:
        scrollTrigger: {
            trigger: "#section02",
            start: "500 left",
            end: () => "+=" + 2000,
            // end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true
        }
    });

    gsap.to('#section02 .img > div:nth-child(2) img', {
        scale: 1.7,
        // x:
        // y:
        scrollTrigger: {
          trigger: "#section02",
          start: "left left",
          // end: () => "+=" + 300,
          end: 'right right',
          horizontal: true,
          // pinSpace:false,
          scrub: true
        }
      });








    gsap.to('#section03', {
        // rotation: 360,
        // x: -innerWidth*3,
        scrollTrigger: {
            trigger: "#section03",
            start: "left left",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true,
            onEnter : ()=>{
                $('#section03').addClass('on');
            }
        }
    });

    gsap.to('#section03 .img_line > div:nth-child(2) img', {
        scale: 1.7,
        // x:
        // y:
        scrollTrigger: {
            trigger: "#section03",
            start: "200 left",
            // end: () => "+=" + 300,
            end: 'right 300',
            horizontal: true,
            // pinSpace:false,
            scrub: true
        }
    });

    gsap.to('#section04', {
        // rotation: 360,
        // x: -innerWidth*3,
        scrollTrigger: {
            trigger: "#section04",
            start: "left left",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true,
            onEnter : ()=>{
                $('#section04').addClass('on');
            }
        }
    });

    gsap.to('#section04 .video', {
        // rotation: 360,
        // x: -innerWidth*3,
        scrollTrigger: {
            trigger: "#section04",
            start: "left left",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true,
            onEnter : ()=>{
                $('#section04').addClass('on');
            }
        }
    });


    gsap.to('#section05', {
        // rotation: 360,
        // x: -innerWidth*3,
        scrollTrigger: {
            trigger: "#section05",
            start: "left left",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true,
            onEnter : ()=>{
                $('#section05').addClass('on');
            }
        }
    });

    gsap.to('#section06', {
        // rotation: 360,
        // x: -innerWidth*3,
        scrollTrigger: {
            trigger: "#section06",
            start: "left left",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true,
            onEnter : ()=>{
                $('#section06').addClass('on');
            }
        }
    });

    gsap.to('#section06 .sc06_scale_img img', {
        scale: 1,
        // x:
        // y:
        scrollTrigger: {
            trigger: "#section06",
            start: "-100 left",
            end: () => "+=" + 2000,
            // end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true
        }
    });

    gsap.to('#section06 .img > div:nth-child(3) img', {
        scale: 1.2,
        // x:
        // y:
        scrollTrigger: {
            trigger: "#section06",
            start: "-400 left",
            // end: () => "+=" + 300,
            // end: 'right right',
            end: () => "+=" + 2000,
            horizontal: true,
            // pinSpace:false,
            scrub: true
        }
    });


    gsap.to('#section07', {
        // rotation: 360,
        // x: -innerWidth*3,
        scrollTrigger: {
            trigger: "#section07",
            start: "left left",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true,
            onEnter : ()=>{
                $('#section07').addClass('on');
            }
        }
    });

    gsap.to('#section08', {
        // rotation: 360,
        // x: -innerWidth*3,
        scrollTrigger: {
            trigger: "#section08",
            start: "-500 left",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true,
            onEnter : ()=>{
                $('#section08').addClass('on');
            }
        }
    });


})