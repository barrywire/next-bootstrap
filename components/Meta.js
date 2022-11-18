import React from 'react'

export default function Meta({ title })
{
    return (
        <React.Fragment>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
            <meta name='description' content='A Next.js Bootstrap Quickstart pack' />
            <meta name='keywords' content='Next.js, Bootstrap, Quickstart, Template' />
        </React.Fragment>
    )
}
