const modal = document.querySelector('.modal');
const btn = document.querySelector('.todoBtn');
const closeBtn = modal.querySelector(".close-area");

btn.addEventListener('click', () => {
modal.classList.toggle('show');
    if (modal.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
        }
    });

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.toggle('show');
        if (!modal.classList.contains('show')) {
            document.body.style.overflow = 'auto';
            }
        }
    });

closeBtn.addEventListener('click', () =>{
    modal.classList.toggle('show');
    document.body.style.overflow = 'auto';
});

window.addEventListener("keyup", e => {
    if(modal.classList.contains('show') && e.key === "Escape") {
        modal.classList.toggle('show');
    }
})