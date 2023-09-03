module.exports = {
  id: { type: String, required: true, unique: true },
  type: String,
  level: Number,
  gitId: { type: string, required: true },
  domain: String,
  postCount: String
};