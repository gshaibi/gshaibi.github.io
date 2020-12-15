// window.addEventListener('keypress', (e) => {
//   e.preventDefault();
// });
window.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.ctrlKey && e.key === "p") {
    setTimeout(() => {
      window.print();
    }, 1000);
  }
  console.log(e);
});
// window.addEventListener('keyup', (e) => {
//   e.preventDefault();
// });
