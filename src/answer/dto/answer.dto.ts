import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsString } from 'class-validator'

export class AnswerDto {
	@ApiProperty()
	@IsString()
	questionId: string

	@ApiProperty()
	@IsString()
	answerId: string

	@ApiProperty()
	@IsBoolean()
	isCorrect: boolean
}
