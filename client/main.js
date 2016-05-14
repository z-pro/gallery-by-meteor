import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';
import {
  Meteor
} from 'meteor/meteor';



import './main.html';

import './main.css';


if (Meteor.isClient) {


  Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
  });

  Template.hello.helpers({
    counter() {
      return Template.instance().counter.get();
    }

  });





  Template.hello.events({
    'click button' (event, instance) {
      // increment the counter when button is clicked
      //instance.counter.set(instance.counter.get() + 1);


      MeteorCamera.getPicture({}, function(err, r) {

        if (err) {
          alert(err.message)
        } else {
          // Posts = new Mongo.Collection("posts");
          // Posts.insert({title: "Hello world", body: "First post"});
          this.Pictures.insert({
            times: new Date(),
            pic: r
          })
        }

      })

    }

  });

  Template.info.events({
    'click a.item-img' (event, instance) {


      if (window.confirm("do u really wanna delete this picture?")) {

        Pictures.remove({
          _id: $(event.currentTarget).attr("id")
        })

      }




    }



  })

  Template.info.helpers({

    pictures: function() {

      return Pictures.find({}, {
        sort: {
          times: -1
        }
      })
    }
  })

}

// if  Meteor.isClient

// Template.hello.events
// 	'':->
// 	Session.set 'counter',Session.get('counter')+1