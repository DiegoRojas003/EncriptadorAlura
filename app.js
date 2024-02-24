const textarea1 = document.querySelector("textarea");
textarea1.addEventListener("keyup", e => {
    let scHeight = e.target.scrollHeight;
    e.target.style.height = `${scHeight}px`;
});