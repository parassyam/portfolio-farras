const aboutTween = gsap.from('.animate-on-scroll', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      end: 'bottom 80%',
      scrub: true,
    },
  });  