const imagetransform = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const imagetimimg = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards',
  }
  
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const img3 = document.querySelector("#img3");
  
  img1.animate(imagetransform,imagetimimg).finished
    .then(() => img2.animate(imagetransform,imagetimimg).finished)
    .then(() => img3.animate(imagetransform,imagetimimg).finished)
    .catch(error => console.error(`Error : ${error}`));
  

