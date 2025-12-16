/* Lo-Fi Valley - Audio Player Logic */

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgMusic');
  const audioToggle = document.getElementById('audioToggle');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const volumeSlider = document.getElementById('volumeSlider');
  
  if (!audio || !audioToggle) return;
  
  audio.volume = 0.5;
  let isPlaying = false;

  function updateSliderBackground() {
    if (!volumeSlider) return;
    const value = volumeSlider.value;
    volumeSlider.style.background = `linear-gradient(to right, #B5A5C9 0%, #B5A5C9 ${value}%, rgba(255,248,240,0.2) ${value}%, rgba(255,248,240,0.2) 100%)`;
  }

  function updateIcons() {
    if (!playIcon || !pauseIcon) return;
    if (isPlaying && !audio.paused) {
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
    } else {
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
    }
  }

  audioToggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        isPlaying = true;
        updateIcons();
      }).catch(() => {});
    } else {
      audio.pause();
      isPlaying = false;
      updateIcons();
    }
  });

  if (volumeSlider) {
    volumeSlider.addEventListener('input', () => {
      audio.volume = volumeSlider.value / 100;
      updateSliderBackground();
    });

    // Initialize slider background
    updateSliderBackground();
  }
});
