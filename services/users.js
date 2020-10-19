const mongoLib = require('../lib/mongodb');

class usersService {
    constructor() {
        this.collection = 'users',
        this.mongoDB = new mongoLib
    }

    async getUsers({ userId }) {
        const query = userId && { userId };
        const users = await this.mongoDB.getAll(this.collection, query);

        return users || [];
    }
}

module.exports = usersService;