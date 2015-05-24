angular.module('directiveExemple',[])
    .controller('main', function($scope) {
        $scope.example = {
            field1: 'filed1',
            field2: 'field2',
            field3: { name: 'aSubItem' }
        };
        $scope.values = [{
              id: 1,
              label: 'aLabel',
              subItem: { name: 'aSubItem' }
            }, {
              id: 2,
              label: 'bLabel',
              subItem: { name: 'bSubItem' }
            }];
    })
    .directive('selectMater', function() {
        return {
            require: 'ngModel',
            link: function (scope,element, attrs, ngModel) {
                $(window).load( function() {
                    $(element[0]).material_select();
                });
                
            }
        };
        
    });