const { Bodies, Engine, Render, Runner, World } = Matter;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine,
  options: {
    width: 800,
    height: 600
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 20, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 20, { isStatic: true }),
  Bodies.rectangle(0, 300, 20, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 20, 600, { isStatic: true })
];

World.add(world, walls);

//
