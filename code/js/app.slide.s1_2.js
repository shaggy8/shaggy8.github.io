document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_2 = {
		elements: {
  		painContent: "#s1_2_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_2', "s1_2");

			var $slideBlock = $('#s1_2');
			var $roundSlider = $slideBlock.find('.s1_2__roundslider');
			var $dial = $slideBlock.find('.s1_2__rs_number');
			var $answerBlock = $slideBlock.find('.s1_2__answer_block');
			var $buttonAnswer = $slideBlock.find('.s1_2__btn-answer');
			var $buttonWrapper = $slideBlock.find('.s1_2__button_wrapper');
			var $buttonNumber = $buttonWrapper.find('.s1_2__btn-number');
			var roundSliderProcessing = function() {
				$answerBlock.html(function() {
					var children;
					var val = $roundSlider.roundSlider("option", "value");
					var lastNumberOfVal = +val.toString().substr(-2);

					if (lastNumberOfVal > 1 && lastNumberOfVal < 5) {
						children = ' ребенка';
					} else if (lastNumberOfVal === 1) {
						children = ' ребенок';
					} else {
						children = ' детей';
					}

					return (val + children);
				});
			};

			$roundSlider.roundSlider({
				radius: 225,
				width: 69,
				handleSize: 45,
				drag: roundSliderProcessing,
				change: roundSliderProcessing,
				stop: function() {
					$slideBlock.find('.rs-handle').hide();
					$buttonWrapper.hide();
					$buttonAnswer.show();
				}
			});

			$buttonWrapper.click(function (event) {
				var $target = $(event.target);

				if (!$target.is('button') || $target.hasClass('s1_2__btn-number--active')) return;

				$buttonNumber.removeClass('s1_2__btn-number--active');
				$target.addClass('s1_2__btn-number--active');

				var maxVal;
				var partOfDial;

				switch ($target.html()) {
					case '10':
						maxVal = 100;
						partOfDial = '0'
						break;
					case '100':
						maxVal = 1000;
						partOfDial = '00'
						break;
					case '1000':
						maxVal = 10000;
						partOfDial = '000'
						break;
					case '10.000':
						maxVal = 100000;
						partOfDial = '0000'
						break;
				}

				$roundSlider.roundSlider("option", "max", maxVal);

				$dial.each(function (index, elem) {
					if (index === 0) return;
					$(elem).html(index + partOfDial);
				});
			});

			$buttonAnswer.click(function() {
				$answerBlock
					.html('<p>Количество детей в возрасте<br>от 0 до 12 лет - 1 300 000</p><p>В месяц - 750 000 мелких ран...</p>')
					.css('top', 211);
			});
		},
		onExit:function(slideElement){
			var $slideBlock = $('#s1_2');
			var $roundSlider = $slideBlock.find('.s1_2__roundslider');
			var $dial = $slideBlock.find('.s1_2__rs_number');
			var $answerBlock = $slideBlock.find('.s1_2__answer_block');
			var $buttonAnswer = $slideBlock.find('.s1_2__btn-answer');
			var $buttonWrapper = $slideBlock.find('.s1_2__button_wrapper');
			var $buttonNumber = $buttonWrapper.find('.s1_2__btn-number');

			$buttonWrapper.unbind('click');
			$buttonAnswer.unbind('click');
			$answerBlock.removeAttr('style');

			$roundSlider.roundSlider('destroy');
			$dial.each(function (index, elem) {
				if (index === 0) return;
				$(elem).html(index + '0');
			});
			$answerBlock.html('0 детей');
			$buttonWrapper.show();
			$buttonAnswer.hide();
			$buttonNumber
				.removeClass('s1_2__btn-number--active')
				.eq(0)
				.addClass('s1_2__btn-number--active');
		}
	}
});