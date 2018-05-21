document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description")
  const ul = document.getElementById('tasks')
  form.addEventListener("submit", e=>{
    e.preventDefault()
    const li = document.createElement('li')
    li.innerHTML = input.value +
    `<button data-description="${input.value}" name="button">X</button>`
    ul.append(li)
    input.value= ""
  })

});
