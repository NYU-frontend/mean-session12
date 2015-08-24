  portfolioApp.controller("PortfolioViewerController", function($scope, $routeParams, FIREBASE_URL, $firebaseArray, $firebaseObject){
  	$scope.portfolio_name = $routeParams.portfolio_name;
  	// $scope.load_error_text = "";
    var portfolio_name = $routeParams.portfolio_name;
    var pushImg = new Firebase(FIREBASE_URL + '/images/' + portfolio_name);

    $scope.portfolios = $firebaseObject(pushImg);

    // if ($scope.portfolios[$scope.portfolio_name]) {
    //   $scope.portfolios = portfolios[$scope.portfolio_name];
    //   console.log($scope.portfolios);
    // } else {
    //   $scope.load_error_text = "Aaaargh! I can't find that darn portfolio matey!";
    // }

  });































