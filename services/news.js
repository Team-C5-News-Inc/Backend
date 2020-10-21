// const { parse } = require('dotenv/types');
const mongoLib = require('../lib/mongodb');

class newsService {
    constructor() {
        this.collection = 'news',
        this.mongoDB = new mongoLib
    }

    async getNews( {tags, category, page} ) {
        
        
        const query = { page: parseInt(page),
                        tags : tags ? {"tags":{ $in: tags.split(",") }} : {},
                        category: category ? {"category.short_name": category }: {}
                    };


        const news = await this.mongoDB.getAllAggregate(this.collection, query);

        return news || [];
    }

    async getOne(_id){
        
        const oneNew = await this.mongoDB.getOne(this.collection, _id)
        return oneNew
    }
}

module.exports = newsService;