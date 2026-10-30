const service = require('../services/taskService');

exports.getAll = (req, res) => res.json(service.getAll());

exports.getOne = (req, res) => {
  const task = service.getById(Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

exports.create = (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }
  res.status(201).json(service.create({ title: title.trim() }));
};

exports.update = (req, res) => {
  const task = service.update(Number(req.params.id), req.body);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

exports.remove = (req, res) => {
  const ok = service.remove(Number(req.params.id));
  if (!ok) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
};