$(function(){
	let content=$('.panel li')
	content.on('click',function(){
		let contentId=$(this).attr('data-contentId');

		let activeList=$('div').find('ol.active');
		// activeList.slideUp(1000,function(){
		// 	$(this).removeClass('active');
		// 	 	$("#"+contentId).slideDown(1000,function(){
		// 	 		$(this).addClass('active');
		//  			console.log("#"+contentId);
		// 		});
		// });

		activeList.slideUp(300,showNextContent);

		function showNextContent(){
			activeList.removeClass('active');
			$("#"+contentId).slideDown(300,function(){
				$(this).addClass('active');
			});
			console.log("#"+contentId);
		}
	});
});



