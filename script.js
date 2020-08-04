//gsap

var tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger)
     
//nav

tl.from('#nav img',{
    y: -30,
    opacity : 0,
    ease : 'expo.easeInOut',
    delay: .3
})
.from('#nav #links a',{
    y: -30,
    opacity : 0,
    ease : 'expo.easeInOut',
    stagger: .4
})
.from('#nav>a',{
    y: -30,
    opacity : 0,
    ease : 'expo.easeInOut',
    delay : '-.7'
})

//main

.from('#main .mainelem',{
    y: 40,
    opacity: 0,
    ease: 'expo.easeInOut',
    stagger : .3
})
.from('#main>i',{
    scale: 1.4,
    opacity: 0,
    ease: 'expo.easeInOut',
    delay: '-.6'
})

//bigimage
.from('#bigimage',{
    scale: 1.1,
    y: 30,
    opacity: 0,
    ease: 'expo.easeInOut'
})


//scrolltriggerstartshere

gsap.from('#entrylevel .entryelem',{
    scrollTrigger : {
        trigger : '#entrylevel',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .8,
    duration : 1
})

gsap.from('#entrcourses .crs',{
    scrollTrigger : {
        trigger : '#entrcourses',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .8,
    duration : 1
})
gsap.from('#coursebnr .crsbnrelem',{
    scrollTrigger : {
        trigger : '#coursebnr',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .8,
    duration : 1
})
gsap.from('#brandswork .brandelem',{
    scrollTrigger : {
        trigger : '#brandswork',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .2,
    duration : 1
})
gsap.from('#showcasegreen .showcasegreenelem',{
    scrollTrigger : {
        trigger : '#showcasegreen',
        toggleActions : "play pause resume reverse"
    },
    x : -40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .2,
    duration : 1
})

gsap.from('#stats .statselem',{
    scrollTrigger : {
        trigger : '#stats',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .2,
    duration : 1
})

gsap.from('#cards .card',{
    scrollTrigger : {
        trigger : '#cards',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .2,
    duration : 1
})

gsap.from('.card .cardtext',{
    scrollTrigger : {
        trigger : '.card',
        toggleActions : "play pause resume reverse"
    },
    y : 40,
    opacity: 0,
    ease : 'expo.easeInOut',
    stagger : .2,
    duration : 1
})
