// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB URI (replace with your own MongoDB URI)
const mongoURI = "mongodb+srv://srimathi_1106:sri123@srimathip.zfeb5xf.mongodb.net/?retryWrites=true&w=majority&appName=SrimathiP"; // Make sure MongoDB is running

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define Blog Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ description: String }]
});

// Create Blog Model
const Blog = mongoose.model("Blog", blogSchema);

// CREATE: Add a new blog
app.post("/blogs", async (req, res) => {
  const { title, content } = req.body;
  const newBlog = new Blog({ title, content });

  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ message: "Error saving blog" });
  }
});

// READ: Get all blogs
app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

// READ: Get a specific blog by ID
app.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blog" });
  }
});

// UPDATE: Update a blog by ID
app.put("/blogs/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: "Error updating blog" });
  }
});

// DELETE: Delete a blog by ID
app.delete("/blogs/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting blog" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
