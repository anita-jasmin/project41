class Drops {
  constructor(x, y) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 1.5,
      density: 2.2,
    };
    this.body = Bodies.circle(x, y, 5, options);
    this.color = "blue";
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    ellipseMode(RADIUS);
    translate(pos.x, pos.y);
    rotate(angle);
    fill(this.color);
    ellipse(this.body.position.x, this.body.position.y, 5, 5);
    pop();
  }

  update() {
    if (this.body.position.y > 900) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 400),
        y: random(0, 400),
      });
    }
  }
}
