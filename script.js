// Order Modal
const orderNowBtn = document.getElementById("orderNowBtn");
const orderModal = document.getElementById("orderModal");
const closeModalBtn = document.getElementById("closeModalBtn");

orderNowBtn.addEventListener("click", () => {
  orderModal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  orderModal.classList.add("hidden");
});

// Todos Logic
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// Todos stored as objects
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Render Todos
function renderTodos() {
  todoList.innerHTML = "";

  // Check if todos is empty
  todos.length === 0
    ? (todoList.innerHTML = '<p class="text-gray-500">No todos yet!</p>')
    : todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className =
          "bg-white p-2 mb-2 rounded shadow flex justify-between items-center";

        // Conditional rendering for completed todos
        li.innerHTML = `
          <span class="${todo.completed ? "line-through text-gray-500" : ""}">
            ${todo.text}
          </span>
          <div>
            <button class="bg-green-500 text-white px-2 py-1 rounded" onclick="toggleTodo(${index})">
              ${todo.completed ? "Undo" : "Complete"}
            </button>
            <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteTodo(${index})">
              Delete
            </button>
          </div>
        `;
        todoList.appendChild(li);
      });
}

// Add Todo
function addTodo() {
  const todoText = todoInput.value.trim();

  // `==` usage
  if (todoText == "") {
    alert("Todo cannot be empty!");
    return;
  }

  todos.push({ text: todoText, completed: false });
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
  todoInput.value = "";
}

// Toggle Todo Completion
function toggleTodo(index) {
  todos[index].completed = !todos[index].completed; // Toggle completed status
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// Delete Todo
function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// Filter Todos
function filterCompletedTodos() {
  return todos.filter((todo) => todo.completed); // Return only completed todos
}

// Event Listeners
addTodoBtn.addEventListener("click", addTodo);

// Render todos on page load
renderTodos();
console.log("Completed Todos:", filterCompletedTodos());

function openModal(imageSrc, title) {
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}

//HEADER

const header = document.getElementById("header");
const homeSection = document.getElementById("home");

// Function to toggle header background
function toggleHeaderBackground() {
  const homeHeight = homeSection.offsetHeight;
  if (window.scrollY > homeHeight - 70) {
    // Adjust value to fit height of header
    header.classList.add("bg-black", "shadow-lg");
    header.classList.remove("bg-transparent");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-black", "shadow-lg");
  }
}

// Add event listener for scroll
window.addEventListener("scroll", toggleHeaderBackground);

//RESPONSIVE HEADER
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle Mobile Menu
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Change Header Background on Scroll
function toggleHeaderBackground() {
  const homeHeight = homeSection.offsetHeight;
  if (window.scrollY > homeHeight - 70) {
    header.classList.add("bg-black", "shadow-lg");
    header.classList.remove("bg-transparent");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-black", "shadow-lg");
  }
}

// Add event listener for scroll
window.addEventListener("scroll", toggleHeaderBackground);
