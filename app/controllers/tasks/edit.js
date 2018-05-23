import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editTask: function (id) {
      let title = this.get('model.title'),
          date = this.get('model.date'),
          description = this.get('model.description'),
          self = this;
       //update task
      this.store.findRecord('task', id).then(function (task){
        task.set('title', title);
        task.set('description', description);
        task.set('date', new Date(date));
        //save to database
        task.save();
        self.transitionToRoute('tasks');
        // return false;
      });
    }
  }
});
