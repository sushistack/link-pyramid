const { LinkNodeBuilder } = require('../../../../models/link-node')
const { insertLinkNodeById, findLinkNodeById, findLinkNodeByParentNode, updateLinkNode } = require('./link-node');
const { GitBuilder } = require("../../../../models/git");

test('case1) success for insertLinkNodeById', async () => {
    const now = new Date();

    const git = new GitBuilder()
        .id("gitId")
        .platform("bitbucket")
        .username("Sinosuke")
        .repository("reponame")
        .build();

    const linkNode = new LinkNodeBuilder()
        .id("aaa")
        .tier(0)
        .gitId(git.id)
        .savedPath("save/to/path")
        .commit("commit")
        .parentId(null)
        .createdAt(now)
        .build();


    // await insertLinkNodeById(linkNode);
});

test('case2) success for findLinkNodeById', async () => {
    const linkNode = await findLinkNodeById("aaa");
    console.log('linkNode', linkNode);
});
