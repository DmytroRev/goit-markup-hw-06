const openBtn = document.querySelector("[data-open]")
const closeBtn = document.querySelector("[data-close]")
const modal = document.querySelector("#modal")

const backdrop = document.querySelector(".backdrop")
const openBackdrop = document.querySelector(".main-button-list")
const closeBackdrop = document.querySelector(".modal-close-btn")

openBtn.addEventListener("click", () => {
    modal.classList.add("is-open")
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-open");
});

openBackdrop.addEventListener("click", () => {
    backdrop.classList.add("is-open")
})

closeBackdrop.addEventListener("click", () => {
    backdrop.classList.remove("is-open")
})