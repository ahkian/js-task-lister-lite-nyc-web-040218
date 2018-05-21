
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description")
  const ul = document.getElementById('tasks');

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskList = new TaskList(input.value);
    ul.append(taskList.render());
  });

});
