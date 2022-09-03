import React from 'react'

export default function Meta({ title, description, keywords })
{
    return (
        <React.Fragment>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </React.Fragment>
    )
}
