$(document).ready(function () {

	window.globalPopup = new Popup();	// глобальная инициализация попап

	$('[data-ajax1]').click(function (e) {

		e.preventDefault();

		$.post(this.href, function (response) {

			globalPopup
				.html(response, function (opts, event) {

					var input = this.querySelector('input[type="file"]');

					input.addEventListener('mousedown', function (e) {
						opts.closeOverlay = false; // отменяем скрытие по клику оверлея
					});

					input.addEventListener('change', function (e) {
						setTimeout(function () {
							opts.closeOverlay = true; // включем скрытие по клику оверлея
						}, 200);
					});

				})
				.show();

		});

	});

	$('[data-ajax2]').click(function (e) {

		e.preventDefault();

		$.post(this.href, function (response) {

			globalPopup
				.options({
					closeButtons: '.js-response__close',
				})
				.html(response)
				.show();

		});

	});

	$('[data-ajax3]').click(function (e) {

		e.preventDefault();

		$.post(this.href, function (response) {

			globalPopup
				.options({
					background: 'none',
					closeButtons: '.js-response__close',
					offsetY: 45,
					offsetX: 0,
					coordElement: '[data-ajax3]'
				})
				.html(response)
				.show();

		});

	});

	$('[data-ajax4]').click(function (e) {

		e.preventDefault();

		$.post(this.href, function (response) {

			globalPopup
				.options({
					closeShow: false,
					closeButtons: '.js-response__close',
				})
				.html(response)
				.show();

		});

	});

});