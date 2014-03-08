/*set up a constructor for a Parse object (think Backbone Model)
and also set up a Collection for said object*/

var Contact = Parse.Object.extend("Contact");

var ContactListCollection = Parse.Collection.extend({
  model: Contact,
  })