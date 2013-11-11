'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        // populate the event member of the $scope
        // object with an object of data. In a real app this
        // would be pulled from the server using ajax
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am'
        }

    });