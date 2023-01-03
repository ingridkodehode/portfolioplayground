// CONTENT SCROLL ANIMATION //
gsap.registerPlugin(ScrollTrigger);
// REVEAL Trigger
gsap.utils.toArray(".reveal").forEach(function (elem) {
  // triggers the animation at 80% and 20% of the screen
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    // set "true" to see animation start and end points guidelines
    // should always be set to false.
    markers: false,
    // once div reach start point it will ease in opacity 0% = 100%
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    // once div reach end point it will ease in opacity 100% = 0%
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    // once div reach start point from top back down it will ease in opacity 0% = 100%
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    // once div reach end point at the bottom it will ease in opacity 100% = 0%
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
  });
});

function openTab(evt, TabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}
