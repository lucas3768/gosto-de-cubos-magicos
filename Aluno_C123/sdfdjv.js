function setup()   {
canvas = createCanvas(550,450)
canvas.position(700,100)
webcam = createCapture(VIDEO)
webcam.position(100,100)
webcam.size(550,450)
posenet = ml5.poseNet(webcam,modelLoaded)
posenet.on("pose",gotresult)
}
function gotresult(results) {
 if (results.length > 0) {
    nosex = results[0].pose.nose.x
    nosey = results[0].pose.nose.y
    punhodireitox = results[0].pose.rightWrist.x
    punhoesquerdox = results[0].pose.leftWrist.x
    console.log(nosex,nosey,punhoesquerdox,punhodireitox);
    diferenca = floor(punhoesquerdox - punhodireitox)
 }   
}
function modelLoaded() {
    console.log("posenet inicializado")
}
function draw() {
    background("#B4FFFF")
    square(nosex,nosey,diferenca)
    fill("green")
    document.getElementById("tamanho").innerHTML = "larura e altura" + diferenca
}
nosex = 0
nosey = 0
punhodireitox = 0
punhoesquerdox = 0
diferenca  = 0
