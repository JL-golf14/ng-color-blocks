colorBlocks.controller('SettingsController',['DataFactory','$scope', function(DataFactory, $scope) {
  console.log("settings controller running");
  var self = this;
   self.colors = DataFactory.colors;
   self.newColor='';

   self.addNewColor = function(){

       self.colors.push(self.newColor);

   console.log(self.colors);
return self.colors;
};








}]);
