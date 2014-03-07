var ContactView = Parse.View.extend({

  className: 'my-contacts',

  contactTemplate: _.template($('#contact-list-template').text()),

  initialize: function(){
  	$('.contact-list').prepend(this.el);
  	this.render();
  },

  render: function(){
  	var renderedContactTemplate = this.contactTemplate({model: this.model});
  	this.$el.html(renderedContactTemplate);
  }

})