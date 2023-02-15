const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const A = document.getElementById("A");
    const B = document.getElementById("B");
    const error = document.getElementById("error");
    const sucesso = document.getElementById("sucesso");

    if (B.value > A.value) {

        sucesso.style.display = "block";
        error.style.display = "none";

    }else {
        error.style.display = "block";
        sucesso.style.display = "none";
    }
})

