//console.log('\'Allo \'Allo!');

$(function(){
 
  Parse.initialize("75BmfRTZaHEhjFi2LGcwwpBSs9R2lavh3hDCwQtd", "j2gNcLny1ubShHclT3cPIA6PH06SDYRolgk4mflU");

  console.log ('parse initialize firing')

  $('.submit').click(function() {
    saveContact();
  })

  function saveContact() {
    var Contact = Parse.Object.extend("Contact");
    var contact = new Contact;

    var name = $('.name').val();
    var city = $('.city').val();
    var email = $('.email').val();
  
    contact.set("name", name);
    contact.set("city", city);
    contact.set("email", email);


  contact.save(null, {
    success: function(contactList){
      console.log('New object created with objectID' + contact.id);
      var name = $('.name').val('');
      var city = $('.city').val('');
      var email = $('.email').val('');

    },
    error: function(contactList, error){
      console.log('Failed to create new object, with error code' + error.description);  
    }
  })

  }  
})



 //var name = $('input[name=name]');
 //var city = $('input[city=city]');
 //var email = $('input[email=email]');

  






