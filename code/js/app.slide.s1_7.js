document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_7 = {
		elements: {
  		painContent: "#s1_7_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_5', "s1_7");

      $('.s1_7__btn--info').click(function(e) {
        $(e.target).siblings('.s1_7__info-block').show();
      });
      $('.s1_7__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
		},
		onExit:function(slideElement){
      $('.s1_7__btn--info').unbind('click');
      $('.s1_7__info-block__close-button').unbind('click');
		}
	}
});