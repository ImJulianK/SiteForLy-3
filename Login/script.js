function getInfo(){
    let nome = document.getElementById("name").value;
    let senha = document.getElementById("password").value;

    if((nome === "Lyvia" || nome === "lyvia") && senha === "2502iloveu"){
        setTimeout(function() {
            window.location.href = "../index.html";
        }, 1500); 
    }
    else {
        window.alert("[ERRO] Nome ou senha incorretos, digite novamente!");
    }
}