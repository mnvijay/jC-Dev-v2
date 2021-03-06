$(document).ready(function(){ // wait for document ready
    
     $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
    
   $(window).scroll(function() {
   var hT = $('#lastsection').offset().top,
       hH = $('#lastsection').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $("#m_tdb").hide();
   }
    else{
       $("#m_tdb").show();
 }
});
    
   /* $(window).scroll(function() {
   var hT = $('#m_con2').offset().top,
       hH = $('#m_con2').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $("#fixed").addClass("navbar");
   }
    else{
       $("#fixed").removeClass("navbar");
 }
}); */
    
		// init           
							var controller = new ScrollMagic.Controller();

							// define movement of panels
							var wipeAnimation = new TimelineMax()
								// animate to second panel
								.to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
								.to("#slideContainer", 1,   {x: "-20%"})	// move in to first panel
								.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
								// animate to third panel
								.to("#slideContainer", 0.5, {z: -150, delay: 1})
								.to("#slideContainer", 1,   {x: "-40%"})
								.to("#slideContainer", 0.5, {z: 0})
								// animate to forth panel
								.to("#slideContainer", 0.5, {z: -150, delay: 1})
								.to("#slideContainer", 1,   {x: "-60%"})
								.to("#slideContainer", 0.5, {z: 0})
                                // animate to fifth panel
                                .to("#slideContainer", 0.5, {z: -150, delay: 1})
								.to("#slideContainer", 1,   {x: "-80%"})
								.to("#slideContainer", 0.5, {z: 0});

							// create scene to pin and link animation
							new ScrollMagic.Scene({
									triggerElement: "#pinContainer",
									triggerHook: "onLeave",
									duration: "500%"
								})
								.setPin("#pinContainer")
								.setTween(wipeAnimation)
								 // add indicators (requires plugin)
								.addTo(controller);
    
    new ScrollMagic.Scene({triggerHook: 'onEnter',
        duration: 400,  // the scene should last for a scroll distance of 400px
    })
    .setPin("#bigPhone1") // pins the element for the the scene's duration
    .addTo(controller); 
    
    new ScrollMagic.Scene({
        duration: 400,  // the scene should last for a scroll distance of 5400px
    })
    .setPin("#smallPhone2") // pins the element for the the scene's duration
    .addTo(controller);
    
    new ScrollMagic.Scene({triggerHook: 'onEnter',
        duration: 350,  // the scene should last for a scroll distance of 350px
       offset: 5600    
    })
    .setPin("#bigPhone1") // pins the element for the the scene's duration
    .addTo(controller); 
    
    new ScrollMagic.Scene({triggerHook: 'onEnter',
        duration: 350,  // the scene should last for a scroll distance of 350px
        offset: 5600
    })
    .setPin("#smallPhone2") // pins the element for the the scene's duration
    .addTo(controller);
    
    
    var controller = new ScrollMagic.Controller();
    
        new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"100"})
					.setClassToggle(".jCBackground.logo", "top") // add class toggle
					.addTo(controller);
    
        new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"1000"})
					.setClassToggle(".rightScreen.art", "middleScreen") // add class toggle
					.addTo(controller);

    
        new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"2000"})
					.setClassToggle(".rightScreen.band", "middleScreen") // add class toggle
					.addTo(controller);
    
        new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"2000"})
					.setClassToggle(".rightScreen.art", "leftScreen") // add class toggle
					.addTo(controller);
    
        new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"3150"})
					.setClassToggle(".rightScreen.band", "leftScreen") // add class toggle
					.addTo(controller);
    
        new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"3150"})
					.setClassToggle(".rightScreen.playRoom", "middleScreen") // add class toggle
					.addTo(controller);
    
        new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"4150"})
					.setClassToggle(".rightScreen.gig", "middleScreen") // add class toggle
					.addTo(controller);
        new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"4150"})
					.setClassToggle(".rightScreen.playRoom", "leftScreen") // add class toggle
					.addTo(controller);
    
    var controller = new ScrollMagic.Controller();
    
        new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"5800"})
					.setClassToggle("#bigPhone1ScreenJc", "bigPhone1ScreenJc1") // add class toggle
					.addTo(controller);
    
    var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 0}});
    

    // x -= : to move the object to the left.
    // x += : to move the object to the right. 
    // y -= : to move the object up.
    // y += : to move the object down. 
    
    // build tween One App Section (sPhone to left)
	var tween = new TimelineMax()
		.to("#smallPhone2", 1, {x: "-=55"});
                new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"100"})
                    .setTween(tween)
					.addTo(controller);
    
    // build tween One App Section (bPhone to  right)
    	var tween1 = new TimelineMax()
		.to("#bigPhone1", 1, {x: "+=55"});
                new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"100"})
                    .setTween(tween1)
					.addTo(controller);
    
    
    
	// build tween Bands Section(MERGING) (sPhone to right)
	var tween = new TimelineMax()
		.to("#smallPhone2", 1, {x: "+=55"});
                new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"2700"})
                    .setTween(tween)
					.addTo(controller);
    
    // build tween Bands Section(MERGING) (bPhone to left)
    	var tween1 = new TimelineMax()
		.to("#bigPhone1", 1, {x: "-=55"});
                new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"2700"})
                    .setTween(tween1)
					.addTo(controller);
    
    // build tween Gigs Section (Slide) (sPhone to left)
    var tween2 = new TimelineMax()
		.to("#smallPhone2", 1, {x: "-=55"});
                new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"4800"})
                    .setTween(tween2)
					.addTo(controller);
    
    // build tween Gigs Section (Slide) (bPhone to right)
    var tween3 = new TimelineMax()
		.to("#bigPhone1", 1, {x: "+=55"});
                new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"4800"})
                    .setTween(tween3)
					.addTo(controller);
    
    
      // build tween Gig Section (For Tucking in)
       var tween6 = new TimelineMax()
		.to("#smallPhone2", 1, {x: "+=75",y: "+=370"});
                new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"5780"})
                    .setTween(tween6)
					.addTo(controller);
    
    // build tween Gig Section (For Tucking in)
    var tween7 = new TimelineMax()
		.to("#bigPhone1", 1, {x:"-=55" ,y: "+=370"});	
                new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"5780"})
                    .setTween(tween7)
					.addTo(controller);
	});