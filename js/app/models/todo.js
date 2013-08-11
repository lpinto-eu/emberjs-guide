﻿App.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

App.Todo.FIXTURES = [
 {
    id: 1,
    title: 'Learn Ember.js',
    isCompleted: true
 },
 {
    id: 2,
    title: 'Develop...',
    isCompleted: false
 },
 {
    id: 3,
    title: 'Profit!!',
    isCompleted: false
 }
];