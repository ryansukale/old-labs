$(function(){

	//Code for creating the sliders
	function intitalizeSliders(){
		
		//Define the slide handler function
		function slideHandler(event,ui){
		
			if($(event.target).parents('.scale-slider-container').hasClass('reversed')){
				//Saving reversed values if parent element has a class of ''reversed'
				$(event.target).siblings('input').val(-ui.value);
			}else
			{
				$(event.target).siblings('input').val(ui.value);
			}
			console.log($(event.target).siblings('input').val());
			$(event.target).parents('.question').removeClass('pending-response');
		}
		
		$('.slider').on('mousedown',function(){
			$(this).find('.ui-slider-handle').removeClass('hidden');
		});
		
		$('.slider').slider({
			min:0,max:199,step:1,
			change: slideHandler
		});
		
		//Hide the slide handlers of all the added sliders
		$('.slider').find('.ui-slider-handle').addClass('hidden');
		
	}
	
	

		intitalizeSliders();
	
	
});