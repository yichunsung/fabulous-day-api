import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaylistService {

	public constructor() {

	}

	getPlaylistName(name): any {
		return name;
	}

}
