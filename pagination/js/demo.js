$.fn.extend({
	pagination : function(option){
		var currentIndex = option.index || 0,
			size = option.size || 20,
			total = option.total;
			pageLen = Math.ceil(total / size),
			renderPageLen = Math.min(pageLen, 10);
		function renderPagination(){
			
		}
	}		
});
$(".pagination").pagination({
	index : 0,
	size : 10,
	total : 497,
	render : function(index){

	}
});