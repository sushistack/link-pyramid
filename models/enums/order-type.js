const ORDER_TYPE = {
  STANDARD: {
    name: 'STANDARD',
    links: 20
  },
  DELUXE: {
    name: 'DELUXE',
    links: 40
  },
  PRIMIUM: {
    name: 'PRIMIUM',
    links: 60
  }
};

module.exports = {
  ORDER_TYPE: ORDER_TYPE,
  getLinksBy: orderType => {
    switch (orderType) {
      case ORDER_TYPE.STANDARD.name: return ORDER_TYPE.STANDARD.links;
      case ORDER_TYPE.DELUXE.name: return ORDER_TYPE.DELUXE.links;
      case ORDER_TYPE.PRIMIUM.name: return ORDER_TYPE.PRIMIUM.links;
      default: return 0;
    }
  }
};
