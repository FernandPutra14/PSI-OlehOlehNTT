const toastElement = document.querySelector(".toast");
const toastTitle = toastElement.querySelector('.toast-title');
const toastMessage = toastElement.querySelector('.toast-message');
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");

closeIcon.addEventListener("click", () => {
  toastElement.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);
});

const toast = {
  success: (title, message) => {
    
    toastTitle.innerText = title;
    toastMessage.innerText = message;

    toastElement.classList.add("active");
    progress.classList.add("active");

    setTimeout(() => {
      toastElement.classList.remove("active");
    }, 3000);

    setTimeout(() => {
      progress.classList.remove("active");
    }, 3300);
  }
}