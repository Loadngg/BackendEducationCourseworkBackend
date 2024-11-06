import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { LectureController } from './lecture.controller'
import { LectureService } from './lecture.service'

@Module({
	controllers: [LectureController],
	providers: [LectureService, PrismaService],
})
export class LectureModule {}
