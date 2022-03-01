

$(function () {

    /* scroll event section*/
    myHorizontalScrollbar.addListener((status) => {

        let v = status.offset.x
        $('.posNum').html(v);
        console.log();

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





})