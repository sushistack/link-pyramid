class SearchIndexer {
  constructor() {
    this.id = null;
    this.type = null;
    this.url = null;
    this.referer = null;
    this.params = null;
    this.usedCount = null;
  }
}

class SearchIndexerBuilder {

  constructor() {
    this.searchIndexer = new SearchIndexer();
  }

  id(id) {
    this.searchIndexer.id = id;
    return this;
  }

  type(type) {
    this.searchIndexer.type = type;
    return this;
  }

  url(url) {
    this.searchIndexer.url = url;
    return this;
  }

  referer(referer) {
    this.searchIndexer.referer = referer;
    return this;
  }

  params(params) {
    this.searchIndexer.params = params;
    return this;
  }

  usedCount(usedCount) {
    this.searchIndexer.usedCount = usedCount;
    return this;
  }

  build() {
    return this.searchIndexer;
  }
}

module.exports = SearchIndexer;