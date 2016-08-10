document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_8 = {
		elements: {
  		painContent: "#s1_8_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_6', "s1_8");
			var $infoBlock = $('.s1_8__info-block--2');

			$('.s1_8__draggable').draggable();

			$('.s1_8__droppable--0').droppable({
				tolerance: 'touch',
				drop: function(event, ui) {

					ui.draggable.css({
						top: 124,
						left: 473
					});

					$('.s1_8__info-block').hide();
					$(this).closest('.bg').css('background-image' ,'url("content/img/bepanthen/bepanthen_8.jpg"');
					$infoBlock = $('.s1_8__info-block--2');
				}
			});

			$('.s1_8__droppable--1').droppable({
				drop: function(event, ui) {
					
					ui.draggable.css({
						top: 341,
						left: 215
					});

					$('.s1_8__info-block').hide();
					$(this).closest('.bg').css('background-image' ,'url("content/img/bepanthen/bepanthen_8_1.jpg"');
					$infoBlock = $('.s1_8__info-block--3');
				}
			});

			$('.s1_8__droppable--2').droppable({
				drop: function(event, ui) {

					ui.draggable.css({
						top: 339,
						left: 470
					});

					$('.s1_8__info-block').hide();
					$(this).closest('.bg').css('background-image' ,'url("content/img/bepanthen/bepanthen_8_2.jpg"');
					$infoBlock = $('.s1_8__info-block--4');
				}
			});

			$('.s1_8__droppable--3').droppable({
				drop: function(event, ui) {

					ui.draggable.css({
						top: 352,
						left: 662
					});

					$('.s1_8__info-block').hide();
					$(this).closest('.bg').css('background-image' ,'url("content/img/bepanthen/bepanthen_8_3.jpg"');
					$infoBlock = $('.s1_8__info-block--5');
				}
			});

			$('.s1_8__btn--info-1').click(function(e) {
				$('.s1_8__info-block--1').show();
			});

			$('.s1_8__btn--info-2').click(function(e) {
				$infoBlock.show();
			});

      $('.s1_8__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
			
		},
		onExit:function(slideElement){
			$('#s1_8_2').css('background-image' ,'url("content/img/bepanthen/bepanthen_8.jpg"');
			$('.s1_8__btn--info-1').unbind('click');
			$('.s1_8__btn--info-2').unbind('click');
      $('.s1_8__info-block__close-button').unbind('click');
      $('.s1_8__draggable').draggable('destroy');
      $('.s1_8__draggable').css({
						top: 124,
						left: 473
					});
      $('.s1_8__droppable--0').droppable('destroy');
			$('.s1_8__droppable--1').droppable('destroy');
			$('.s1_8__droppable--2').droppable('destroy');
			$('.s1_8__droppable--3').droppable('destroy');
		}
	}
});