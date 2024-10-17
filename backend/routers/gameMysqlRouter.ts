import { Router } from 'express';
import { Game } from '../entities/Game';
import { AppDataSource } from '../start/data-source';

interface Response {
  count: number;
  results: Game[];
}

const gameRouter = Router();
const gameRepository = AppDataSource.getRepository(Game);

// Get all games
gameRouter.get('/', async (req, res) => {
  const games = await gameRepository.find();
  const response: Response = {
    count: games.length,
    results: games,
  };
  res.send(response);
});
export default gameRouter;
