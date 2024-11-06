import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength } from 'class-validator'

export class AuthDto {
	@ApiProperty()
	@IsString()
	login: string

	@ApiProperty()
	@IsString()
	@MinLength(6, {
		message: 'Password must be at least 6 characters long',
	})
	password: string
}
