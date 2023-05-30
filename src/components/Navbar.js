import React from 'react'
import { NavLink } from 'react-router-dom'

import LOADER from '../gif/loader.gif'
// import BG_VID from '../Videos/bg-1.mp4'

export default function Navbar() {
  return (
    <>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container-fluid'>
					<NavLink className='navbar-brand' to='#' />
                    <img src={LOADER} alt='Loading...' style={{width: '50px'}}/>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
								<NavLink
									className='nav-link '
									aria-current='page'
									to='/' >
									Home
                                    </NavLink>
							</li>
							
							<li className='nav-item'>
								<NavLink className='nav-link' to='/guess' >
									Guess
                                    </NavLink>
							</li>
                            <li className='nav-item'>
								<NavLink className='nav-link' to='/search' >
									Search
                                    </NavLink>
							</li>
							
						</ul>
					</div>
				</div>
			</nav>
		</>
  )
}
