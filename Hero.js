class Hero {
  constructor(x,y,width,height)
	{
		var options = { 
			isStatic:false,
			reatitution:0,
			frictionAir: 1,
			density: 1.2, 

		};
		this.body = Bodies.rectangle(x,y,width,height,option);
		this.width = width;
		this.heigth = height;
		this.image=loadImage("images/superhero-01.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var angle =this.body.angle;		
			var pos = this.body.position;
			push()
			translate(this.body.position.x,this.boyd.position.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.heigth);
			pop()
			
	}
}
