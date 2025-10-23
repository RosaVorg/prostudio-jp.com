// ★背景画面の自動切換
const imageElements = document.querySelectorAll('.bg-images img');
const imagePaths = Array.from(imageElements).map(img => img.src);

const background = document.querySelector('.background');

// sessionStorage から index を取得（なければ 0）
let index = parseInt(sessionStorage.getItem('bgIndex')) || 0;

function changeBackground() {
  background.style.backgroundImage = `url('${imagePaths[index]}')`;

  // 次の index を準備
  index = (index + 1) % imagePaths.length;

  // 保存
  sessionStorage.setItem('bgIndex', index);
}

// 最初の画像を表示
changeBackground();

// 8秒ごとに背景画像を切り替え
setInterval(changeBackground, 8000);

