 function creaFigura(){
    var c = document.getElementById('myCanvas');
  
    
    

    const Ox=c.width/2;   //ascissa origine
  const Oy=c.height/2;  //ordinata origine
  const u = 20;         //unità di misura
  var ctx=c.getContext("2d");
  ctx.strokeStyle="rgba(120,120,120,0.5)"
  ctx.fillStyle="rgba(120,120,120,0.5)"
  
  ctx.moveTo(20,Oy);  // punto di partenza
  ctx.lineTo(c.width-20,Oy);  //asse x
  ctx.moveTo(c.width-20,Oy-4);  //punta asse x
  ctx.lineTo(c.width-20,Oy+4);
  ctx.lineTo(c.width-12,Oy);
  ctx.lineTo(c.width-20,Oy-4); //fine punta asse x
  ctx.moveTo(Ox,20);  //coordinate punto di partenza
  ctx.lineTo(Ox,c.height-20);  //asse y

  ctx.moveTo(Ox-4,20);  //punta asse y
  ctx.lineTo(Ox+4,20);
  ctx.lineTo(Ox,12);
  ctx.lineTo(Ox-4,20); //fine punta asse y
  
  ctx.stroke();  //disegna

  ctx.fillStyle="red"//colore freccia
  ctx.fill() //riempimento frecce

  ctx.fillStyle="rgb(0,0,0)"

  // scrive x, y, O, u
  ctx.fillText('x',c.width-20,Oy+10)
 ctx.fillText('y',Ox+5,20)
 ctx.fillText('O',Ox+2,Oy+10)

   
    
    

    
 
    ctx.stroke();
    
}
   
   

  