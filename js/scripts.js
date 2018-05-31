$(document).ready(function(){

$("#orderForm").submit(function(event){

  event.preventDefault();

  var nameInput = $("input#name").val();
  var streetInput = $("input#addressStreet").val();
  var cityInput = $("input#addressCity").val();
  var stateInput = $("select#addressState").val();
  var zipInput = $("input#addressZip").val();
  var sizeInput = $("select:radio[name=size]:checked").val();
  var numberInput = $("input#numberOfShirts").val();

  $(".confirmName").text(nameInput);
  $(".confirmStreet").text(streetInput);
  $(".confirmCity").text(cityInput);
  $(".cofirmState").text(stateInput);
  $(".confirmZip").text(zipInput);
  $(".confirmSize").text(sizeInput);
  $(".confirmNumber").text(numberInput);

  $("#orderConfirmation").show();

})

})
