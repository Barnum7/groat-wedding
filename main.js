!function() {
	WebFont.load({
		google: { families: ['Poppins:400,600'] },
		active: function () {
			fitterHappierText(document.querySelectorAll('.stretch'));
		},
	});
}();
