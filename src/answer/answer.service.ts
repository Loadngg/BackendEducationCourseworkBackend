import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { AnswerDto } from './dto/answer.dto'

@Injectable()
export class AnswerService {
	constructor(private prisma: PrismaService) {}

	async getById(quizId: string, userId: string) {
		return this.prisma.userAnswer.findMany({
			where: {
				userId,
				quizId,
			},
		})
	}

	async create(dto: AnswerDto, userId: string) {
		return this.prisma.userAnswer.create({
			data: {
				userId,
				questionId: dto.questionId,
				quizId: dto.quizId,
				answerId: dto.answerId,
				isCorrect: dto.isCorrect,
			},
		})
	}
}
