const $kalorie = document.getElementById("kalorie");
const $gramy = document.getElementById("gramy");
const $button = document.getElementById("button");
const $output = document.getElementById("output");
let wynik;

console.log($output.textContent);


$button.addEventListener("click", () => {
    wynik = $kalorie.value/$gramy.value;
    $output.textContent = wynik.toString();
})