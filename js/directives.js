angular.module('sci-oneApp.directives', [])
.directive('maincarousel',function(){
	var linker = function(scope,element,attr){
		var loadCarousel = function(){
			element.owlCarousel({
                singleItem: true,
                navigation: false, 
                pagination: false,
                slideSpeed: 1000
 			});
		};
		var loadCarouselActions = function(){
			element.parent().find(".owlcarousel_next").click(function(){
				element.trigger('owl.next');
			});
			element.parent().find(".owlcarousel_prev").click(function(){
				element.trigger('owl.prev');
			});
		};
        scope.initCarousel = function() {
            loadCarousel(element);
            loadCarouselActions();
        };
	}
 
	return{
		restrict : "A",
		link: linker
	}
 
})
.directive('mainCarouselItem',[function() {
    return function(scope, element) {
        if (scope.$last) {
            scope.initCarousel();
        };
    };
}])
.directive('owlcarousel',function(){
	var linker = function(scope,element,attr){
		var loadCarousel = function(){
			element.owlCarousel({
				items : 4,
				itemsDesktop : [1100,4],
				itemsDesktopSmall : [992,3],
				itemsTablet: [762,2],
				itemsMobile: [480,1],
                navigation: false, 
                pagination: false,
                rewindNav: false
 			});
		};
 
		var loadCarouselActions = function(){
			element.parent().find('.category').find(".owlcarousel_next").click(function(){
				element.trigger('owl.next');
			});
			element.parent().find('.category').find(".owlcarousel_prev").click(function(){
				element.trigger('owl.prev');
			});
		};
        scope.initCarousel = function() {
            loadCarousel(element);
            loadCarouselActions();
        };
	}
 
	return{
		restrict : "A",
		link: linker
	}
 
})
.directive('owlCarouselItem',[function() {
    return function(scope, element) {
        if (scope.$last) {
            scope.initCarousel();
        };
    };
}])
.directive('scroll', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind('scroll', function() {
             if (this.pageYOffset >= 100) {
                 scope.dark = true;
             } else {
                 scope.dark = false;
             }
            scope.$apply();
        });
    };
});