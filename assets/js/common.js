$(function () {

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.saveStyles(".mobile, .desktop");
    ScrollTrigger.matchMedia({
    
        "(min-width: 992px)": function() {
            
            /*
            *
            *
            * 글자 쪼개서 나타나기-최상단
            *
            * */ 
            const letTxt2 = new SplitType('.sc-visual .title-wrap h1', {type:'words, chars'})
        
            gsap.set(letTxt2.chars,{
                opacity:0,
                xPercent:100
            })
        
            gsap.to($('.sc-visual .title-wrap h1').find('.char'),{
                opacity:1,
                xPercent:0,
                stagger:0.08
            })
        
            /*
            *
            *
            * 사진 순차로 나타나기-최상단
            *
            */
            gsap.set('.sc-visual .img-area .img-list .img-item',{
                opacity:0,
                xPercent:10
            })

        
            gsap.to('.sc-visual .img-list .img-item', {
                opacity:1,
                xPercent:0,
                stagger:0.07
            })

            /*
            *
            * intro2 고정모션 timeline
            *
            */

            gsap.set('.sc-intro2 .headline2,.sc-intro2  .headline3', {
                visibility: 'hidden'
            }) //setting
            gsap.set('.sticky-trigger .scroll-img2,.sticky-trigger .scroll-img3 ', {
                visibility: 'hidden'
            })

            const intro2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.sc-intro .sticky-trigger',
                    start: '20% 100%',
                    end: '100% 100%',
                    // markers: true,
                    scrub: 1
                },
            })

            intro2
                .to('.sc-intro2 .headline1', {
                    scale: 1.3
                })
                .addLabel('a')
                .set('.sc-intro2 .headline1', {
                    visibility: 'hidden'
                }, 'a')
                .set('.sc-intro2 .headline2', {
                    visibility: 'visible'
                }, 'a')

                .set('.sticky-trigger .scroll-img1', {
                    visibility: 'hidden'
                })
                .set('.sticky-trigger .scroll-img2', {
                    visibility: 'visible'
                })



                .to('.sc-intro2 .headline2', {
                    scale: 1.3
                })
                .set('.sc-intro2 .headline2', {
                    visibility: 'hidden'
                })
                .set('.sc-intro2 .headline3', {
                    visibility: 'visible'
                })

                .set('.sticky-trigger .scroll-img2', {
                    visibility: 'hidden'
                })
                .set('.sticky-trigger .scroll-img3', {
                    visibility: 'visible'
                })

                .to('.sc-intro2 .headline3', {
                    scale: 1.3
                })
                .to('.sticky-trigger .scroll-img3', {
                    scale: 0
                })

                
                /*
                * slide고정모션
                *
                * 
                */
                const slidePin = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.sc-slide',
                        start: '0% -100%',
                        end: '100% 100%',
                        // markers: true,
                        scrub: 1
                    },
                })

                slidePin
                    .addLabel('a')
                    .to('.sc-slide .slide-01 img', {
                        scale: 1.3
                    }, 'a')
                    .to('.sc-slide .slide-02', {
                        top: '7vw'
                    }, 'a')

                    .addLabel('b')
                    .to('.sc-slide .slide-02 img', {
                        scale: 1.3
                    }, 'b')
                    .to('.sc-slide .slide-03', {
                        top: '15vw'
                    }, 'b')

                    .addLabel('c')
                    .to('.sc-slide .slide-03 img', {
                        scale: 1.3
                    }, 'c')
                    .to('.sc-slide .slide-04', {
                        top: '22.8vw'
                    }, 'c')

                    .to('.sc-slide .slide-04 img', {
                        scale: 1.3
                    })

                    /*
                    *
                    *
                    * playground.
                    *
                    */

                    /*h2 text*/ 
                    const playMotion = gsap.timeline({
                        scrollTrigger: {
                            trigger: '.sc-awards .title-wrap',
                            start: '20% 0%',
                            end: '100% 100%',
                            // markers: true,
                            scrub:1,
                        },
                    })

                    playMotion
                        .to('.sc-awards .title-wrap h3', {
                            scale: 0.5
                        })


                    /*awards-wrap*/ 
                    gsap.set('.sc-awards .awards-item img',{
                        scale:0
                    })

                    $('.sc-awards .awards-item').each(function(idx,ele){
                        const playMotion2 = gsap.timeline({
                            scrollTrigger: {
                                trigger: ele,
                                start: '0% 100%',
                                end: '100% 100%',
                                // markers: true,
                                scrub: 1,
                            },
                        })
                        playMotion2
                        .to($(this).find('img'), {
                            scale: 1,
                        })
                    })

                    $('.sc-awards .awards-item').each(function(idx,ele){
                        y=$(this).data('y')
                        gsap.to(ele, {
                            scrollTrigger: {
                                trigger: ele,
                                start: '0% 100%',
                                end: '100% 0%',
                                // markers: true,
                                scrub: 1,
                            },
                            yPercent:y
                        })
                    })


                                

            },

            "all": function() {

                /*
                *
                *이미지 스케일
                *
                */
                $('.sc-intro .img').each(function (idx, ele) {
                    scaleVal = $(this).data('scale')
                    gsap.to(ele, {
                        scrollTrigger: {
                            trigger: '.sc-intro .title-area',
                            start: '0% 100%',
                            end: '100% 0%',
                            // markers: true,
                            scrub: 1
                        },
                        scale: scaleVal
                    })
                })
                
                /*
                *
                *
                * 문자 가로로 나타나기
                *
                */
                gsap.set('.sc-awards .em-list .em-box',{
                    opacity:0,
                    xPercent:10
                })

                gsap.to('.sc-awards .em-list .em-box', {
                    scrollTrigger: {
                        trigger: '.sc-awards .em-list',
                        start: '0% 100%',
                        end: '100% +=700px',
                        // markers: true,
                        scrub: 0
                    },
                    opacity:1,
                    xPercent:0,
                    stagger:0.2
                })
                
                /*
                *
                *
                * 문자 세로 슬라이드
                *
                */
                gsap.to('.sc-awards .scroll-area .scroll-box .absolute-wrap',{ 
                    scrollTrigger:{
                        trigger:'.sc-awards .scroll-area',
                        start:"0% 50%",
                        end:"100% 50%",
                        // markers:true,
                        scrub:0,
                    },
                    top:'100%',
                    yPercent:-100,
                    ease:'none'
                })
            
                $('.sc-awards .scroll-wrap .scroll-list').each(function (idx,ele){
                    
                    fontClass = ['a1', 'a2', 'a3']
                    fontText = ['key','special','crush']
                    fontText2 = ['skils','expertise','things']
            
                    ScrollTrigger.create({
                        trigger: ele,
                        start: '0% 50%',
                        end: '100% 50%',
                        // markers: true,
                        scrub: 0,
                        onEnter:function(){
                            $('.sc-awards .absolute-wrap p').text(fontText[idx]).removeClass('a1 a2 a3').addClass(fontClass[idx]);
                            $('.sc-awards .absolute-wrap.text2 p').text(fontText2[idx])
                        },
                        onEnterBack:function(){
                            $('.sc-awards .absolute-wrap p').text(fontText[idx]).removeClass('a1 a2 a3').addClass(fontClass[idx]);
                            $('.sc-awards .absolute-wrap.text2 p').text(fontText2[idx]);
                        },
                    })
                })
            
            
            
                /*
                *
                *
                * 글자 쪼개서 나타나기
                *
                * */ 
                const letTxt = new SplitType('.sc-contact .title-wrap h3', {type:'words, chars'})
            
                gsap.set(letTxt.chars,{
                    opacity:0,
                    xPercent:100
                })
            
                $('.sc-contact .title-wrap h3').each(function(idx,ele){
                    gsap.to($(this).find('.char'),{
                        scrollTrigger: {
                            trigger: '.sc-contact .title-wrap',
                            start: '20% 50%',
                            end: '100% 100%',
                            // markers: true,
                            scrub:1,
                        },
                            opacity:1,
                            xPercent:0,
                            stagger:0.01
                    })
                })
            
                gsap.set('.sc-contact .title-wrap .img-box img',{
                    scale:0,
                })
            
                gsap.to('.sc-contact .title-wrap .img-box img',{
                    scrollTrigger: {
                        trigger: '.sc-contact',
                        start: '0% 60%',
                        end: '100% 100%',
                        // markers: true,
                        scrub:0,
                    },
                    scale:1,
                })
            
            
            }
    
    });






})


