colorBlocks.controller('SettingsController',['DataFactory','$scope', function(DataFactory, $scope) {
  console.log("settings controller running");
  var self = this;

     self.colors = DataFactory.colors;
     self.newColor='';
    self.$index=''
   self.addNewColor = function($index,colors){

       self.colors.push(self.newColor);

   console.log(self.colors);
return self.colors;
};
// self.remove = function($index,colors){
//
//     self.colors.splice($index,colors);
// self.colors.push(self.colors.input);
// console.log(self.colors);
// return self.colors;
// };






}]);
