import { Controller, Get, Param } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { QuestionService } from './question.service'

@Controller('question')
export class QuestionController {
	constructor(private readonly questionService: QuestionService) {}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.questionService.getById(id)
	}
}
