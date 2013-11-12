'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        // populate the event member of the $scope
        // object with an object of data. In a real app this
        // would be pulled from the server using ajax
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            imageUrl: '/img/angular.png',
            sessions: [
                {
                    name: "Directives Masterclass",
                    upVoteCount: 0
                },
                {
                    name: "Scopes for fun and profit",
                    upVoteCount: 0
                },
                {
                    name: "Well behaved controllers",
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        }

    });