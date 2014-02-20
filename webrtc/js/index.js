$(function(){

	$('.btn-start-rec').on('click',function(event){
		var $this = $(this);
		var $target = $(event.target);
		
		navigator.getUserMedia({audio: true}, function(mediaStream) {
			 window.recordRTC = RecordRTC(mediaStream);
			 recordRTC.startRecording();
		});

	});
	
	$('.btn-stop-rec').on('click',function(event){
		var $this = $(this);
		var $target = $(event.target);
		
		recordRTC.stopRecording(function(audioURL) {
			window.open(audioURL);
			//recordRTC.save();
			
		});
		
	});
	
});
