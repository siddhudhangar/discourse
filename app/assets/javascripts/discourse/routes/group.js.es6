export default Discourse.Route.extend({
  titleToken() {
    return [this.modelFor("group").get("name")];
  },

  model(params) {
    this._params = params;
    return this.store.find("group", params.name);
  },

  serialize(model) {
    return { name: model.get("name").toLowerCase() };
  },

  setupController(controller, model,params) {
    controller.setProperties({ model ,filterInput: this._params.filter});
    this.store.findAll('group', params).then(function(group) {
      controller.set('groups_model', group);
    });    
    
  }
});
