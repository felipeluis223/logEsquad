import { Outlet } from 'react-router-dom'
import Header from '../components/Header/inde'

export default function Home({onLogout}){
	return (
		<section>
			<Header onLogout={onLogout}/>
			
			<Outlet />
		</section>
	)
}