// Next imports
import Link from 'next/link';

export default function Header({ active, variant })
{
    return (
        <>
            <div className='container py-2 border-bottom'>
                <nav className={`navbar navbar-${ variant } bg-${ variant } justify-content-between px-2 mt-2`}>
                    <Link href='/'>
                        <a className='navbar-brand'>
                            Next.js Bootstrap
                            <br />
                            <span className='text-danger'>
                                Starter Pack
                            </span>
                        </a>
                    </Link>

                    <ul className='nav nav-pills'>
                        <li className='nav-item mx-lg-1 mx-1'>
                            <Link href='#'>
                                <a className={`nav-link ${ active === 'Coolio' ? 'active' : '' }`}>Coolio</a>
                            </Link>
                        </li>

                        <li className='nav-item mx-lg-1 mx-1'>
                            <Link href='#'>
                                <a className={`nav-link ${ active === 'Active' ? 'active' : '' }`}>Active</a>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    );
}
