document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_15 = {
		elements: {
  		painContent: "#s1_15_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_10', "s1_15");

			$('.s1_15__btn--1').click(function(e) {
        $(e.target).siblings('.s1_15__info-block-2').show();
      });

			$('.s1_15__btn--info').click(function(e) {
        $(e.target).siblings('.s1_15__info-block-3').show();
      });

      $('.s1_15__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
		},
		onExit:function(slideElement){
			$('.s1_15__btn--1').unbind('click');
      $('.s1_15__btn--info').unbind('click');
      $('.s1_15__info-block__close-button').unbind('click');
		}
	}
});