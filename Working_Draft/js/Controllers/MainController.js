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
    name: 'Coming soon',
	  bio: '',
	  portrait: {
		  large: '',
	      small: '' 
	  }
	}, {
	  name: 'Coming soon',
	  description: '',
	  bio: '',
	  portrait: {
		  large: '',
		  small: '' 
	  }
	}];
	
	$scope.fellows = [{
	  name: 'Jeremy Cohen',
	  bio: 'Jeremy Cohen is CEO & Manager of On The Grind Management LLC. In 2000, Jeremy became ' +
         'involved in the music industry through playing in local bands and becoming a recording ' +
         'engineer. In 2003, he opened up Back Alley Recording Studios in Chicago, IL. After two ' +
         'years of recording voice-overs and bands of varying genres, he left the recording studio. ' +
         'In 2005, Jeremy embarked on a six-month+ tour with Oakland, CA-based hard rock band, All ' +
         'Shall Perish. On tour, Jeremy handled the responsibilities of playing bass guitar, tracking ' +
         'band merchandise, confirming bookings, reporting record sales to Nuclear Blast Records and ' +
         'Nielsen SoundScan, and securing booking & guarantee money.\n\n	In 2006-07, Jeremy worked in ' +
         'the marketing department of the largest global law firm, DLA Piper. In 2009, Jeremy ' +
         'graduated from Columbia College Chicago with a Sports Management B.A. The culmination of ' +
         'his experience gives Jeremy Cohen a balanced background in producing, performing, marketing, ' +
         'and management. Jeremy is currently running operations at the OTG LA office and handling the ' +
         'careers of producer D Phelps and recording artists BK Bambino, Sir the Baptist & more.',
	  portrait: {
		  large: 'Images/Artists/jeremy_cohenL.jpg',
		  small: '' 
	  }
	}, {
	  name: 'Que Billah',
    bio: 'Que Billah grew up on the west side of Chicago, Austin Area. Son of one of the original ' +
         '16 st Vice Lords. At an early age Que found sports and the arts two things that helped ' +
         'him steer clear of trouble in the streets. Forced to sit out for the season his senior ' +
         'year due to injury, Que decided to work harder at song writing & emceeing.\n\nWith an ' +
         'uncanny gift for entertaining Que caught the ear of radio personality Trey the Choklit ' +
         'Jok ( Power 92) who let him hang out at the station and soak up some industry contacts. ' +
         'After a few years of networking and putting in work in the studio, Que Billah hit the open ' +
         'mic circuit and developed a cult following which eventually lead to paid shows, 20,000 ' +
         'mixtapes sold in the streets and a feature in The Source Magazine.\n\nBeing a native to ' +
         'Chicago Que Billah is heavily influenced by Common and Knaye but people say his style is a ' +
         'Common Kanye hybrid laced with a lil Jay-z.\n\nIn the past few years Que Billah has opened ' +
         'for: Wu-Tang,Lupe Fiasco, Wiz Kalifa,Ludacris, Talib Kweli,Rakin, KRS1,Twista,Slum Village',
    portrait: {
      large: 'Images/Artists/que_billah.jpg',
      small: '' 
    }
  }, {
    name: 'Jake Krzeczowski',
    bio: 'Jake Krzeczowski (Jake Krez) is a 25-year-old writer and media entrepreneur living and ' +
         'working in the Chicago music scene. Since breaking into the scene in 2012 while writing ' +
         'for the Chicago Sun-Times, Jake has helped break talents like Chance The Rapper, Vic ' +
         'Mensa, Saba and a who\'s who of talent big and small while working with outlets like XXL, ' +
         'Noisey, Complex, Smoking Section and many more. Jake also runs Side By Side PR which has ' +
         'represented Brian Fresco, Taylor Bennett, MC Tree and Leaders 1354 among many others and ' +
         'he also manages local band The O\'My\'s. Through and through Jake helps to move the scene ' +
         'forward by letting those outside it know what\'s happening on the ground floor.',
     portrait: {
       large: 'Images/Artists/jake_krzeczowski.jpg',
       small: ''
     }
  }, {
    name: 'Harry Kraemer',
    bio: 'Harry Kraemer, Jr. is professor of management and strategy at Northwestern University\’s ' +
         'Kellogg School of Management, where he teaches in the MBA and the Executive MBA programs. ' +
         'Additionally, he is an executive partner with Madison Dearborn Partners (MDP), one of the ' +
         'largest private equity firms in the United States where he consults with CEOs and other ' +
         'senior executives of companies in MDP\’s extensive portfolio. Harry is the former chairman ' +
         'and chief executive officer of Baxter International Inc., a multi-billion-dollar global ' +
         'healthcare company. He was voted by the students at Kellogg as the Professor of the Year ' +
         'in 2008 and was a finalist for the award in 2014.',
     portrait: {
       large: 'Images/Artists/harry_kraemer.jpg',
       small: ''
     }
  }, {
    name: 'DRUNKEN MONKEE',
    bio: 'Who is Drunken Monkeee? The world may never know. Who is this superhero that\'s known ' +
         'for his ultimate live shows? They say he lives outside of the box, but Chicago was just ' +
         'not ready for the musical anomaly that took place in the summer of 1998. Far from the ' +
         'average emcee: an outbreak, a new breed, a new beginning of Chicago Hip Hop. He\'s not ' +
         'underground. He\'s not mainstream. Once called Chicago\'s Wildest, Drunken Monkeee has ' +
         'established himself to be one of the most creative performers to ever come out of the ' +
         'Midwest. He is everything that your favorite artist wishes they could be. A writer, a ' +
         'composer, event host/event producer, radio personality, artist mentor teacher,actor/' +
         'director, and the proud CEO of Tweak Central Academy Entertainment. He is the man, the ' +
         'myth, the legend...DRUNKEN MONKEEE\n\nDrunken Monkeee\'s Epk\n\nAFFILATIONS/PERFORMANCES' +
         '\n\nDrunken Monkeee has opened up for Erykah Badu, Slum Village, Redman & Method Man, ' +
         'Hypnotic Brass Ensemble, Keith Murray, Dwele, Fabulous, Kidz in the Hall,Common,' +
         'Grandmaster Theodore, The Cool Kids, GLC, Pslam One, Pugz Atoms, Qwel and Maker, The ' +
         'Alchemist, Evidence ( of Dilated Peoples )  Last Poets, Sadat X,  Rhymefest, Dead Prez, ' +
         'Barrington Levy, Ghostface Killah, Slick Rick, Spice 1, Mc Eiht, PMD (Of EPMD ) and ' +
         'even hosted  venues with Twista, Mike Jones, K-os, Dj Diplo ( Major Laser),Jeru Tha ' +
         'Damja, Masta Ace, Marco Polo, Super model/actress Joy Bryant, Akira Chicago Fashion  ' +
         'Boutique, Marry To The Mob Nyc,Shaolin Temple Monk Sifu Shi Yan Ming, Christian Rich, ' +
         'Nuyorican Poets Cafe, and Chicago Public Schools.People have likened Drunken Monkeee\'s ' +
         'sound to that of Cee-Lo Green, Busta Rhymes, Redman, Issac Hayes,and Ol\' Dirty Bastard.' +
         '\n\nDrunken Monkeee\'s links:\n' +
         'www.soundclound.com/drunkenmonkeee\n' + 
         'www.reverbnation.com/drunkenmonkeee\n' +
         'http://drunkenmonkeee1980.bandcamp.com\n' +
         'http://www.youtube.com/watch?v=B9cFpHgLvZw',
     portrait: {
       large: 'Images/Artists/drunken_monkeee_2.jpg',
       small: ''
     }
  }, {
    name: 'RJ Eldridge',
    bio: 'RJ Eldridge is a writer, emergent multidisciplinary artist, curator, educator and ' +
         'thinker. A graduate of the University of South Florida’s Master’s program in Africana Studies, ' +
         'where he focused on literature and theory, Eldridge has engaged widely on the role of ' +
         'the arts in the construction of identity, and seeks to expand the dimensions of contemporary ' +
         'discussion on the intersections between performance, history, race, ontology and myth. His ' +
         'current projects inquire about the politics of millennial identity, contemporary ' +
         'racial literacy, and the power of the image to shape and be shaped by both.\n\nEldridge ' +
         'has instructed at the University of South Florida and the Noble Network Charter ' +
         'Schools, and has served as a teaching artist with several notable organizations, ' +
         'including Young Chicago Authors, Chicago Slam Works, Chicago Danztheatre and the ' +
         'Storyographers. He made a national television debut in September 2013 as a performer ' +
         'in the NAACP Image-Award nominated series, Lexus Presents: Verses and Flow, and stars ' +
         'in the upcoming short film Akata.\n\nHe currently resides in Chicago.',
    portrait: {
      large: 'Images/Artits/reginald_eldridge.jpg',
      small: ''
    }   
  }];
	
//	$scope.fellows = [{
//	  name: 'Coming soon',
//	  bio: '',
//	  portrait: {
//		large: '',
//		small: '',
//	  }
//	}, {
//	  name: 'Coming soon',
//	  bio: '',
//	  portrait: {
//		large: '',
//		small: '',
//	  }
//	}];

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
