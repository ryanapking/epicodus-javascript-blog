import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  dateCreated: DS.attr(),
  imageURL: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
