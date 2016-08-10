document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_5 = {
		elements: {
  		painContent: "#s1_5_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_3', "s1_5");
			$('.s1_5__wound').click(function(e) {
				var $target = $(e.target);
				if (!$target.is('button') || $target.hasClass('s1_5__btn--active')) return;

				$('.s1_5__btn').removeClass('s1_5__btn--active');
				$target.addClass('s1_5__btn--active');
				$('.s1_5__medications').hide();
				$('.s1_5__pharmaceutical-form').hide();

				switch ($target.index()) {
					case 0:
						$('.s1_5__medications--1').show();
						break;
					case 1:
						$('.s1_5__medications--2').show();
						break;
					case 2:
						$('.s1_5__medications--3').show();
				}

				$('.s1_5__pharmaceutical-form--placeholder').show();
			});


			$('.s1_5__medications').click(function(e) {
				var $target = $(e.target);
				if (!$target.is('button') || $target.hasClass('s1_5__btn--active')) return;
				
				var $targetParent = $target.closest('.s1_5__info-block');

				$targetParent.find('.s1_5__btn').removeClass('s1_5__btn--active');
				$('.s1_5__pharmaceutical-form').find('.s1_5__btn').removeClass('s1_5__btn--active');
				$target.addClass('s1_5__btn--active');
				$('.s1_5__pharmaceutical-form').hide();

				if ($targetParent.hasClass('s1_5__medications--1')) {
					$('.s1_5__pharmaceutical-form--1').show();
				} else if ($targetParent.hasClass('s1_5__medications--2')) {
					$('.s1_5__pharmaceutical-form--2').show();
				} else if ($targetParent.hasClass('s1_5__medications--3')) {
					$('.s1_5__pharmaceutical-form--3').show();
				}
			});

			$('.s1_5__pharmaceutical-form').click(function(e) {
				var $target = $(e.target);
				if (!$target.is('button') || $target.hasClass('s1_5__btn--active')) return;

				var $targetParent = $target.closest('.s1_5__info-block');
				
				$targetParent.find('.s1_5__btn').removeClass('s1_5__btn--active');
				$target.addClass('s1_5__btn--active');
			});
		},
		onExit:function(slideElement){
			$('.s1_5__wound').unbind('click');
			$('.s1_5__medications').unbind('click');
			$('.s1_5__pharmaceutical-form').unbind('click');
		}
	}
});