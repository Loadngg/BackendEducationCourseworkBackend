import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { AnswerDto } from './dto/answer.dto'

@Injectable()
export class AnswerService {
	constructor(private prisma: PrismaService) {}

	async create(dto: AnswerDto, userId: string) {
		return this.prisma.userAnswer.create({
			data: {
				userId,
				questionId: dto.questionId,
				answerId: dto.answerId,
				isCorrect: dto.isCorrect,
			},
		})
	}
}
