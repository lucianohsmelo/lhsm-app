import { FileRepository } from '@lhsm/repository-file';

export class SampleFileRepository {
  constructor(private readonly fileRepository: FileRepository) {}
  async readFile(path: string): Promise<string> {
    return this.fileRepository.readFile(path);
  }
}
