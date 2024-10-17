import { Router } from 'express';
import { ParentPlatform } from '../entities/ParentPlatforms';
import { AppDataSource } from '../start/data-source';

interface Response {
  count: number;
  results: ParentPlatform[];
}

const ParentPlatformRouter = Router();
const ParentPlatformRepository = AppDataSource.getRepository(ParentPlatform);

// Get all ParentPlatforms
ParentPlatformRouter.get('/', async (req, res) => {
  const ParentPlatforms = await ParentPlatformRepository.find();
  const response: Response = {
    count: ParentPlatforms.length,
    results: ParentPlatforms,
  };
  res.send(response);
});
export default ParentPlatformRouter;
