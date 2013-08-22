﻿App.Store = DS.Store.extend({
	adapter: 'DS.FixtureAdapter'
 });
 
App.TodosRoute = Ember.Route.extend({
    model: function () {
        return App.Todo.find();
    }
});

/*
App.Store = DS.Store.extend({
    adapter: 'App.LSAdapter'
});

App.LSAdapter = DS.LSAdapter.extend({
    namespace: 'app-emberjs'
});
*/
