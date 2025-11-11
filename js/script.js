// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", () => {

  /* Contador regresivo para la boda */
  const countdown = () => {
    // --- CONFIGURACIÓN ---
    const weddingDate = new Date("December 31, 2025 17:00:00").getTime();
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

    const audio = document.getElementById('wedding-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    let isPlaying = false;

    // Formatear tiempo
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        } else {
            audio.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }
        isPlaying = !isPlaying;
    });

    // Actualizar progreso
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.setProperty('--progress', `${progress}%`);
        progressBar.classList.add('active');
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    // Actualizar duración
    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
    });

    // Hacer clic en la barra de progreso
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });

    // Botones anterior/siguiente (puedes agregar más canciones)
    document.getElementById('prev-btn').addEventListener('click', () => {
        audio.currentTime = 0;
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        audio.currentTime = 0;
    });

    // Intentar reproducir automáticamente (algunos navegadores lo bloquean)
    audio.volume = 0.5;
    currentVolume = 0.5;
});


