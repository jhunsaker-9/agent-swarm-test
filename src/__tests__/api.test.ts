import request from 'supertest';
import app from '../index';

describe('API Endpoints', () => {
  test('health endpoint should return ok status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
    expect(typeof response.body.timestamp).toBe('string');
  });

  test('greet endpoint should return greeting', async () => {
    const response = await request(app).get('/greet/Alex');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, Alex!' });
  });

  test('todos endpoint should return a list of todos', async () => {
    const response = await request(app).get('/todos');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(3);
    response.body.forEach((todo: { id: number; title: string; completed: boolean }) => {
      expect(typeof todo.id).toBe('number');
      expect(typeof todo.title).toBe('string');
      expect(typeof todo.completed).toBe('boolean');
    });
  });
});
