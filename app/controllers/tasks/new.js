import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function () {
      let title = this.get('title'),
          date = this.get('date'),
          description = this.get('description');
       

      //new task
      let newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)
      });

      //save to database
      newTask.save();

      //Clear form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });
    }
  }
});
