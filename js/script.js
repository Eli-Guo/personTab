var app = angular.module('myApp',[]);

app.controller('myCtrl',["$scope",function ($scope) {

    var Person = [
        {
            "firstName":"Allen",
            "lastName":"Merry",
            "gender":"male",
            "salary":12333.40,
            "birthday":"2001-03-11"
        },
        {
            "firstName":"Mick",
            "lastName":"Jack",
            "gender":"male",
            "salary":9333.40,
            "birthday":"1987-07-11"
        },
        {
            "firstName":"Lebren",
            "lastName":"Helln",
            "gender":"female",
            "salary":11233.10,
            "birthday":"2001-03-23"
        },
        {
            "firstName":"Bush",
            "lastName":"John",
            "gender":"male",
            "salary":16333.40,
            "birthday":"2003-03-11"
        }
    ];
    $scope.person = Person;
    $scope.txtfir = "";
    $scope.txtlas = "";
    $scope.ods    = "";
    $scope.dsc    = 0;
    $scope.event  = function (et) {
        this.ods = et;
        this.dsc = !this.dsc;
    };
    $scope.find   = function (val) {
        if ($scope.txtfir != ""){
            if(val.firstName.toLowerCase().indexOf($scope.txtfir.toLowerCase()) != -1){
                return true
            }else {
                return false
            }
        }else if($scope.txtlas != ""){
            if(val.lastName.toLowerCase().indexOf($scope.txtlas.toLowerCase()) != -1){
                return true
            }else {
                return false
            }
        }else if($scope.txtfir != "" && $scope.txtlas != ""){
            if(val.firstName.toLowerCase().indexOf($scope.txtfir.toLowerCase()) != -1 && val.lastName.toLowerCase().indexOf($scope.txtlas.toLowerCase()) != -1){
                return true
            }else {
                return false
            }
        }else {
            return true;
        }
    }

}]);