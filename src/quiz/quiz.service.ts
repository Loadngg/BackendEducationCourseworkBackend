import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class QuizService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.quiz.findMany()
	}

	async getById(id: string) {
		return this.prisma.quiz.findUnique({
			where: {
				id,
			},
			include: {
				questions: true,
			},
		})
	}
}
