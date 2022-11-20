const fahr = document.getElementById('fahr')
const cel = document.getElementById('cels')
const check = document.getElementById('check')
const fahrenheit = document.getElementById('fahrenheit')
const celsius = document.getElementById('celsius')
const check_fahr = document.getElementById('check_fahr')

check.onclick = (e) =>{
    e.preventDefault();
    cal = (fahr.value - 32) * 5/9;
    cel.innerHTML = Math.floor(cal);
}
check_fahr.onclick = (e) =>{
    e.preventDefault();
    cal = (celsius.value * 9/5) + 32;
    fahrenheit.innerHTML = Math.floor(cal);
}