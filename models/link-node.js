class LinkNode {
  constructor() {
    this.id = null;
    this.tier = null;
    this.url = null;
    this.gitId = null;
    this.savedPath = null;
    this.commit = null;
    this.parentId = null;
    this.createdAt = null;
  }
}

class LinkNodeBuilder {
  constructor() {
    this.linkNode = new LinkNode();
  }

  id(id) {
    this.linkNode.id = id;
    return this;
  }

  tier(tier) {
    this.linkNode.tier = tier;
    return this;
  }

  gitId(gitId) {
    this.linkNode.gitId = gitId;
    return this;
  }

  savedPath(savedPath) {
    this.linkNode.savedPath = savedPath;
    return this;
  }

  commit(commit) {
    this.linkNode.commit = commit;
    return this;
  }

  parentId(parentId) {
    this.linkNode.parentId = parentId;
    return this;
  }

  createdAt(createdAt) {
    this.linkNode.createdAt = createdAt;
    return this;
  }

  build() {
    return this.linkNode;
  }
}

module.exports = {
  LinkNode,
  LinkNodeBuilder
};