const { getLinksBy } = require('../models/enums/order-type');
const { insertOrder, findOrderById } = require('../utils/database/mongo/queries/order');
const { findPublishers } = require('../utils/database/mongo/queries/publisher');


module.exports = {
  registerAndGet: async order => {
    console.log(`Register Order := [${order}]`);
    await insertOrder(order);
    return await findOrderById(order.id);
  },
  link1Tiers: async order => {
    console.log(`Link 1Tiers for Order := [${order}]`);
    const countToLink = getLinksBy(order.type);

    if (countToLink === 0) {
      console.error(`Error, order.type := [${order.type}]`);
      return;
    }
    const publishers = await findPublishers(countToLink);

  }
}