import { UserDto } from './dto/user.dto';

export class UserAPI{
	public static async getAll(): Promise<UserDto[]> {
		const res = await fetch("http://localhost:3001/api/v1/user", {
			method: "GET"
		})

		const data = await res.json();

		return data;
	}

	public static async getById(user_id: number){
		const res = await fetch(`http://localhost:3001/api/v1/user/${user_id}`, {
			method: "GET"
		})

		const data = await res.json();

		return data;
	}
}