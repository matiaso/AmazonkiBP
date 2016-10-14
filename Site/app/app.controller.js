appModule.controller('maniController',['$scope', '$watch', function($scope, $watch){
  
	var NavY = $('.nav').offset().top;

	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();

	if (ScrollY > NavY) {
		$('.nav').addClass('sticky');
	} else {
		$('.nav').removeClass('sticky');
	}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});

}]);
