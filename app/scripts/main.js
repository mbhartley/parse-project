//console.log('\'Allo \'Allo!');

$(function(){
 
 Parse.initialize("75BmfRTZaHEhjFi2LGcwwpBSs9R2lavh3hDCwQtd", "j2gNcLny1ubShHclT3cPIA6PH06SDYRolgk4mflU");

 console.log ('parse initialize firing')

 var Contact = Parse.Object.extend('Contact');

 var contact = new Contact();

 contact.set('name', Matt Hartley);

 contact.save();

})


 var name = $('input[name=name]');
 var city = $('input[city=city]');
 var email = $('input[email=email]');

