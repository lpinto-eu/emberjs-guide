﻿App.TodosController = Ember.ArrayController.extend({

	hasCompleted: function () {
	  return this.get('completed') > 0;
	}.property('completed'),

	completed: function () {
	  return this.filterProperty('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	clearCompleted: function () {
	  var completed = this.filterProperty('isCompleted', true);
	  completed.invoke('deleteRecord');

	  this.get('store').commit();
	},

    createTodo: function () {
        // Get the todo title set by the "New Todo" text field
        var title = this.get('newTitle');
        if (!title.trim()) { return; }

        // Create the new Todo model
        var todo = App.Todo.createRecord({
              title: title,
              isCompleted: false
        });

        // Clear the "New Todo" text field
        this.set('newTitle', '');

        // Save the new model
        todo.save();
    },

    remaining: function () {
        return this.filterProperty('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function () {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items';
    }.property('remaining'),
	
	allAreDone: function (key, value) {
        return !!this.get('length') && this.everyProperty('isCompleted', true);
	}.property('@each.isCompleted')
});