module.exports = {
  id: { type: String, required: true, unique: true },
  tier: Number,
  url: String,
  gitId: { type: string, required: true },
  savedPath: String,
  commit: String,
  parentId: String,
  createdAt: Date
};