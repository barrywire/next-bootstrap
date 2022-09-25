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
      <Meta title='Next.js Bootstrap UI kit' />

      <Navbar active='Active' variant='dark' />

      <main>

        <div className='container p-2'>
          <div className='row'>
            <div className='col'>
              <p className='fs-6'>
                Next Basic Frontend
              </p>
            </div>

            <div className='col'>
              <span>
                Created by:{' '}
                <a href='https://github.com/BMWire'>Barry Wire</a>
              </span>
            </div>
          </div>

          <p className='fs-6'>
            Get started by editing{' '}
            <code className='code'>pages/index.js</code>
          </p>

          <dl className='row'>
            <dt className='col-sm-3'>
              <a href='https://nextjs.org/docs'>Documentation</a>
            </dt>
            <dd className='col-sm-9'>
              Read the docs to get started, or jump to{' '}
              <a href='https://nextjs.org/docs#basic-example'>
                this tutorial
              </a>
              .
            </dd>
          </dl>


          <h5>
            Packed with the basic batteries out of the box.
          </h5>
          <dl className='row'>
            <dt className='col-sm-3'>
              <a href='https://getbootstrap.com/docs/5.1'>Bootstrap</a>
            </dt>
            <dd className='col-sm-9'>
              Both the css and js have been imported in{' '}
              <code>pages/_app.js</code>
              .
            </dd>

            <dt className='col-sm-3'>
              <a href='https://icons.getbootstrap.com/'>Bootstrap Icons</a>
            </dt>
            <dd className='col-sm-9'>
              Has been imported in{' '}
              <code>pages/_app.js</code>
              {' '} as well.
            </dd>

            <dt className='col-sm-3'>
              <a href='https://www.npmjs.com/package/sass'>Sass</a>
            </dt>
            <dd className='col-sm-9'>
              It is in <code>styles/sass</code>.
            </dd>

            <dt className='col-sm-3'>
              <a href='https://www.npmjs.com/package/commitlint'>Commitlint</a>
            </dt>
            <dd className='col-sm-9'>
              Make commit messages that are in line with the conventional standards.
            </dd>
          </dl>

          <p>
            Once you are done, you can deploy your app on Vercel in minutes.
          </p>
          <dl className='row'>
            <dt className='col-sm-3'>
              <a href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
                Vercel deploy</a>
            </dt>
          </dl>

        </div>

      </main>


      <Footer />
    </>
  )
}
