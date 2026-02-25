import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Simple greeting endpoint
app.get('/greet/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

app.get('/todos', (req: Request, res: Response) => {
  const todos = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Schedule dentist appointment', completed: true },
    { id: 3, title: 'Finish project report', completed: false },
  ];

  res.json(todos);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
