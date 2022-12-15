import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/dtos/http.modules';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, DatabaseModule],  
})
export class AppModule {}
