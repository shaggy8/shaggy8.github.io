document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_14 = {
		elements: {
  		painContent: "#s1_14_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_10', "s1_14");
			var $textBlock = $('.s1_14__info-block-1 .info-block__text');
			var textBlockHeight = parseFloat($textBlock.css('height'));
			var textBlockWrapperHeight = parseFloat($('.s1_14__info-block-1 .info-block__text-wrapper').css('height'));
			var textBlockTopScrolled = textBlockWrapperHeight - textBlockHeight;

			$('.s1_14__btn--1').click(function(e) {
				var textBlockTop = parseFloat($textBlock.css('top'));
				if (textBlockTop === 0) return;
				$textBlock.css('top', 0);
			});

			$('.s1_14__btn--2').click(function(e) {
				var textBlockTop = parseFloat($textBlock.css('top'));
				if (textBlockTop === textBlockTopScrolled) return;
				$textBlock.css('top', textBlockTopScrolled);
			});

			$('.s1_14__btn--info').click(function(e) {
        $(e.target).siblings('.s1_14__info-block-2').show();
      });

      $('.s1_14__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
		},
		onExit:function(slideElement){
			$('.s1_14__btn--1').unbind('click');
			$('.s1_14__btn--2').unbind('click');
      $('.s1_14__btn--info').unbind('click');
      $('.s1_14__info-block__close-button').unbind('click');
		}
	}
});