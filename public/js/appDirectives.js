angular.module('AppDirectives', [])

	.directive('gridRotator', function () {
	return {
		restrict: 'A',
		link: function (scope, element) {
			$(element).gridrotator({
				w320: {
					rows: 3,
					columns: 4
				},
				w240: {
					rows: 3,
					columns: 3
				}
			});
		}
	};
});