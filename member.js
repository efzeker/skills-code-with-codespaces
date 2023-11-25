function skillsMember(){
    return {
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: function($scope){
            $scope.member = {
                name: 'Member',
                skills: [
                    {name: 'HTML', level: 10},
                    {name: 'CSS', level: 10},
                    {name: 'Javascript', level: 10}
                ]
            };
        }
    };

}