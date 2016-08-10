document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_3 = {
		elements: {
  		painContent: "#s1_3_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_2', "s1_3");
			$('.s1_3__resizable-block').resizable({
				aspectRatio: true,
				handles: 's',
				minHeight: 65,
				maxHeight: 280,
				resize: function(event, ui) {
					ui.position.top = ui.originalPosition.top - (ui.size.width - ui.originalSize.width) / 4.62;
					ui.position.left = ui.originalPosition.left - (ui.size.height - ui.originalSize.height) / 1.91;
				}
			});
		},
		onExit:function(slideElement){
			$('.s1_3__resizable-block').resizable( "destroy" );
		}
	}
});