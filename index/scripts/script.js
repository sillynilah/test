function refreshCatImage() {
    const catImage = document.getElementById('catImage');
    // Add a unique timestamp to force the browser to fetch a new image
    catImage.src = `https://cataas.com/cat?timestamp=${new Date().getTime()}`;
}
