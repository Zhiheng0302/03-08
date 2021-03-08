let x=0
function setup() {
  createCanvas(600, 600);
}

function draw() {
  //background(220);
  if(mouseIsPressed){
  fill(mouseX,mouseY,150);
  square(mouseX, mouseY, 25+5*sin(x),5+5*sin(x));
  }else{//若放開滑鼠 用筆刷2
    fill(mouseX,mouseY,150);
    //circle(mouseX,mouseY,25+5*sin(x),5+5*sin(x));
  circle(mouseX,mouseY,25+5*sin(x),5+5*sin(x));
  }
    x=x+0.1;
}