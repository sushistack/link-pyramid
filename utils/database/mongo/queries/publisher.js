const { connect } = require('../db');
const mongoose = require('mongoose');
const PublisherSchema = require('../schema/publisher');
const Publisher = mongoose.model('Publisher', new mongoose.Schema(PublisherSchema));

const findPublishers = async (limit) => {
  const conn = connect();
  if (!conn) {
    console.error('Connection is ', conn);
    return;
  }

  try {
    return await Publisher
    .find()
    .sort({ usedCount: 1 })
    .limit(limit);
  } catch (error) {
    console.error('Can not find Publishers: ', error);
    return null;
  }
};

const updatePublisherUsedCount = async (id, usedCount) => {
  const conn = connect();
  if (!conn) {
    console.error('Connection is ', conn);
    return;
  }

  try {
    return await Publisher.findOneAndUpdate(
      { id },
      { $set: { usedCount: usedCount } },
      { new: true }
    );
  } catch (error) {
    console.error('Can not update Publisher > usedCount: ', error);
    return null;
  }
};

module.exports = {
  findPublishers,
  updatePublisherUsedCount
};