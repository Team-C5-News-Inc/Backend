const mongoLib = require('../lib/mongodb');

class commentsService {
    constructor() {
        this.collection = 'comments',
        this.mongoDB = new mongoLib
    }

    async getUsers({ commentsId }) {
        const query = commentsId && { commentsId };
        const comments = await this.mongoDB.getAll(this.collection, query);

        return comments || [];
    }
}

module.exports = commentsService;