// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", () => {
  /* Contador regresivo para la boda */
  const countdown = () => {
    // --- CONFIGURACIÓN ---
    const weddingDate = new Date("December 8, 2025 17:00:00").getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Si la fecha ya pasó
    if (distance < 0) {
      document.getElementById("countdown").innerHTML =
        "<h2>¡Ya es el gran día!</h2>";
      clearInterval(interval); // Detiene el contador
      return;
    }

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar en el HTML (con un '0' si es menor de 10)
    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerText = String(seconds).padStart(
      2,
      "0"
    );
  };

  // Llama a la función una vez para que no haya retraso
  countdown();
  // Llama a la función cada segundo
  const interval = setInterval(countdown, 1000);
});

// sobre animado
var envelope = document.getElementById("envelope");
var invitations = document.getElementById("invitations");
var container = document.getElementById("principal");

envelope.addEventListener("click", () => {
  // abrir sobre
  envelope.classList.add("open");

  //esperar antes de mostrar invitaciones
  setTimeout(() => {
    invitations.classList.add("show");
    principal.classList.add("extend");

    //esperar antes de ocultar sobre
    setTimeout(() => {
      envelope.classList.add("hide");
    }, 500);
  }, 200);
});
