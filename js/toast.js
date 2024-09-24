const toast = {
  success: (title, message) => {
    const toastElement = document.createElement("div");
    toastElement.classList.add('toast');
    document.body.appendChild(toastElement);
    
    const toastContent = document.createElement("div");
    toastContent.classList.add('toast-content');
    toastElement.appendChild(toastContent);

    const check = document.createElement('i');
    check.classList.add('ri-check-line');
    check.classList.add('check');
    toastContent.appendChild(check);

    const divMessage = document.createElement('div');
    divMessage.classList.add('message');
    toastContent.appendChild(divMessage);

    const toastTitle = document.createElement('span');
    toastTitle.classList.add('toast-title');
    toastTitle.classList.add('text');
    toastTitle.innerText = title;
    divMessage.appendChild(toastTitle);
    
    const toastMessage = document.createElement('span');
    toastMessage.classList.add('toast-message');
    toastMessage.classList.add('text');
    toastMessage.innerText = message;
    divMessage.appendChild(toastMessage);
    
    const closeButton = document.createElement('i');
    closeButton.classList.add('ri-close-line');
    closeButton.classList.add('close');
    closeButton.addEventListener("click", () => {
      toastElement.classList.remove('.active')

      setTimeout(() => {
        progress.classList.remove("active");
      }, 300);
      
      setTimeout(() => {
        toastElement.parentNode.removeChild(toastElement);
      }, 400);
    });
    toastElement.appendChild(closeButton);

    const progress = document.createElement('div');
    progress.classList.add('progress');
    toastElement.appendChild(progress);
    
    setTimeout(() => {
      progress.classList.add('active');
      toastElement.classList.add('active')

      setTimeout(() => {
        toastElement.classList.remove("active");
      }, 3000);

      setTimeout(() => {
        progress.classList.remove("active");
      }, 3300);

      setTimeout(() => {
        toastElement.parentNode.removeChild(toastElement);
      }, 3400);
    }, 200);
  }
}