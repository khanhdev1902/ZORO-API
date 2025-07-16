import express from 'express';
import chatbotRouter from './routes/genimi';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors())
app.use('/api', chatbotRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
