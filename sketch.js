var colorList = ['#3792c4',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
'#3792c4',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
'#3792c4',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
'#3792c4',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
'#3792c4',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
'#3792c4',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
'#3792c4',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
'#3792c4',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
'#3792c4',
'#0f9a7b',
'#ce713c',
'#d99a2f',
'#aa5063',
'#7a903a',
]

function setup() {
  createCanvas(500,500);
  background(219,193,193);
  
  function draw() {
  var x = random() * width;
  var y = random() * width;
  var r = random() * 200;
}
  
  console.log(colorList.length)
  
  for(var index = 0; index < colorList.length; index++){
  var colorHex = colorList[index];
  	
  console.log(index+":"+colorHex);
  
  noStroke()
  fill(color(colorHex));
  rect(index*15,random()*0,random()*15,500)
  
  }
}

function draw() {
  
}