App.Store = DS.Store.extend({
    adapter: 'DS.FixtureAdapter'
});

App.TodosRoute = Ember.Route.extend({
    model: function () {
        return App.Todo.find();
  }
});