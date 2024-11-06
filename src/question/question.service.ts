import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class QuestionService {
	constructor(private prisma: PrismaService) {}

	async getById(id: string) {
		return this.prisma.quizQuestion.findUnique({
			where: {
				id,
			},
			include: {
				answers: true,
			},
		})
	}
}
