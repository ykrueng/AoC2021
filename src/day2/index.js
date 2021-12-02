exports.testArr = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
]

exports.part1 = cmds => {
  x=0; y=0
  for (c of cmds) {
    n=parseInt(c.match(/\d+$/g)[0]);
    (c[0]=='f'&&(x+=n))||(c[0]=='u'&&(y-=n))||(c[0]=='d'&&(y+=n))
  }
  return x*y
}

exports.part2 = cmds => {
  x=0; y=0; a=0
  for (c of cmds) {
    n=parseInt(c.match(/\d+$/g)[0]);
    (c[0]=='f'&&(x+=n)&&(y+=n*a))||(c[0]=='u'&&(a-=n))||(c[0]=='d'&&(a+=n))
  }
  return x*y
}