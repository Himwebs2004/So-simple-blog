 const images = [
      'images/79161dfc7e3a5f04dd2771063ccf8891.jpg', // Make sure this file exists
      'images/c736f83436d84ddc039fe42de40c8ec7.jpg', // Make sure this file exists
    ];
    let current = 0;
    const slider = document.getElementById('sliderImage');

    function showImage(index) {
      slider.style.opacity = 0;
      setTimeout(() => {
        slider.src = images[index];
        slider.style.opacity = 1;
      }, 200);
    }

    function nextImage() {
      current = (current + 1) % images.length;
      showImage(current);
    }

    function prevImage() {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    }

    setInterval(nextImage, 6000);