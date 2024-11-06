import { Controller, Get, Param } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { LectureService } from './lecture.service'

@Controller('lecture')
export class LectureController {
	constructor(private readonly lectureService: LectureService) {}

	@Get()
	@Auth()
	async getAll() {
		return this.lectureService.getAll()
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.lectureService.getById(id)
	}
}
