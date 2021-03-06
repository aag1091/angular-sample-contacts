angular.module('ContactsApp')
    .controller('ListController', function ($scope) {
        $scope.contacts = Contact.query();
        $scope.fields = ['firstName', 'lastName'];

        $scope.sort = function (field) {
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = 'firstName';
        $scope.sort.order = false;

    })