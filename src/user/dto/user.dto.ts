import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class UserQuizDto {
	@ApiProperty()
	@IsString()
	quizId: string

	@ApiProperty()
	@IsNumber()
	score: number
}
