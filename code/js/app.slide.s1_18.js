document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_18 = {
		elements: {
			painContent: "#s1_18_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_11', "s1_18");
			var $growingBlock = $('.s1_18__growing_block');
			var growingStage = 0;
			var growing = setInterval(function() {
				switch (growingStage) {
					case 0:
						$growingBlock.css('height', '76px');
						growingStage++;
						break;
					case 1:
						$growingBlock.css('height', '156px');
						growingStage++;
						break;
					case 2:
						$growingBlock.css('height', '387px');
						growingStage++;
						clearInterval(growing);
				}
			}, 4000);
		},
		onExit:function(slideElement){
			$('.s1_18__growing_block').css('height', 0);
		}
	}
});