import { Controller, Get, Post, Req, Query, Body, HttpCode } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { Request } from 'express';

interface Response {
	status: number;
	data: any;
}

class CreatePlaylist {
	public title: string;
	public description: string; 
}

@Controller('playlist')
export class PlaylistController {
	constructor(private readonly playlistService: PlaylistService) {

	}

	@Get()
	getData(@Query('name') name: string): any {
		let res: Response = {
			status: 200,
			data: name
		}
		return this.playlistService.getPlaylistName(name);
	}

	@Post()
	create(@Body() requestBody: CreatePlaylist ): any {
		console.log(requestBody);
		if (requestBody.title !== 'Tom') {
			let res = this.errorUntoken(requestBody);
			return res;
		} else {
			/*
			let res: Response = {
				status: 200,
				data: requestBody
			}*/
			return this.playlistService.appendNewPlaylist(requestBody);
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
