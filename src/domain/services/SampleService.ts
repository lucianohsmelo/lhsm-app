import { Sample } from '../entities';
import { SampleFileRepository } from '../repositories/SampleFileRepository';

export class ReadfileService {
  constructor(private readonly sampleRepository: SampleFileRepository) {}

  async readFile(path: string): Promise<Sample[]> {
    const fileContents = await this.sampleRepository.readFile(`../lhsm-repository-file/mocks/${path}.json`);

    return this.sampleParse(fileContents);
  }

  private sampleParse(str: string): Sample[] {
    return JSON.parse(str) as Sample[];
  }
}
