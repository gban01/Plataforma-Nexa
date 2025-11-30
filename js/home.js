document.addEventListener("mousemove", (e) => {
    const logo = document.querySelector(".logo-tilt");
    const btn = document.querySelector(".btn");

    if (!logo || !btn) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    logo.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`;

    // só adiciona scale + subir se hover estiver ativo
    if (btn.matches(":hover")) {
        btn.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.15) translateY(-6px)`;
    } else {
        btn.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`;
    }
});
// ---------- animação count UP ----------
function countUp(id, start, end, duration) {
    const el = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            el.innerText = Math.round(end);
            clearInterval(timer);
        } else {
            el.innerText = Math.round(current);
        }
    }, 16);
}

// ------ dados finais que vão contar ------
let recOff = 10;   // empresas sem site tem pouco reconhecimento
let gainOn = 70;  // empresas com site tem 70% a mais ganhos
// barra comparativa
document.addEventListener("DOMContentLoaded", () => {
    const total = recOff + 100;
    const percent = (100 / total) * 100;
    document.getElementById("progressPremium").style.width = percent + "%";
    document.getElementById("percentPremium").innerText = Math.round(percent) + "%";

    countUp("numOff", 0, recOff, 2000);
    countUp("numOn", 0, gainOn, 2000);
});

// Seleção dos produtos
document.addEventListener("DOMContentLoaded", () => {
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(prod => {
        const precoEl = prod.querySelector(".preco");
        const price = parseInt(prod.dataset.price);

        if (price > 0) {
            // anima a contagem de preço ao carregar
            countUp(precoEl, 0, price, 1800);
        }

        // Clique pra selecionar
        prod.addEventListener("click", () => {
            produtos.forEach(p => p.classList.remove("selected"));
            prod.classList.add("selected");
        });
    });
});

// click btn criacao de sites ( protuto )
document.addEventListener("DOMContentLoaded", () => {
    const btnMain = document.getElementById("btnMain");

    btnMain.addEventListener("click", () => {
        const phone = "5585991135242";
        const msg = "Olá, quero criar meu site! Podemos combinar os detalhes?";
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
    });
});

//click btn imagens vivas ( protuto )
document.addEventListener("DOMContentLoaded", () => {
    const btnOn = document.getElementById("btnOn");

    btnOn.addEventListener("click", () => {
        const phone = "5585991135242";
        const msg = "Olá, quero transformar imagens estáticas em conteúdos vivos com vídeos e animações! Podemos combinar os detalhes? 🚀";
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
    });
});

//click btn artes marketing ( protuto )
document.addEventListener("DOMContentLoaded", () => {
    const btnOff = document.getElementById("btnOff");

    btnOff.addEventListener("click", () => {
        const phone = "5585991135242";
        const msg = "Olá, quero criar artes para o marketing da minha empresa! Podemos combinar os detalhes? ✨";
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
    });
});


