"use client"

import { queryClient } from '@/shared/api/QueryClient'
import { useAppSelector } from '@/shared/hooks/hooks'

const ProfilePage = () => {

	const { user, tokens } = useAppSelector(state => state.userSlice)

	return (
		<section>
      nigger
			<div className="bg-blue-500 text-white py-4 px-6 text-center">
        <h2 className="text-xl font-bold">Профиль пользователя</h2>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Имя пользователя:</label>
          <p className="text-gray-900">{user.username || "Не указано"}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Email:</label>
          <p className="text-gray-900">{user.email || "Не указано"}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">Возраст:</label>
          <p className="text-gray-900">{user.age ? `${user.age}` : "Не указано"}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-1">ID:</label>
          <p className="text-gray-900">{user.id || "Не указано"}</p>
        </div>
      </div>
		</section>
	);
}

export default ProfilePage