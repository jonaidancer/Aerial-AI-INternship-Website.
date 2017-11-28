$(document).ready(function () {
	var controller = new ScrollMagic.Controller();




	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#trigger1',
		duration: 300,
	})
		// trigger animation by adding a css class
		.setClassToggle('#trigger1', 'fadeIn')
		.addIndicators({})
		.addTo(controller);
});