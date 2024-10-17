import { Router } from 'express';
import { AppDataSource } from '../start/data-source';
import { Store } from '../entities/Store';

interface Response {
  count: number;
  results: Store[];
}

const StoreRouter = Router();
const StoreRepository = AppDataSource.getRepository(Store);

// Get all Stores
StoreRouter.get('/', async (req, res) => {
  const stores = await StoreRepository.find();
  const response: Response = {
    count: stores.length,
    results: stores,
  };
  res.send(response);
});
export default StoreRouter;
