  portfolioApp.controller("PortfolioListController", function($scope, $firebaseAuth, $firebaseArray, $firebaseObject, FIREBASE_URL){

    $scope.portfolios = [];

    var ref = new Firebase(FIREBASE_URL);
    var postRef = ref.child('portfolios');
    $scope.portfolios = $firebaseArray(postRef);

    var imageupped;

    $scope.addImage = function( new_image ){
      filepicker.setKey("AgTJpb5i3RlKpbtqVuZSAz");

      filepicker.pick(
      {
        mimetypes: ['image/*', 'text/plain'],
        container: 'window',
        services:['COMPUTER'],
      },
      function(Blob){
        console.log(JSON.stringify(Blob));
        imageupped = Blob.url;
      },
      function(FPError){
        console.log(FPError.toString());
      }
      )};



      $scope.addPortfolio = function( new_portfolio ) {
        console.log('madeit');
      // $scope.portfolios.push( new_portfolio );
      var pushRef = new Firebase(FIREBASE_URL + '/portfolios');

      pushRef.push({
        name: new_portfolio.name,
        creationdate: Firebase.ServerValue.TIMESTAMP,
        date: new_portfolio.date,
        title: new_portfolio.title,
        description: new_portfolio.description,
        imageurl: imageupped
      });

      $scope.add_portfolio = {};
    };

  });
