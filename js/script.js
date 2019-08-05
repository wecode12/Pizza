function Pizza(name, crust, size, topping, priceC, priceS, priceT) {
  this.name = name
  this.crust = crust
  this.size = size
  this.topping = topping
  this.crustP = priceC
  this.sizeP = priceS
  this.toppingP = priceT
};

   Pizza.prototype.total= function () {return this.crustP + this.sizeP+ this.toppingP;
};

var delivery=1500;
Pizza.prototype.totalFull= function () {return this.total()+delivery;
};
$(document).ready(function () {
$('#Submitorder').click(function (event) {
    event.preventDefault();
    var inputName = $('#name').val()
      var inputCrust = $('#tap option:selected').text();
      var inputSize = $('#test option:selected').text();
      var inputTopping = $('#tip option:selected').text();
      var inputCrustPrice = parseInt($('#tap option:selected').val());
      var inputToppingPrice = parseInt($('#tip option:selected').val());
      var inputSizePrice = parseInt($('#test option:selected').val());
      
      var newPizza = new Pizza(inputName, inputCrust, inputSize, inputTopping, inputCrustPrice, inputSizePrice, inputToppingPrice);
      console.log(newPizza.sizeP)
      console.log(newPizza.crust)
      $('.name').text(newPizza.name);
      $('.size').text(newPizza.size);
      $('.topping').text(newPizza.topping);
      $('.crust').text(newPizza.crust); 
      $('.sizeP').text(newPizza.sizeP);
      $('.toppingP').text(newPizza.toppingP);
      $('.crustP').text(newPizza.crustP);
      $('.totalP').text(newPizza.total());
      $('.deliveryP').text('1500');
      $('.costP').text(newPizza.totalFull());
      $('.del').click(function(){
        var promp= prompt('your location please: ')
        alert('your pizza willbe delivered to: '+ promp)
      });});});
     
  

      // $('.deliveryP').text('1500');
      // $('.costP').text(newPizza.totalFull());});});