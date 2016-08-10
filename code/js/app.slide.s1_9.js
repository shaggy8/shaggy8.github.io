document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_9 = {
		elements: {
  		painContent: "#s1_9_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_7', "s1_9");
			$('.s1_9__draggable').draggable();

			$('.s1_9__droppable').droppable({
				tolerance: 'touch',
				drop: function(event, ui) {
					var draggableCoordinates = [
						{top: 237, left: 222, zIndex: 100},
						{top: 237, left: 445, zIndex: 100},
						{top: 237, left: 668, zIndex: 100},
					];

					$('.s1_9__draggable').each(function(index, elem) {
						$(elem).css(draggableCoordinates[index]);
					});

					ui.draggable.css({
						top: 440,
						left: 444,
						zIndex: 10
					});

					if (ui.draggable.hasClass('s1_9__draggable--1')) {
						$(this).closest('.bg').css('background-image' ,'url("content/img/bepanthen/bepanthen_9_1.jpg"');
					} else if (ui.draggable.hasClass('s1_9__draggable--2')) {
						$(this).closest('.bg').css('background-image' ,'url("content/img/bepanthen/bepanthen_9_2.jpg"');
					} else if (ui.draggable.hasClass('s1_9__draggable--3')) {
						$(this).closest('.bg').css('background-image' ,'url("content/img/bepanthen/bepanthen_9_3.jpg"');
					}

				},
			});

			$('.s1_9__btn--info').click(function(e) {
				$('.s1_9__info-block').show();
			});

      $('.s1_9__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
		},
		onExit:function(slideElement){
			$('#s1_9_2').css('background-image' ,'url("content/img/bepanthen/bepanthen_9.jpg"');
			var draggableCoordinates = [
				{top: 237, left: 222, zIndex: 100},
				{top: 237, left: 445, zIndex: 100},
				{top: 237, left: 668, zIndex: 100},
			];

			$('.s1_9__draggable').each(function(index, elem) {
				$(elem).css(draggableCoordinates[index]);
			});

			$('.s1_9__draggable').draggable('destroy');
			$('.s1_9__droppable').droppable('destroy');
			$('.s1_9__btn--info').unbind('click');
      $('.s1_9__info-block__close-button').unbind('click');
		}
	}
});