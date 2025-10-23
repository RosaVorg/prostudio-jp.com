// ★ホーム画面の文字演出
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // 一度表示されたら監視をやめる
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeIns.forEach(fadeIn => {
  observer.observe(fadeIn);
});