import { Controller, HttpResponse, ok } from '@lhsm/api';

import { ReadfileService } from '../domain/services';

export class ReadFileController implements Controller {
  constructor(private readonly sampleService: ReadfileService) {}

  async handle(): Promise<HttpResponse<unknown | unknown[]>> {
    const data = await this.sampleService.readFile('sample');

    return ok(data);
  }
}
