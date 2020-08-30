var stripe = Stripe('pk_test_51HLuCxB5KXf94lpnx37u9aSW9XsJMoZq4AtHuWPwkmiiClHXblWTayN0TiHKIPiz4lQZOZRG8gPlOBprmCPGmXEW00ATWbbYNz');

var $form = $('#checkout-form');

$form.submit(function(e){
    // $form.find('button').prop('disabled', true)
    e.preventDefault();
})