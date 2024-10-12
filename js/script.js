// 画像が表示されるタイミングを監視
window.addEventListener('scroll', () => {
  const images = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight * 0.8;

  images.forEach(img => {
      const imgTop = img.getBoundingClientRect().top;

      if (imgTop < triggerBottom) {
          img.classList.add('visible'); // 画像が見える位置にきたら表示
      }
  });
});
