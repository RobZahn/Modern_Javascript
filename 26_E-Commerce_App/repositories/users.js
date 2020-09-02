const fs = require('fs');
const { report } = require('process');

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Filename is required to create new repository');
    }

    this.filename = filename;

    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  // Get All

  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: 'utf8'
      })
    );
  }

  // Create

  async create(attrs) {
    const records = await this.getAll();
    records.push(attrs);

    await fs.promises.writeFile(this.filename, JSON.stringify(records));
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');

  await repo.create({ email: 'test@test.com', password: 'password' });

  const users = await repo.getAll();

  console.log(users);
};

test();
