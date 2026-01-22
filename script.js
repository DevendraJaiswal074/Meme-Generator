const generateBtn = document.querySelector('.generate-button');
const memeTitle = document.querySelector('.meme-title');
const memeImage = document.querySelector('.meme-image');
const authorOutput = document.querySelector('.author');
const downloadBtn = document.querySelector('.download-btn');
const shareBtn = document.querySelector('.share-button');
const toast = document.getElementById('toast');

const shownMemes = new Set();

/* Toast */
function showToast(message) {
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

/* Fetch Meme */
async function getMeme() {
  memeTitle.innerText = 'Loading fresh meme...';

  let data;
  do {
    const res = await fetch('https://meme-api.com/gimme');
    data = await res.json();
  } while (shownMemes.has(data.url));

  shownMemes.add(data.url);
  memeTitle.innerText = data.title;
  memeImage.src = data.url;
  authorOutput.innerText = `Meme by: ${data.author}`;
}

generateBtn.addEventListener('click', getMeme);
getMeme();

/* Download  */
downloadBtn.addEventListener('click', () => {
  if (!memeImage.src) return;

  const a = document.createElement('a');
  a.href = memeImage.src;
  a.download = 'meme.jpg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  showToast('Download completed 📥');
});

/* Share */
shareBtn.addEventListener('click', async () => {
  if (!memeImage.src) return;

  if (navigator.share) {
    await navigator.share({
      title: memeTitle.innerText,
      url: memeImage.src
    });
    showToast('Shared successfully 🚀');
  } else {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(memeImage.src)}`,
      '_blank'
    );
    showToast('Opening WhatsApp...');
  }
});