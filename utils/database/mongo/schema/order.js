module.exports = {
  id: { type: String, required: true, unique: true },
  url: String,
  keywords: String,
  status: String,
  createdAt: Date
};