class Git {
    constructor() {
        this.id = null;
        this.platform = null;
        this.username = null;
        this.repository = null;
    }
}

class GitBuilder {
    constructor() {
        this.git = new Git();
    }

    id (id) {
        this.git.id = id;
        return this;
    }

    platform (platform) {
        this.git.platform = platform;
        return this;
    }

    username (username) {
        this.git.username = username;
        return this;
    }

    repository (repository) {
        this.git.repository = repository;
        return this;
    }

    build () {
        return this.git;
    }

}

module.exports = {
    Git,
    GitBuilder
};