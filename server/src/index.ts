import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

dotenv.config({ path: ".env" });

import express from 'express';
import { agent } from './agent';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/budget', async (req, res) => {
  const { prompt, thread_id } = req.body;
  
  const result = await agent.invoke(
    {
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    },
    { configurable: { thread_id } }
  );
  res.json(result.messages.length > 0 ? result.messages[result.messages.length - 1]?.content : null);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
