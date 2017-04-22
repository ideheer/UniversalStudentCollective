var providerListCtrl = function ($scope) {
    $scope.data = {
        providers: [{
            name: 'Cyril Figgis',
            address: '123 MacArthur Blvd, Oakland, CA 94609',
            rating: 5,
            attributes: ['Large','Sweet','Simple'],
            distance: '0.296456',
            _id: '1234a61f6529f4561f8dfb6a'
        }, {
            name: 'Sterling Archer',
            address: '232 Nob Hill Rd, San Francisco, CA 94707',
            rating: 4,
            attributes: ['Stealthy','Quick Witted','Alcoholic'],
            distance: '4.2323234234',
            _id: '5370a35f2536f6785f8dfb6a'
        }]
    };
};

angular
    .module('uscApp')
    .controller('providerListCtrl','providerListCtrl');