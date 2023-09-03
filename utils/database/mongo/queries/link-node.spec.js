const { LinkNodeBuilder } = require('../../../../models/link-node')
const { insertLinkNode, findLinkNodeById, findLinkNodeByParentNode, updateLinkNode } = require('./link-node');
const { GitBuilder } = require("../../../../models/git");

test('case1) success for insertLinkNode', async () => {
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


  // await insertLinkNode(linkNode);
});

test('case2) success for findLinkNodeById', async () => {
  const linkNode = await findLinkNodeById("aaa");
  console.log('linkNode', linkNode);
});

test ('case3) success for updateLinkNode', async () => {
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
    .savedPath("save/to/path2")
    .commit("commit2")
    .parentId(null)
    .createdAt(now)
    .build();
  // await updateLinkNode(linkNode);
})