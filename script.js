const density = "Ñ@#W9876543210?!abc;:+=-,._            ";
let cat;
let video;
let asciiDiv;

function preload() {
  
  //cat = loadImage("cat48b.jpg")
  
}
function setup() {
  //createCanvas(400,400);
  noCanvas();
  video = createCapture(VIDEO);
  //video.size(156,56);
  video.size(260,100);
  asciiDiv = createDiv();
}

function draw() {
  
  //background(0); 
  //image(cat,0,0,width,height);
  //let w = width / cat.width;
  //let h = height / cat.height;
  video.loadPixels();
  let asciiImage = '';
  for (let j = 0; j < video.height; j++) {

    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i+j*video.width)*4;
      
      const r=video.pixels[ pixelIndex + 0 ];
      const g=video.pixels[ pixelIndex + 1 ];
      const b=video.pixels[ pixelIndex + 2 ];
      const avg = (r + g + b) / 3;
      
      //noStroke();
      //fill(255);
      //square(i*w,j*h,w);

      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0) );
     const c = density.charAt(charIndex);
      if(c == ' ') asciiImage += '&nbsp';
      else asciiImage += density.charAt(charIndex);
      //textSize(w);
      //textAlign(CENTER,CENTER);
      // text(density.charAt(charIndex),
      // i * w+w*0.5,j * h+h*0.5);
    }
    asciiImage += '<br>';
    //createDiv(row);
    //console.log(row);
  }
  asciiDiv.html(asciiImage);
}