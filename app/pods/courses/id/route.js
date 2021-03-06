import Route from '@ember/routing/route';

export default Route.extend({
    activate () {
      window.scrollTo(0,0);
    },
    model (params) {
        return this.store.findRecord("course", params.courseId, {reload: true})
    },
    setupController(controller, model) {
        this._super(...arguments)
        controller.set("course", model)
    }
 });
