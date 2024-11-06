import { IsNumber, IsString } from 'class-validator'

export class UserQuizDto {
	@IsString()
	quizId: string

	@IsNumber()
	score: number
}
