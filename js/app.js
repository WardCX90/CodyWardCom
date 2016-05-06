// DEFINE APP
var myApp = angular.module('myApp',[]);

// HEADER CONTROLLER
myApp.controller('headerController', ['$scope', function($scope) { 
    $scope.header = 'svg/header.svg';
}]);

// NAV CONTROLLER
myApp.controller('navController', ['$scope', function($scope) {
    $scope.nav = [
        {fa: "fa-home", link: "index.html", label: " Home"},
        {fa: "fa-code", link: "#web-developement", label: " Web Developement"},
        {fa: "fa-paint-brush", link: "#digital-designs", label: " Digital Designs"},
        {fa: "fa-plus-square", link: "#branding", label: " Branding"},
        {fa: "fa-graduation-cap", link: "#education", label: " Education"},
        {fa: "fa-trophy", link: "#awards", label: " Awards"},
        {fa: "fa-briefcase", link: "#employment", label: " Employment"}
    ];
}]);

// WEB DEVELOPMENT CONTROLLER
myApp.controller('webController', ['$scope', function($scope) {
    $scope.section = [
        {
            link: "http://www.shyanneward.com", 
            imageSource: "svg/browser-shyanne.svg", 
            tileTitle: "www.shyanneward.com", 
            tileText: "This was a project I completed for my wife for her marketing business."
        },
        
        {
            link: "#", 
            imageSource: "svg/browser-digital-graphx-shop.svg", 
            tileTitle: "COMING SOON!", 
            tileText: "This is a Drupal Commerce site that is currently in the planning stage."
        },
        
        {
            link: "#", 
            imageSource: "svg/browser-aplus-services.svg", 
            tileTitle: "FUTURE PROJECT!", 
            tileText: "This is a project for my mother's business. This project is currently on hold."
        }
    ];
}]);

// DIGITAL DESIGNS CONTROLLER
myApp.controller('designController', ['$scope', function($scope) {
    $scope.section = [
        {  
            link: "img/digital-dfts.jpg",
            imageSource: "svg/digital-dfts.svg", 
            tileTitle: "DFT Design Scheme", 
            tileText: "This is a set of sample DFT patches that I designed as a proof of concept."
        },
        
        {
            link: "img/digital-ticket.jpg",
            imageSource: "svg/digital-ticket.svg", 
            tileTitle: "Zeta Phi Beta Ticket", 
            tileText: "I created this ticket at the request of Dr. Linda Logan, the Dean of Student Life at Olivet College."
        },
        
        {
            link: "img/digital-pinkpapaya.jpg",
            imageSource: "svg/digital-pinkpapaya.svg", 
            tileTitle: "Pink Papaya Marketing", 
            tileText: "I created these markerting items for my wife's marketing business."
        }
    ];
}]);

// BRANDING CONTROLLER
myApp.controller('brandingController', ['$scope', function($scope) {
    $scope.section = [
        {
            imageSource: "svg/branding-digital-graphx.svg", 
            tileTitle: "Digital Graphx", 
            tileText: "This Digital Graphx 'DG' logo was created for my business back in 2012."
        }, 
        
        {
            imageSource: "svg/branding-csc.svg", 
            tileTitle: "Computer Science Club", 
            tileText: "This 'CSC' logo was created for the CS Club at Olivet College in 2010."
        },
        
        {
            imageSource: "svg/branding-mv.svg", 
            tileTitle: "Maple Valley", 
            tileText: "This 'MV' logo was create as a proof of concept for my High School."
        }
    ];
}]);

// EDUCATION CONTROLLER
myApp.controller('educationController', ['$scope', function($scope) {
    $scope.section = [
        {
            link: "http://www.mvs.k12.mi.us", 
            imageSource: "svg/edu-mv.svg", 
            tileTitle: "Maple Valley HS", 
            tileText: "I graduated from Maple Valley Jr./Sr. High School in 2007. I played Soccer, Football and Baseball for the Lions."
        }, 
        
        {
            link: "http://www.olivetcollege.edu", 
            imageSource: "svg/edu-oc.svg", 
            tileTitle: "Olivet College", 
            tileText: "I originally went to Olivet College for atheletics. My focus quickly switched to academics and I graduated in the spring of 2012."
        },
        
        {
            link: "http://www.gatech.edu",
            imageSource: "svg/edu-gt.svg",
            tileTitle: "Georgia Tech", 
            tileText: "I will start attending Geogia Tech in the Fall of 2016, where I will be pursuing my masters degree in Computer Science."
        }
    ];
}]);

// AWARDS CONTROLLER
myApp.controller('awardsController', ['$scope', function($scope) {
    $scope.section = [
        {
            link: "img/legacy-award.jpg",
            imageSource: "svg/award-seal.svg", 
            tileTitle: "Legacy Award", 
            tileText: "In recognition of serving with great distrintion on the Campus Activties Board."
        }, 
        
        {
            link: "img/freshman-award.jpg",
            imageSource: "svg/award-seal.svg", 
            tileTitle: "Freshman Leadership", 
            tileText: "This award is given to qualified students who have embodied the principles of the campus compact, the mission of the college, and have demonstrated exemplary Student Life leadership skills."
        },
        
        {
            link: "img/multicultural-award.jpg",
            imageSource: "svg/award-seal.svg", 
            tileTitle: "Multicultural Leadership", 
            tileText: "In recognition of your tireless commitment to the projects of the Office of Multicultural Educaiton and Initiatives and students of color organizations."
        }
    ];
}]);

// EMPLOYMENT CONTROLLER
myApp.controller('employmentController', ['$scope', function($scope) {
    $scope.section = [
        {
            link: "http://olivetcollege.edu/campus-life",
            imageSource: "svg/job-olivetcollege.svg", 
            tileTitle: "Olivet College, Manager", 
            tileText: "I was hired as a manager for the African-American Cultural Center."
        },
        
        {
            link: "http://www.bestbuy.com",
            imageSource: "svg/job-bestbuy.svg", 
            tileTitle: "Best Buy, Sales", 
            tileText: "I worked in the Front Lanes, Home Office and Mobile Sales."
        },
        
        {
            link: "http://www.ibm.com",
            imageSource: "svg/job-ibm.svg", 
            tileTitle: "IBM, Developer", 
            tileText: "I was hired as a Java Developer. I am Currently working as a Front-End Developer."
        }
    ];
}]);

// FOOTER CONTROLLER
myApp.controller('footerController', ['$scope', function($scope) {
    $scope.footer = [
        {url: "https://github.com/WardCX90", id: "gitHub", fa: "fa-github", class: "", alt: "GitHub Link"},
        {url: "https://stackoverflow.com/users/6267090/wardcx90", id: "stackOverflow", fa: "fa-stack-overflow", class: ""},
        {url: "https://codepen.io/WardCX90/", id: "codepen", fa: "fa-codepen", class: ""},
        {url: "https://www.drupal.org/u/wardcx90", id: "drupal", fa: "fa-drupal", class: ""},
        {url: "https://www.linkedin.com/in/wardcx90", id: "linkedIn", fa: "fa-linkedin", class: ""},
        {url: "https://twitter.com/wardcx90", id: "twitter", fa: "fa-twitter", class: ""},
        {url: "https://www.facebook.com/WardCX90", id: "facebook", fa: "fa-facebook", class: ""},
        {url: "https://plus.google.com/u/1/118293986281891953780", id: "googlePlus", fa: "fa-google-plus", class: ""}
    ];
}]);
