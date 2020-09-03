const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const scrypt = util.promisify(crypto.scrypt);

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

    const salt = crypto.randomBytes(8).toString('hex');
    const buffer = await scrypt(attrs.password, salt, 64);

    const records = await this.getAll();
    const record = {
      ...attrs,
      password: `${buffer.toString('hex')}.${salt}`
    };
    records.push(record);

    await this.writeAll(records);

    return record;
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

  // Get One By Filters

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

module.exports = new UsersRepository('users.json');
