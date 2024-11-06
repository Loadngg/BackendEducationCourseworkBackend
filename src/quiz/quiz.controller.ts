import { Controller, Get, Param } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { QuizService } from './quiz.service'

@Controller('quiz')
export class QuizController {
	constructor(private readonly quizService: QuizService) {}

	@Get()
	@Auth()
	async getAll() {
		return this.quizService.getAll()
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.quizService.getById(id)
	}
}
