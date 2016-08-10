document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_12 = {
		elements: {
    		painContent: "#s1_12_2"
  		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_9', "s1_12");
			$('.s1_12__btn--info').click(function(e) {
        $(e.target).siblings('.s1_12__info-block').show();
      });

      $('.s1_12__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
		},
		onExit:function(slideElement){
      $('.s1_12__btn--info').unbind('click');
      $('.s1_12__info-block__close-button').unbind('click');
		}
	}

});