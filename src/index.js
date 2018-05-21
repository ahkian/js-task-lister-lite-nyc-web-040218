document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description")
  const ul = document.getElementById('tasks')
  form.addEventListener("submit", e=>{
    e.preventDefault()
    let li = document.createElement('li')
    li.innerText = input.value
    ul.append(li)
    input.value= ""
  })
});
