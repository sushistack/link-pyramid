module.exports = {
  id: { type: String, required: true, unique: true },
  type: String,
  url: Number,
  referer: String,
  params: String,
  usedCount: String
};
