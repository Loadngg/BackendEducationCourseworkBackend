import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserQuizDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get(':id')
	@Auth()
	async getResults(@CurrentUser('id') userId: string) {
		return this.userService.getResults(userId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('/result')
	@Auth()
	async create(@Body() dto: UserQuizDto, @CurrentUser('id') userId: string) {
		return this.userService.createResult(dto, userId)
	}
}
