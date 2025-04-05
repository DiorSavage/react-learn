export type UserAllType = {
	email: string,
	username: string,
	password: string,
	age: number,
	id: number
}

export type UserLoginFormData = {
	email: string;
	password: string;
}

export type UserLoginType = {
	user: {
		email: string;
		username: string;
		age: number;
		password: string;
		id: number
	},
	tokens: {
		access_token: string;
		token_type: "Bearer" | "Auth"
	}
}

// {
//   "user": {
//     "email": "nigger123@gmail.com",
//     "username": "nigger123",
//     "age": 21,
//     "password": "$2b$12$yZ1bhFDtq82Ys6GDnmuMXuaIqEw6ax1MBUCC2fO77te0hXbntKGri",
//     "id": 2
//   },
//   "tokens": {
//     "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiZW1haWwiOiJuaWdnZXIxMjNAZ21haWwuY29tIiwiZXhwIjoxNzQzNjgzMDcyLjU0Njg5NCwiaWF0IjoxNzQzNjgyMTcyLjU0NjkwOH0.bQUxMuxyBLlNqjTR2ePu_cAPcuc2NMtW1wX161oEpdl8RcVafYeumOusKejCs-Rz5WymkQiSOrd7Vls_UHBW15NS6BmVXqXLpACTrTWrv-6rc2I7WyY2Qa8AmWvwgpXInzT4Y0g_U_KcW4gDTH3fO1A2wKIndbeiIXTtxFbO0PalS8UC1ofsyd1gzvqOHPF6wpi-b8VkDtdkqCbD-tgwrHtboRHn9vp9rTgroT8yG-PLZPNRJ5lPiIxULm1MlI40xwLv__WkSBwH-3c-FpS0CnQQaTK0xADnT-l1sfmyIGIxW6hBoBOMbYhGnlhHpmutg7uLs2QZ1QvrxmE0ehwfnA",
//     "token_type": "Bearer"
//   }
// }