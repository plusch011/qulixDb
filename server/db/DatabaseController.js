module.exports = class DatabaseController {
  constructor(API, URI, options ) {
    this.dbApi = new API(URI, options);
  }

  // wrapper to connect and disconnect to base
  async query(fn, ...args) {
    await this.dbApi.connect();

    await this.dbApi.initModel();

    const value = await fn(...args);

    await this.dbApi.close();

    return value;
  }

  async getUsers() {
    return await this.query(async () => await this.dbApi.find())
      .then(users => users);
  }

  async createUser(username, password) {
    return await this.query(async () => await this.dbApi.createUser(username, password));
  }

  async deleteUser(username) {
    return await this.query(async () => await this.dbApi.deleteUser(username));
  }
};

