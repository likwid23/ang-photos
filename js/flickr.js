var app = angular.module('MyFlickrApp', [])
.controller('FlickrController', function($scope, $http, $log) {

var url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK";

$http.jsonp(url)
	.success(function(feeds){
		$scope.feeds = feeds;
     });
});