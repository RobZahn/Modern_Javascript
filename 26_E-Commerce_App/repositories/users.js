const fs = require('fs');
const crypto = require('crypto');

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Filename is required to create new repository');
    }

    this.filename = filename;

    try {
      fs.accessSync(this.filename); // check for existence of repo file
    } catch (err) {
      fs.writeFileSync(this.filename, '[]'); // if it doesnt exist, create it
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
    attrs.id = this.randomID();

    const records = await this.getAll();
    records.push(attrs);

    await this.writeAll(records);
  }

  // Write All

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  // Generate Random ID

  randomID() {
    return crypto.randomBytes(4).toString('hex');
  }

  // Get user by ID

  async getOne(id) {
    const records = await this.getAll();
    return records.find(record => record.id === id);
  }

  // Delete user

  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter(record => record.id !== id);
    await this.writeAll(filteredRecords);
  }

  // Update user

  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find(record => record.id === id);

    if (!record) throw new Error(`Record with id of ${id} not found.`);

    Object.assign(record, attrs);
    await this.writeAll(records);
  }

  // Get One By Filter

  async getOneBy(filters) {
    const records = await this.getAll();

    for (let record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) return record;
    }
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');

  const user = await repo.getOneBy({
    oaewkjfowkwjefofkej: '123'
  });

  console.log(user);
};

test();
