const generateBtn = document.querySelector('.generate-button');
const memeTitle = document.querySelector('.meme-title');
const memeImage = document.querySelector('.meme-image');
const authorOutput = document.querySelector('.author');

// Store already displayed meme URLs
const shownMemes = new Set();

async function getMeme() {
  generateBtn.disabled = true;
  memeTitle.innerText = 'Loading fresh meme...';
  authorOutput.innerText = '';

  try {
    let memeData;
    let attempts = 0;

    // Retry until we get a new meme (max 5 tries)
    do {
      const res = await fetch('https://meme-api.com/gimme');
      memeData = await res.json();
      attempts++;
    } while (shownMemes.has(memeData.url) && attempts < 5);

    // Save meme as shown
    shownMemes.add(memeData.url);

    memeTitle.innerText = memeData.title;
    memeImage.src = memeData.url;
    authorOutput.innerText = `Meme by: ${memeData.author}`;

  } catch (error) {
    memeTitle.innerText = 'Failed to load meme 😢';
    console.error(error);
  } finally {
    generateBtn.disabled = false;
  }
}

// Initial load
getMeme();

// Button click
generateBtn.addEventListener('click', getMeme);

const shareBtn = document.querySelector('.share-button');

shareBtn.addEventListener('click', async () => {
  if (!memeImage.src) return;

  const shareData = {
    title: 'Check out this meme 😄',
    text: memeTitle.innerText,
    url: memeImage.src
  };

  // Use native share if supported (mobile)
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log('Share cancelled', err);
    }
  } else {
    // Fallback for desktop browsers
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      memeTitle.innerText + ' ' + memeImage.src
    )}`;

    window.open(whatsappUrl, '_blank');
  }
});