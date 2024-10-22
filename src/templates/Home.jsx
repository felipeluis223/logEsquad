import { Outlet } from 'react-router-dom'
import Header from '../components/Header/inde'

export default function Home(){
	return (
		<section className='sm:flex sm:flex-row bg-[#242424]'>
			<Header/>
			<Outlet />
		</section>
	)
}