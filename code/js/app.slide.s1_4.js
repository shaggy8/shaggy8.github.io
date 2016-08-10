document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_4 = {
		elements: {
  		painContent: "#s1_4_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_2', "s1_4");
		},
		onExit:function(slideElement){
		}
	}
});