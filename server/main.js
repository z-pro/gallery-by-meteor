import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Pictures=new Mongo.Collection( 'pictures')