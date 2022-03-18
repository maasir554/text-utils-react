let SetMode;
function ToggleDarkMode(Mode) {
  console.log("hello, the dark function started!");
  if (Mode === "light") {
    SetMode("dark");
  }
  if (Mode === "dark") {
    SetMode("light");
  }
}
export default ToggleDarkMode();
