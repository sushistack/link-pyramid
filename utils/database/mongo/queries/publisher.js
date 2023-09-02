const { connect } = require('../db');
const mongoose = require('mongoose');
const PublisherScheme = require('../schema/publisher');
const Publisher = mongoose.model('Publisher', new mongoose.Schema(PublisherScheme));

const findPublishers = async (limit) => {
    try {
        return await Publisher.find().limit(limit);
    } catch (error) {
        console.error('Can not find Publishers: ', error);
        return null;
    }
};

const updatePublisherUsedCount = async (id, usedCount) => {
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
