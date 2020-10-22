import { Injectable } from '@nestjs/common';

class NewPlaylist {
	public id: number;
	public title: string;
	public description: string; 
	public createdDate: string;
	public updatedDate: string;
	public status: boolean;
}

@Injectable()
export class PlaylistService {

	private answer; 

	public constructor() {

	}

	getPlaylistName(name): any {
		return name;
	}

	appendNewPlaylist(body): NewPlaylist {
		this.answer = 'asdadasd';
		let data = {
			id: 2,
			title: body.title,
			description: `${body.description} ${this.answer}`,
			createdDate: '2020-10-22 02:16:12',
			updatedDate: '2020-10-22 02:16:12',
			status: true
		}

		return data;
	}

}
