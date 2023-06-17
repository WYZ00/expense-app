import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  gethello() {
    return 'Welcome Expense App';
  }
}
