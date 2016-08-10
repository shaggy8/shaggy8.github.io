document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_11 = {
		elements: {
  		painContent: "#s1_11_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_9', "s1_11");
			$('.s1_11__btn--info').click(function(e) {
        $(e.target).siblings('.s1_11__info-block').show();
      });

      $('.s1_11__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
		},
		onExit:function(slideElement){
      $('.s1_11__btn--info').unbind('click');
      $('.s1_11__info-block__close-button').unbind('click');
		}
	}
});