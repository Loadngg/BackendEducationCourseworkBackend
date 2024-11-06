import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'
import { UserQuizDto } from './dto/user.dto'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id,
			},
		})
	}

	async getByLogin(login: string) {
		return this.prisma.user.findUnique({
			where: {
				login,
			},
		})
	}

	async create(dto: AuthDto) {
		const user = {
			login: dto.login,
			password: await hash(dto.password),
		}

		return this.prisma.user.create({
			data: user,
		})
	}

	async createResult(dto: UserQuizDto, userId: string) {
		const result = {
			userId,
			quizId: dto.quizId,
			score: dto.score,
		}

		return this.prisma.userQuiz.create({
			data: result,
		})
	}

	async getResults(userId: string) {
		return this.prisma.userQuiz.findMany({
			where: {
				userId,
			},
		})
	}
}
