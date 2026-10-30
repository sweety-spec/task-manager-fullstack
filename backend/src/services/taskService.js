let tasks = [];
let nextId = 1;

const getAll = () => tasks;
const getById = (id) => tasks.find((t) => t.id === id);

const create = ({ title }) => {
  const task = { id: nextId++, title, done: false };
  tasks.push(task);
  return task;
};

const update = (id, { title, done }) => {
  const task = getById(id);
  if (!task) return null;
  if (title !== undefined) task.title = title;
  if (done !== undefined) task.done = done;
  return task;
};

const remove = (id) => {
  const i = tasks.findIndex((t) => t.id === id);
  if (i === -1) return false;
  tasks.splice(i, 1);
  return true;
};

module.exports = { getAll, getById, create, update, remove };