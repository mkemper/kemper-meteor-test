Articles = new Meteor.Collection("articles");
Authors = new Meteor.Collection("authors");

if (Meteor.is_client) {
  Template.looserboard.article= function () {
    return Articles.find({});
  };
  Template.testApp.events = {
    'click span': function () {
      Articles.remove({_id: this._id});
    }
  };	


  Template.entry.authors = function() {
    return Authors.find({});
  }

  Template.entry.events = {
    'keyup input': function (evt) {
      var authorname = document.getElementById('select_author');
      var messagecontent = document.getElementById('message');
      
      if (evt.type === "keyup" && evt.which === 13) {     
      Articles.insert({author: authorname.value, text: messagecontent.value});
      document.getElementById('message').value = "";
    }
    }
  };

}

if (Meteor.is_server) {
  Meteor.startup(function () {
      // code to run on server at startup
      });
}
