import PostModel from '../models/Posts.js';

export const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find();

    res.json(posts);
  } catch (err) {
    console.log(error);
    return res.status(500).json({ message: 'Не удалось получить статью' });
  }
};

export const getOne = async (req, res) => {
  try {
    const posts = await PostModel.findOne({ model: req.body.model });

    if (!posts) {
      return res.status(404).json({ message: 'Не удалось найти статью' });
    }

    res.json(posts);
  } catch (error) {
    console.log(e);
    res.status(500).json({ message: 'Ошибка при нахождении статьи' });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      name: req.body.name,
      device: req.body.device,
      model: req.body.model,
      phone: req.body.phone,
      problem: req.body.problem,
      email: req.body.email,
      // user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ошибка при сохранении' });
  }
};
