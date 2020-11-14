export interface TodoList {
	id: number;
	name: string;
	order: number;
	isActive: boolean;
	description: string;
}

export interface ResponseFormat {
	status: number; // Network status
	message: string; // Response Message
	data: any // Return Data
}