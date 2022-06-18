// Next imports
import Head from 'next/head'

export default function Home()
{
  return (
    <div className='container p-2'>
      <Head>
        <title>Next Basic Frontend</title>
        <meta name='description' content='Custom nextjs boilerplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <p className='fs-5'>
                Next Basic Frontend
              </p>
            </div>

            <div className='col'>
              <p>
                Created by:{' '}
                <a href='https://github.com/BMWire'>Barry Wire</a>
              </p>
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

      <footer>
        <small className='text-muted'>A simple Nextjs boilerplate</small>
      </footer>

    </div>
  )
}
