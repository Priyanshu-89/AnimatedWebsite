var t1= gsap.timeline({
    repeat:-1
});

t1
.to(".image-container", {
    width: "100%",
    ease: Expo.easeInOut,
    stagger: 2
},'time')

.to(".text h1", {

    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
},'time')

.to(".text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-110%"
},'time')

