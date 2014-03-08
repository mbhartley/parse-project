$(function(){
 
  Parse.initialize("75BmfRTZaHEhjFi2LGcwwpBSs9R2lavh3hDCwQtd", "j2gNcLny1ubShHclT3cPIA6PH06SDYRolgk4mflU");
  
  /*on page load, instantiate a new ContactListCollection*/
  window.contactList = new ContactListCollection();

  /*on page load, fetch the collection from Parse cloud server
  and, on successful fetch, instantiate a new ContactView,
  passing the contactList model through the view; this will load 
  the currently saved data from Parse*/
    contactList.fetch({
    success:function(){
      contactList.each(function(contactList){
        new ContactView({model: contactList})
      })
    }
  })

//On click of submit button, after input fields are filled in: saveContact function is called
  $('.submit').click(function() {
    saveContact();
  })
//also, on click of submit button:
  function saveContact() {
//instantiate Parse.Object.extend (same as a model in Backbone)
    var contact = new Contact;
//capture the values of the input fields via JQuery awesomeness
    var name = $('.name').val();
    var city = $('.city').val();
    var email = $('.email').val();
//set the values of input fields as values in our contact object instantiated 2 steps above
    contact.set("name", name);
    contact.set("city", city);
    contact.set("email", email);

/*Save function: on successful save: log success message, instantiate ContactView and pass in the model,
clear each of the input values; if error, log error message*/
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

  






