const message = `Dear Ifra,

Shayad ye sirf ek website hai...

Lekin iske har page me meri ek chhoti si feeling chhupi hai.

Main bas chahta hoon ki aaj tum smile karo.

Happy Birthday. 🤍`;

let i = 0;
const speed = 45;
const text = document.getElementById("text");

function type() {
    if (i < message.length) {
        text.innerHTML += message.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();document.getElementById("finalBtn").addEventListener("click", () => {
    window.location.href = "final.html";
});