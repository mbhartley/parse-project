//console.log('\'Allo \'Allo!');

$(function(){
 
  Parse.initialize("75BmfRTZaHEhjFi2LGcwwpBSs9R2lavh3hDCwQtd", "j2gNcLny1ubShHclT3cPIA6PH06SDYRolgk4mflU");

  console.log ('parse initialize firing')

  var Contact = Parse.Object.extend('Contact');

  var contact = new Contact();

  contact.set("contactName", "Matt Hartley");
  contact.set("contactCity", "Greenville");
  contact.set("email", "mbhartley1490@gmail.com");

  //contact.save(null, {
  //	success: function(contactList){
  //	  console.log('New object created with objectID' + contact.id);
  //	},
  //	error: function(contactList, error){
  //	  console.log('Failed to create new object, with error code' + error.description);	
  //	}

  //});

})