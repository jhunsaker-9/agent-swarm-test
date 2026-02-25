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

// TODO: Add more endpoints here (agents will work on this)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
