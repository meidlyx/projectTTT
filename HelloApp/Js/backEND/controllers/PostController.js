import PostModel from '../models/Posts.js';

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      name: req.body.name,
      device: req.body.device,
      model: req.body.model,
      phone: req.body.phone,
      problem: req.body.problem,
      email: req.body.email,
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Ошибка при сохранении' });
  }
};

