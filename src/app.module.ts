import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { LectureModule } from './lecture/lecture.module'
import { QuestionModule } from './question/question.module'
import { QuizModule } from './quiz/quiz.module'
import { UserModule } from './user/user.module'
import { AnswerModule } from './answer/answer.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		LectureModule,
		QuizModule,
		QuestionModule,
		AnswerModule,
	],
})
export class AppModule {}
