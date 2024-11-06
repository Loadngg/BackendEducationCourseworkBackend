import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { AnswerService } from './answer.service'
import { AnswerDto } from './dto/answer.dto'

@Controller('answer')
export class AnswerController {
	constructor(private readonly answerService: AnswerService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: AnswerDto, @CurrentUser('id') userId: string) {
		return this.answerService.create(dto, userId)
	}
}
