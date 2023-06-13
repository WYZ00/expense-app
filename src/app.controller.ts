import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReport() {
    return [];
  }

  @Get(':id')
  getIncomeReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'created';
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'deleted';
  }
}
