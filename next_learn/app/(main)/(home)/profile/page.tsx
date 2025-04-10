const ProfilePage = async () => {
	// const { data: userData } = useSession()
	// const session = await getServerSession(authConfig)
	return (
		<div>Profile</div>
		// <div>
		// 	Profile
		// 	{session && session.user ? 
		// 	<>
		// 		<div className='flex flex-col w-1/3'>
		// 			<img width={220} className='rounded-full' src={session.user.image!} />
		// 			<span>email: {session.user.email}</span>
		// 			<span>username: {session.user.username}</span>
		// 		</div>

		// 		{/* <form onSubmit={(e) => {
		// 			e.preventDefault()
		// 			signOut({ callbackUrl: "/" })
		// 		}}>
		// 			<button className='rounded-md bg-black text-white px-5 py-2 transition-all duration-300 hover:bg-white hover:text-black' type='submit'>Log Out</button>
		// 		</form> */}
		// 		{/* <button onClick={() => signOut({ callbackUrl: "/" })}></button> */}
		// 	</>
		// 	: <div>Loading ... </div>}
		// </div>
	);
}

export default ProfilePage