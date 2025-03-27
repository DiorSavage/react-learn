import Users from '@/app/_components/Users'

const fetchData = async () => {
	"use server"

	const response = await fetch('http://localhost:5000/users', {
		next: {
			revalidate: 60 // в секундах
		},
		cache: 'force-cache' // только статика,
	})
	const data = await response.json()
	return data
}

export default async function () {

	const data = await fetchData()
	console.log(data)
	if (data) {
		return (
			<div>
				<h1>Отзывы клиентов</h1>
				{data.map((user: any) => {
					return (
						<Users user={user} key={user.id} />
					)
				})}
			</div>
		)
	}
}