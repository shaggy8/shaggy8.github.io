document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_10 = {
		elements: {
  		painContent: "#s1_10_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_8', "s1_10");
      presentation.popup('popup__s1_10--0');
      $('.s1_10__btn--info').click(function(e) {
        $(e.target).siblings('.s1_10__info-block').show();
      });

      $('.s1_10__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
		},
		onExit:function(slideElement){
      $('.s1_10__btn--info').unbind('click');
      $('.s1_10__info-block__close-button').unbind('click');
		}
	}
});