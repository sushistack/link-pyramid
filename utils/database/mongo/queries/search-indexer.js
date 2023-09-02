const { connect } = require('../db');
const mongoose = require('mongoose');
const SearchIndexerScheme = require('../schema/search-indexer');
const SearchIndexer = mongoose.model('SearchIndexer', new mongoose.Schema(SearchIndexerScheme));

const findSearchIndexers = async (limit) => {
    try {
        return await SearchIndexer.find().limit(limit);
    } catch (error) {
        console.error('Can not find SearchIndexers: ', error);
        return null;
    }
};
