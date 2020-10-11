import { Controller, Get, Post, Req, Query, Body, HttpCode } from '@nestjs/common';
import { Request } from 'express';

interface Response {
	status: number;
	data: any;
}

class CreatePlaylist {
	public title: string;
	public age: number;
	public isCheck: boolean;
}

@Controller('playlist')
export class PlaylistController {

	@Get()
	getData(@Query('name') name: string): any {
		let res: Response = {
			status: 200,
			data: name
		}
		return res;
	}

	@Post()
	create(@Body() requestBody: CreatePlaylist ): any {
		console.log(requestBody);
		if (requestBody.title !== 'Tom') {
			let res = this.errorUntoken(requestBody);
			return res;
		} else {
			let res: Response = {
				status: 200,
				data: requestBody
			}
			return res;
		}
		
	}

	@HttpCode(401)
	errorUntoken(body): any {
		let res: Response = {
			status: 400,
			data: body
		}
		return res;
	}
}
