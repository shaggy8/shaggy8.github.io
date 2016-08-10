document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_1 = {
		elements: {
		painContent: "#s1_1_2"
		},
		onEnter:function(slideElement){
			presentation.bgStyle('bepanthen', 'bg_s1_', 19);
			presentation.prev('empty');
		},
		onExit:function(slideElement){
		}
	}
});