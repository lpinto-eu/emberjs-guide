App.Router.map(function () {
    this.resource('todos', { path: '/' }, function () {
        // additional child routes
        });
    });

    // ... additional lines truncated for brevity ...

    App.TodosIndexRoute = Ember.Route.extend({
        model: function () {
        return App.Todo.find();
    }
});