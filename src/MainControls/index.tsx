import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from '../static/images/Sophiiet.png';

export const MainControls: FC<{ children: ReactElement }> = ({ children }) => {
	return (
		<div className='h-screen flex flex-col justify-between items-center'>
			<header className='w-screen flex justify-around items-center mt-10'>
				{/* <Link
					to='/'
					className='rounded overflow-hidden h-26 w-26 flex items-center'
				>
					<img src={logo} alt='logo' className='h-36' />
				</Link> */}
				<h1 className='text-secondary-default font-bold font-text subpixel-antialiased flex-grow text-center'>
					SOPHIIET
				</h1>
				<div className='hidden flex justify-between py-1 lg:flex flex-grow'>
					<div className='flex-grow'>
						<p className='text-center text-secondary-default hover:text-white'>
							<Link to='/'>Blogs</Link>
						</p>
					</div>
					<div className='flex-grow'>
						<p className='text-center text-secondary-default/50 hover:text-white'>
							<Link to='/'>Forum</Link>
						</p>
					</div>
					<div className='flex-grow hidden'>
						<p className='text-center text-secondary-default/50 hover:text-white'>
							<Link to='/'>Account</Link>
						</p>
					</div>
				</div>
				<div className='flex-grow text-center'>
					<button className='text-secondary-default border rounded px-2 text-sm'>
						Log in
					</button>
				</div>
			</header>
			{children}
			<footer className='w-screen mb-4'>
				{/* TODO: Replace the text buttons with icons */}
				<div className='flex justify-between py-1 lg:hidden'>
					<div className='flex-grow'>
						<p className='text-center text-secondary-default hover:text-white'>
							<Link to='/'>Blogs</Link>
						</p>
					</div>
					<div className='flex-grow'>
						<p className='text-center text-secondary-default/50 hover:text-white'>
							<Link to='/'>Forum</Link>
						</p>
					</div>
					<div className='flex-grow hidden'>
						<p className='text-center text-secondary-default/50 hover:text-white'>
							<Link to='/'>Account</Link>
						</p>
					</div>
				</div>
				<p className='hidden lg:block text-center text-secondary-default'>
					&copy; {new Date().getFullYear()} Sophiiet.
				</p>
			</footer>
		</div>
	);
}