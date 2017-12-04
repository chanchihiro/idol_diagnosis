$(document).ready(function(){
	//黒い部分を押してモーダルが消えるようにする
	$("html").on("click", function () {
  		$('#swipebox-overlay').fadeOut();
	});
});
