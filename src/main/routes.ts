import { Express, Router } from 'express';

import { adaptRoute } from '@lhsm/api';
import { FileRepository } from '@lhsm/repository-file';

import { ReadFileWithRequestController } from '../controllers';
import { SampleFileRepository } from '../domain/repositories/SampleFileRepository';
import { ReadfileService } from '../domain/services/SampleService';

const fileRepository = new FileRepository();
const repo = new SampleFileRepository(fileRepository);
const service = new ReadfileService(repo);

export const setupRountes = (app: Express): void => {
  const router = Router();

  app.use('/api', router);

  router.get('/readFile/:path', adaptRoute(new ReadFileWithRequestController(service)));
};
