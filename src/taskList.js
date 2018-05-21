let taskListId = 0;

class TaskList {
  constructor(description) {
    this.id = ++taskListId;
    this.description = description;
  }

  render() {
    const li = document.createElement('li')
    li.innerText = this.description
    return li
  }
}
