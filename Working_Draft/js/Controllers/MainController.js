var app = angular.module('RowCypher.controllers', []);

app.controller('MainController', ['$scope', '$modal', function($scope, $modal){

  $scope.open = function (selectedPerson) {

    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        person: function () {
          return selectedPerson;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  
	$scope.students = [{ 
      name: 'person',
	  bio: 'description',
	  portrait: {
		  large: '',
	      small: '' 
	  }
	}, {
	  name: 'person',
	  description: 'description',
	  bio: '',
	  portrait: {
		  large: '',
		  small: '' 
	  }
	}];
	
	$scope.guestFellows = [{
	  name: 'Jeremy Cohen',
	  bio: '	Jeremy Cohen is CEO & Manager of On The Grind Management LLC. In 2000, Jeremy became involved in the music industry through playing in local bands and becoming a recording engineer. In 2003, he opened up Back Alley Recording Studios in Chicago, IL. After two years of recording voice-overs and bands of varying genres, he left the recording studio. In 2005, Jeremy embarked on a six-month+ tour with Oakland, CA-based hard rock band, All Shall Perish. On tour, Jeremy handled the responsibilities of playing bass guitar, tracking band merchandise, confirming bookings, reporting record sales to Nuclear Blast Records and Nielsen SoundScan, and securing booking & guarantee money.\n	In 2006-07, Jeremy worked in the marketing department of the largest global law firm, DLA Piper. In 2009, Jeremy graduated from Columbia College Chicago with a Sports Management B.A. The culmination of his experience gives Jeremy Cohen a balanced background in producing, performing, marketing, and management. Jeremy is currently running operations at the OTG LA office and handling the careers of producer D Phelps and recording artists BK Bambino, Sir the Baptist & more.',
	  portrait: {
		  large: 'Images/jeremy_cohenL.jpg',
		  small: '' 
	  }
	}, {
	  name: 'Detective Magoo',
    bio: 'A bumbling detective',
    portrait: {
      large: '',
      small: '' 
    }  
	}];
	
	$scope.fellows = [{
	  name: 'test pep 1',
	  bio: '',
	  portrait: {
		large: '',
		small: '',
	  }
	}, {
	  name: 'test pep 2',
	  bio: '',
	  portrait: {
		large: '',
		small: '',
	  }
	}];

  $scope.submitApplication = function(){  
    var params = 
      { 
        fname: $scope.fname,
        lname: $scope.lname,
        DOB: $scope.DOB,
        email: $scope.email,
        phone: $scope.phone,
        nomPartner: $scope.nomPartner,
        education: $scope.education,
        interest: $scope.interest,
        frequency: $scope.frequency 
     } 
    $http.post('scripts/application.php', params)
      .success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data + "\n" +  status);
      })
      .error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(data + "\n" + status); 
      });
  }

  $scope.subscription = function(){
    $http.post('scripts/emailSub.php', $scope.emailSub)
      .sucess(function(data, status, headers, config){
        console.log(data + "\n" + status)
      })
      .error(function(data, status, headers, config){
        console.log(data + "\n" + status)
      })  
  }

}]);

app.controller('ModalInstanceCtrl', function($scope, $modalInstance, person) {
  $scope.person = person;
  
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
      $scope.gotoBottom = function() {
        $location.hash('bottom');
        $anchorScroll();
      };
    }]);
