const { connect } = require('../db');
const mongoose = require('mongoose');
const SearchIndexerSchema = require('../schema/search-indexer');
const SearchIndexer = mongoose.model('SearchIndexer', new mongoose.Schema(SearchIndexerSchema));

const findSearchIndexers = async (limit) => {
  try {
    return await SearchIndexer.find().limit(limit);
  } catch (error) {
    console.error('Can not find SearchIndexers: ', error);
    return null;
  }
};

module.exports = {
  findSearchIndexers
}