//
Articles = new Meteor.Collection("articles");

if (Meteor.is_client) {
  Template.looserboard.content = function () {
    return Articles.find({});
  };
  Template.testApp.events = {
    'click input.del': function () {
      Articles.remove({_id: this._id});
    }
  };	


  Template.entry.authors = function() {
    return Articles.find({});
  }

  Template.entry.events = {
    'click input.snd': function () {
      var authorname = document.getElementById('select_author');
      var messagecontent = document.getElementById('message');
      console.log(authorname.value);
      console.log(messagecontent.value);
      Articles.insert({author: authorname.value, text: messagecontent.value});
    }
  };

}

if (Meteor.is_server) {
  Meteor.startup(function () {
      // code to run on server at startup
      });
}
