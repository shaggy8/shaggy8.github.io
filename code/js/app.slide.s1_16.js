document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_16 = {
		elements: {
  		painContent: "#s1_16_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_10', "s1_16");
			
			$('.s1_16__btn--info').click(function(e) {
        $(e.target).siblings('.s1_16__info-block').show();
      });

      $('.s1_16__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
		},
		onExit:function(slideElement){
      $('.s1_16__btn--info').unbind('click');
      $('.s1_16__info-block__close-button').unbind('click');
		}
	}
});