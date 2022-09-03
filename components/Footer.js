export default function Footer()
{
    return (
        <>
            <footer>
                <div className='container p-3'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='fs-6'>
                                BarryWire
                                <br />
                                <small className='text-muted'>A simple Nextjs boilerplate</small>
                            </p>
                        </div>
                        <div className='col-6'>
                            <ul className='nav nav-fill'>
                                <li className='nav-item'>
                                    <a className='link' href='https://twitter.com/brrywre' target='blank'>
                                        <i className='bi bi-twitter'></i>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='link' href='https://github.com/barrywire' target='blank'>
                                        <i className='bi bi-github'></i>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='link' href='https://www.linkedin.com/in/barnabas-wire-67518b192' target='blank'>
                                        <i className='bi bi-linkedin'></i>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='link' href='mailto:bmwemawire@gmail.com&subject=Hey%20Barry&body=Greetings,%20My%20name%20is...' target='blank'>
                                        <i className='bi bi-envelope'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}