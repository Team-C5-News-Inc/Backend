const mongoLib = require('../lib/mongodb');

class newsService {
    constructor() {
        this.collection = 'news',
        this.mongoDB = new mongoLib
    }

    async getUsers({ newsId }) {
        const query = newsId && { newsId };
        const news = await this.mongoDB.getAll(this.collection, query);

        return news || [];
    }
}

module.exports = newsService;