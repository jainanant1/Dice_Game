var dice1=Math.random()*6;
dice1=dice1+1;
dice1=Math.floor(dice1);

if(dice1==1)
{
  document.querySelector("img.img1").setAttribute("src","dice1.png");
}
else if(dice1==2)
{
  document.querySelector("img.img1").setAttribute("src","dice2.png");
}
else if(dice1==3)
{
  document.querySelector("img.img1").setAttribute("src","dice3.png");
}
else if(dice1==4)
{
  document.querySelector("img.img1").setAttribute("src","dice4.png");
}
else if(dice1==5)
{
  document.querySelector("img.img1").setAttribute("src","dice5.png");
}
else if(dice1==6)
{
  document.querySelector("img.img1").setAttribute("src","dice6.png");
}

var dice2=Math.random()*6;
dice2=dice2+1;
dice2=Math.floor(dice2);

if(dice2==1)
{
  document.querySelector("img.img2").setAttribute("src","dice1.png");
}
else if(dice2==2)
{
  document.querySelector("img.img2").setAttribute("src","dice2.png");
}
else if(dice2==3)
{
  document.querySelector("img.img2").setAttribute("src","dice3.png");
}
else if(dice2==4)
{
  document.querySelector("img.img2").setAttribute("src","dice4.png");
}
else if(dice2==5)
{
  document.querySelector("img.img2").setAttribute("src","dice5.png");
}
else if(dice2==6)
{
  document.querySelector("img.img2").setAttribute("src","dice6.png");
}

if(dice1==dice2)
{
  // Draw
  document.querySelector("h1").innerHTML="Draw";
}
else if(dice1>dice2)
{
  // Player 1 wins
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(dice1<dice2)
{
  // Player 2 wins
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
