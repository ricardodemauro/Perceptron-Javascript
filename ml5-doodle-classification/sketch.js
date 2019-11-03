async function setup() {
  let canvas = createCanvas(400, 400);

  const data = await loadFile();

  const img = createImage(28, 28, RGB);

  const start = 80;
  img.loadPixels();
  for(let i = 0; i < 784; i++) {
      let index = i + start;
      let val = data[index];
      img.pixels[i] = val & 0xff;
  }

  img.updatePixels();
  image(img, 0, 0);
}

async function loadFile() {
    try {
        //const data = await NumpyLoader.openAsync('C:\\Users\\ricardo\\source\\repos\\NN-Impacta\\ml5-doodle-classification\\assets\\full_numpy_bitmap_rainbow.npy');
        const data = await NumpyLoader.ajaxAsync('file:///C:/Users/ricardo/source/repos/NN-Impacta/ml5-doodle-classification/assets/full_numpy_bitmap_rainbow.npy');
        return data;
    } catch (error) {
        console.log('dang. algo deu errado');        
    }
}
