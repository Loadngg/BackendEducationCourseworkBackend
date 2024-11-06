import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class LectureService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.lecture.findMany()
	}

	async getById(id: string) {
		return this.prisma.lecture.findUnique({
			where: {
				id,
			},
			include: {
				materials: true,
			},
		})
	}
}
