angular.module('AppDirectives', [])

	.directive('gridRotator', function () {
	return {
		restrict: 'A',
		link: function (scope, element) {
			$(element).gridrotator({
				rows: 4,
				columns: 8,
				maxStep: 2,
				interval: 2000,
				w1024: {
					rows: 3,
					columns: 8
				},
				w768: {
					rows: 3,
					columns: 8
				},
				w480: {
					rows: 2,
					columns: 3
				},
				w320: {
					rows: 2,
					columns: 3
				},
				w240: {
					rows: 2,
					columns: 3
				}
			});
		}
	};
});