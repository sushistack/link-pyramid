const { connect } = require('../db')
const mongoose = require('mongoose');
const LinkNodeScheme = require('../schema/link-node');
const LinkNode = mongoose.model('LinkNode', new mongoose.Schema(LinkNodeScheme));

const insertLinkNodeById = async (linkNode) => {
    const conn = connect();
    if (!conn) {
        console.error('connection is ', conn);
        return;
    }

    try {
        const newLinkNode = new LinkNode(linkNode);
        return await newLinkNode.save();
    } catch (error) {
        console.error('Can not insert LinkNode: ', error);
        return null;
    }
};

const findLinkNodeById = async (id) => {
    const conn = connect();
    if (!conn) {
        console.error('connection is ', conn);
        return;
    }

    try {
        return await LinkNode.findOne({ id });
    } catch (error) {
        console.error('Can not find LinkNode by id: ', error);
        return null;
    }
};

const findLinkNodeByParentNode = async (parentId) => {
    try {
        return await LinkNode.find({ parentId });
    } catch (error) {
        console.error('Can not find LinkNode by parentId: ', error);
        return [];
    }
};

const updateLinkNode = async (linkNode) => {
    const { id, ...linkNodeWithoutId } = linkNode;
    try {
        return await LinkNode.findOneAndUpdate(
            { id },
            { $set: linkNodeWithoutId },
            { new: true }
        );
    } catch (error) {
        console.error('Can not update LinkNode: ', error);
        return null;
    }
};

module.exports = {
    insertLinkNodeById,
    findLinkNodeById,
    findLinkNodeByParentNode,
    updateLinkNode
}