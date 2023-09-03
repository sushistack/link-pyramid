class Publisher {
  constructor() {
    this.id = null;
    this.type = null;
    this.level = null;
    this.gitId = null;
    this.domain = null;
    this.postCount = null;
  }
}

class PublisherBuilder {
  constructor() {
    this.publisher = new Publisher();
  }

  id(id) {
    this.publisher.id = id;
    return this;
  }

  type(type) {
    this.publisher.type = type;
    return this;
  }

  level(level) {
    this.publisher.level = level;
    return this;
  }

  gitId(gitId) {
    this.publisher.gitId = gitId;
    return this;
  }

  domain(domain) {
    this.publisher.domain = domain;
    return this;
  }

  postCount(postCount) {
    this.publisher.postCount = postCount;
    return this;
  }

  build() {
    return this.publisher;
  }
}

module.exports = {
  Publisher,
  PublisherBuilder
};