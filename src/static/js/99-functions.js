$(document).ready(function() {


    $(".lazy").unveil(200, function() {
      $(this).load(function() {
        this.style.opacity = 1;
      });
    });
 


    // SCROLL REVEAL SETTINGS

     var config = {
        enter:    'bottom',
          move:     '8px',
          over:     '0.6s',
          wait:     '0s',
          easing:   'ease',

          scale:    { direction: 'up', power: '0%' },
          rotate:   { x: 0, y: 0, z: 0 },

          opacity:  0,
          mobile:   false,
          reset:    false,

          //        Expects a reference to a DOM node (the <html> node by default)
          //        which is used as the context when checking element visibility.
          viewport: window.document.documentElement,

          //        'always' — delay every time an animation resets
          //        'onload' - delay only for animations triggered by first load
          //        'once'   — delay only the first time an animation reveals
          delay:    'always',

          //        vFactor changes when an element is considered in the viewport.
          //        The default value of 0.60 means 60% of an element must be
          //        visible for its reveal animation to trigger.
          vFactor:  0.20
      }

    window.sr = new scrollReveal(config);


});