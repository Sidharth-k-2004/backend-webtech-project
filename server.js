const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin:'http://localhost:3000'
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/webtech', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const commentSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: String,
});

const Comment = mongoose.model('Comment', commentSchema);

// API endpoint to save a new comment
app.post('/api/comments', async (req, res) => {
  try {
    const { name, message } = req.body;
    const date = new Date().toLocaleString();

    const newComment = new Comment({
      name,
      message,
      date,
    });

    console.log('Before saving:', newComment);

    await newComment.save();

    console.log('After saving:', newComment);

    res.status(201).json({ message: 'Comment saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT,()=>{
  console.log("Server running")
})
