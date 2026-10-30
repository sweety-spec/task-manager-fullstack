import { useEffect, useState } from 'react';
import './App.css';

const API = 'http://localhost:3000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    try {
      const res = await fetch(API);
      setTasks(await res.json());
      setError('');
    } catch {
      setError('Can’t reach the server. Start the API with node src/server.js, then refresh.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    setError('');
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error);
      return;
    }
    setTitle('');
    loadTasks();
  };

  const toggleTask = async (task) => {
    await fetch(`${API}/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !task.done }),
    });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    loadTasks();
  };

  const total = tasks.length;
  const doneCount = tasks.filter((t) => t.done).length;
  const remaining = total - doneCount;
  const allClear = total > 0 && remaining === 0;

  const visible = tasks.filter((t) =>
    filter === 'all' ? true : filter === 'todo' ? !t.done : t.done
  );

  const filters = [
    { id: 'all', label: 'All', n: total },
    { id: 'todo', label: 'To do', n: remaining },
    { id: 'done', label: 'Done', n: doneCount },
  ];

  let summary = `${remaining} still to do`;
  if (total === 0) summary = 'A clean page.';
  else if (allClear) summary = 'Everything is ticked off.';

  let emptyMessage = 'Nothing on the list yet. Type the first thing you need to do above.';
  if (total > 0 && filter === 'todo') emptyMessage = 'Nothing left to do.';
  if (total > 0 && filter === 'done') emptyMessage = 'Nothing ticked off yet.';

  return (
    <main className="sheet">
      {allClear && <div className="stamp">All clear</div>}

      <h1>Loose Ends</h1>
      <p className="summary">{summary}</p>

      <form className="add" onSubmit={addTask}>
        <input
          aria-label="New task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs doing?"
        />
        <button type="submit">Add task</button>
      </form>

      {error && <p className="error" role="alert">{error}</p>}

      <div className="filters">
        {filters.map((f) => (
          <button
            key={f.id}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            <span>{f.n}</span>
          </button>
        ))}
      </div>

      <ul className="list">
        {visible.map((task) => (
          <li key={task.id} className={`row ${task.done ? 'is-done' : ''}`}>
            <button
              className="toggle"
              aria-pressed={task.done}
              onClick={() => toggleTask(task)}
            >
              <span className="tick" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7.5l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="label">{task.title}</span>
            </button>
            <button
              className="remove"
              aria-label={`Delete ${task.title}`}
              onClick={() => deleteTask(task.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      {!loading && visible.length === 0 && <p className="empty">{emptyMessage}</p>}

      {total > 0 && (
        <div className="progress">
          <div className="bar">
            <span style={{ width: `${(doneCount / total) * 100}%` }} />
          </div>
          <p>{doneCount} of {total} done</p>
        </div>
      )}
    </main>
  );
}

export default App;