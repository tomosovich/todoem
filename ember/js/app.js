/*global Ember, DS, Todos:true */
window.Todos = Ember.Application.create();


/* Point Adapter to Rails Backend */
  Todos.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:3000'
  });
