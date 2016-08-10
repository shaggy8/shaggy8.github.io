document.addEventListener('presentationInit', function() {

  var slide = app.slide.s1_6 = {
  	elements: {
      painContent: "#s1_6_2"
    },
    onEnter: function() {
      presentation.prev('bepanthen', 'bepanthen_4', "s1_6");
      presentation.popup('popup__s1_6--0');
      $('.s1_6__btn--info').click(function(e) {
        $(e.target).siblings('.s1_6__info-block').show();
      });

      $('.s1_6__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function() {
      $('.s1_6__btn--info').unbind('click');
      $('.s1_6__info-block__close-button').unbind('click');
    }
  };
});