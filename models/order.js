class Order {
  constructor() {
    this.id = null;
    this.url = null;
    this.keywords = [];
    this.type = null;
    this.status = null;
    this.createdAt = null;
  }
}

class OrderBuilder {
  constructor() {
    this.order = new Order();
  }

  id(id) {
    this.order.id = id;
    return this;
  }

  url(url) {
    this.order.url = url;
    return this;
  }

  keywords(keywords) {
    this.order.keywords = keywords;
    return this;
  }

  type(type) {
    this.order.type = type;
    return this;
  }

  status(status) {
    this.order.status = status;
    return this;
  }

  createdAt(createdAt) {
    this.order.createdAt = createdAt;
    return this;
  }

  build() {
    return this.order;
  }
}

module.exports = {
  Publisher,
  PublisherBuilder
};