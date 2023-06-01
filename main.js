statusModel = false
objects = [];
function preload() {
     img = loadImage("download.jpg")
}
function setup() {
     canvas = createCanvas(640, 420)
     canvas.center()
     objectDetector = ml5.objectDetector("cocossd", modelLoad)
}
function draw() {
     image(img, 0, 0, 640, 420)

     if (statusModel) {
          for (i = 0; i < objects.length; i++) {
               console.log(i)
               fill(255, 0, 0)
               text(objects[i].label, objects[i].x, objects[i].y)
               noFill()
               stroke("navy")
               rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
          }
     }
}
function modelLoad() {
     console.log("controle")
     statusModel = true;
     objectDetector.detect(img, gotResult)
}
function gotResult(error, results) {
     if (error) {
          console.log("Que_burro_da_zero_para_ele")
          console.log(error)
     } else {
          console.log("tudo_certo_por_aqui")
          console.log(results)
          objects = results;
     }
}