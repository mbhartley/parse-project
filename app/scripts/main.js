$(function(){
 
  Parse.initialize("75BmfRTZaHEhjFi2LGcwwpBSs9R2lavh3hDCwQtd", "j2gNcLny1ubShHclT3cPIA6PH06SDYRolgk4mflU");

  console.log ('parse initialize firing');

  window.contactList = new ContactListCollection();

    contactList.fetch({
    success:function(){
      contactList.each(function(contactList){
        new ContactView({model: contactList})
      })
    }
  })

//On click: saveContact function is called
  $('.submit').click(function() {
    saveContact();
  })
//On click: capture the value of input fields- name, city, email
//  then set them as values of the object Contact
  function saveContact() {
    //var Contact = Parse.Object.extend("Contact");
    var contact = new Contact;

    var name = $('.name').val();
    var city = $('.city').val();
    var email = $('.email').val();
  
    contact.set("name", name);
    contact.set("city", city);
    contact.set("email", email);
//On click: save the data on Parse cloud sever; on success, clear the input values
//  and log success message; on fail, log error message
  contact.save(null, {
    success: function(contactList){
      console.log('New object created with objectID' + contact.id);
      new ContactView({model: contactList});
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

  






