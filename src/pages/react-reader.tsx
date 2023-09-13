import React, { useRef, useState } from 'react'
import { ReactReader, ReactReaderStyle } from 'react-reader'

import 'twin.macro'
export default function ReactReaderTest() {
  // And your own state logic to persist state

  const [page, setPage] = useState('')
  const renditionRef = useRef<any>(null)
  const tocRef = useRef<any>(null)
  const locationChanged = (epubcifi: any) => {
    if (renditionRef.current && tocRef.current) {
      const { displayed, href } = renditionRef.current.location.start
      const chapter = tocRef.current.find((item: any) => item.href === href)
      setPage(
        `Page ${displayed.page} of ${displayed.total} in chapter ${
          chapter ? chapter.label : 'n/a'
        }`,
      )
    }
  }

  console.log('page', page)
  const ownStyles = {
    ...ReactReaderStyle,
    arrow: {
      ...ReactReaderStyle.arrow,
      color: 'red',
    },
    readerArea: {
      ...ReactReaderStyle.readerArea,
      backgroundColor: '#000',
    },
  }
  return (
    <div style={{ height: '100vh' }} tw="bg-black">
      <ReactReader
        showToc={true}
        readerStyles={ownStyles}
        // location={location}
        locationChanged={locationChanged}
        url="/files/epub_demo.epub"
        getRendition={rendition => {
          renditionRef.current = rendition
          rendition.themes.register('custom', {
            p: {
              'font-family': 'Helvetica, sans-serif',
              'font-weight': '400',
              'font-size': '15px',
              color: '#fff',
            },
          })
          rendition.themes.select('custom')
        }}
        tocChanged={toc => (tocRef.current = toc)}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          left: '1rem',
          textAlign: 'center',
          zIndex: 1,
          color: '#fff',
        }}
      >
        {page}
      </div>
    </div>
  )
}
