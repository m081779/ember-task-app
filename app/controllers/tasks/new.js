import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function () {
      let title = this.get('title'),
          date = this.get('date'),
          description = this.get('description');
          // task = this.store.createRecord();
        alert(title,date,description);
      //new task

    }
  }
});
