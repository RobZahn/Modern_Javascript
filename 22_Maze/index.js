const { Bodies, Engine, Render, Runner, World } = Matter;

const cells = 3;
const width = 600;
const height = 600;

const unitLength = width / cells;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine,
  options: {
    wireframes: true,
    width,
    height
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Borders
const borders = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];

World.add(world, borders);

// Maze Generation

const shuffle = arr => {
  let counter = arr.length;

  while (counter > 0) {
    const randIdx = Math.floor(Math.random() * counter);
    counter--;

    [arr[counter], arr[randIdx]] = [arr[randIdx], arr[counter]];
  }

  return arr;
};

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startCol = Math.floor(Math.random() * cells);

const stepThroughCell = (row, col) => {
  // If cell has already been visited, return and do nothing
  if (grid[row][col]) return;

  // Mark cell as visited (change to true)
  grid[row][col] = true;

  // Assemble randomly ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, col, 'up'],
    [row + 1, col, 'down'],
    [row, col + 1, 'right'],
    [row, col - 1, 'left']
  ]);

  for (let neighbor of neighbors) {
    const [nextRow, nextCol, direction] = neighbor;
    // 1. Check if neighbor is out of bounds
    if (nextRow < 0 || nextRow >= cells || nextCol < 0 || nextCol >= cells) {
      continue;
    }
    // 2. Check if that neighbor has been visited
    if (grid[nextRow][nextCol]) {
      continue;
    }
    // 3. Remove wall from either horizontals or verticals
    if (direction === 'left') {
      verticals[row][col - 1] = true;
    } else if (direction === 'right') {
      verticals[row][col] = true;
    } else if (direction === 'up') {
      horizontals[row - 1][col] = true;
    } else if (direction === 'down') {
      horizontals[row][col] = true;
    }

    stepThroughCell(nextRow, nextCol);
  }
  // 4. Visit that neighbor
};

stepThroughCell(startRow, startCol);

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) return;

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength / 2,
      rowIndex * unitLength + unitLength,
      unitLength,
      10,
      { isStatic: true }
    );
    World.add(world, wall);
  });
});
