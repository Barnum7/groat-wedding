!function() {
	WebFont.load({
		google: {
			families: [
				'Poppins:400,600',
				'Amatic SC',
			],
		},
		active: function () {
			fitterHappierText(document.querySelectorAll('.stretch'), {baseline: '90%', paddingY: -6});
			document.body.classList.remove('hide');
		},
	});
}();
