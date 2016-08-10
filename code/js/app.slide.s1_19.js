document.addEventListener('presentationInit', function(){
	var slide = app.slide.s1_19 = {
		elements: {
  		painContent: "#s1_19_2"
		},
		onEnter:function(slideElement){
			presentation.prev('bepanthen', 'bepanthen_12', "s1_19");
		},
		onExit:function(slideElement){
		}
	}
});