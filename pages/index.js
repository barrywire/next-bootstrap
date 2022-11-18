// Next imports
import Head from 'next/head'

// Component imports
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home()
{
  return (
    <>
      <Meta title='Next.js Bootstrap Starter Pack' />

      <Navbar active='Active' variant='' />

      <main>

        <div className='container px-4 py-5'>
          <h2 className=''>Batteries</h2>
          <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
            {/* Documentation */}
            <div className='feature col'>
              <h3 className='fs-2'>
                <a href='https://nextjs.org/docs' className='fs-2'>Documentation</a>
              </h3>
              <p>
                Read the docs to get started, or jump to{' '}
                <a href='https://nextjs.org/docs#basic-example' className='fs-6'>
                  this tutorial
                </a>
                .
              </p>
            </div>

            {/* Bootstrap */}
            <div className='feature col'>
              <h3 className='fs-2'>
                <a href='https://getbootstrap.com/docs/5.1' className='fs-2'>Bootstrap</a>
              </h3>
              <p>
                Both the css and js have been imported in{' '}
                <code>pages/_app.js</code>
                .
              </p>
            </div>

            {/* Bootstrap Icons */}
            <div className='feature col'>
              <h3 className='fs-2'>
                <a href='https://icons.getbootstrap.com' className='fs-2'>Bootstrap Icons</a>
              </h3>
              <p>
                Has been imported in{' '}
                <code>pages/_app.js</code>
                {' '} as well.
              </p>
            </div>

            {/* Sass */}
            <div className='feature col'>
              <h3 className='fs-2'>
                <a href='https://www.npmjs.com/package/sass' className='fs-2'>Sass</a>
              </h3>
              <p>
                It is in <code>styles/sass</code>.
              </p>
            </div>

            {/* Commitlint */}
            <div className='feature col'>
              <h3 className='fs-2'>
                <a href='https://www.npmjs.com/package/commitlint' className='fs-2'>Commitlint</a>
              </h3>
              <p>
                Make commit messages that are in line with the conventional standards.
              </p>
            </div>

          </div>
          {/* Deploying */}
          <div className='feature col'>
            <h3 className='fs-2'>
              <a href='https://www.npmjs.com/package/commitlint' className='fs-2 text-dark'>Deploying</a>
            </h3>
            <p>
              When done, deploy to Vercel in minutes.
              <br />
              <code>vercel --prod</code>
            </p>
          </div>
        </div>

      </main>


      <Footer />
    </>
  )
}
