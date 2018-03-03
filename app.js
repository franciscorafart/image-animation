let cx = document.querySelector("canvas").getContext("2d")
let img = document.createElement("img")

img.src = "img/player.png"
let spriteW = 48, spriteH = 60;
//translation of the whole context
cx.translate(80,80)
//this inverts the context
cx.scale(-1,1)
img.addEventListener("load", ()=>{
  let cycle = 0
  setInterval(()=>{
    //clear the rectangle
    cx.clearRect(0, 0, spriteW, spriteH)
    //rotate the context in every cycle
    cx.rotate(-0.1*Math.PI)
    //draw a section of the image
    cx.drawImage(img,
      //source rectangle
      cycle * spriteW, 0, spriteW, spriteH,
      //destination rectangle
      0,0,spriteW, spriteH)
    //an 8 number cycle
    cycle = (cycle + 1)%8
  }, 120)
})
