document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_13 = {
		elements: {
  		painContent: "#s1_13_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_9', "s1_13");
			var $textBlock = $('.s1_13__info-block .info-block__text');
			var textBlockHeight = parseFloat($textBlock.css('height'));
			var textBlockWrapperHeight = parseFloat($('.s1_13__info-block .info-block__text-wrapper').css('height'));
			var textBlockTopScrolled = textBlockWrapperHeight - textBlockHeight;

			$('.s1_13__btn--1').click(function(e) {
				var textBlockTop = parseFloat($textBlock.css('top'));
				if (textBlockTop === 0) return;
				$textBlock.css('top', 0);
			});

			$('.s1_13__btn--2').click(function(e) {
				var textBlockTop = parseFloat($textBlock.css('top'));
				if (textBlockTop === textBlockTopScrolled) return;
				$textBlock.css('top', textBlockTopScrolled);
			});
		},
		onExit:function(slideElement){
			$('.s1_13__btn--1').unbind('click');
			$('.s1_13__btn--2').unbind('click');
		}
	}

});