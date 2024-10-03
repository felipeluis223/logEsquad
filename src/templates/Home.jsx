import { Outlet } from 'react-router-dom'

export default function Home({onLogout}){
	return (
		<section>
			<p>home</p>
			<Outlet />
		</section>
	)
}