import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr(),
  content: DS.attr(),
  dateCreated: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
