const { connect } = require('../db');
const mongoose = require('mongoose');
const OrderSchema = require('../schema/order');
const Order = mongoose.model('Order', new mongoose.Schema(OrderSchema));

const insertOrder = async order => {
  const conn = connect();
  if (!conn) {
    console.error('Connection is ', conn);
    return;
  }

  try {
    const newOrder = new Order(order);
    return await newOrder.save();
  } catch (error) {
    console.error('Can not insert Order: ', error);
    return null;
  }
};

const findOrderById = async id => {
  const conn = connect();
  if (!conn) {
    console.error('Connection is ', conn);
    return;
  }

  try {
    return await Order.find({ id });
  } catch (error) {
    console.error('Can not find Order byId: ', error);
    return null;
  }
};

const updateOrder = async (order) => {
  const conn = connect();
  if (!conn) {
    console.error('Connection is ', conn);
    return;
  }

  const { id, ...orderWithoutId } = order;
  try {
    return await Order.findOneAndUpdate(
      { id },
      { $set: { orderWithoutId } },
      { new: true }
    );
  } catch (error) {
    console.error('Can not update Order: ', error);
    return null;
  }
};

module.exports = {
  insertOrder,
  findOrderById,
  updateOrder
}