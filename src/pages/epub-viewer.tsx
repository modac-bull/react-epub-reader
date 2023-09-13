import 'regenerator-runtime'
import 'twin.macro'
import { useRef } from 'react'
import { EpubViewer, ReactEpubViewer } from 'react-epub-viewer'
import { styled } from 'twin.macro'

const EpubTest = () => {
  const viewerRef = useRef(null)

  const bookStyle = {
    color: '#ffffff',
    fontSize: 22,
  }

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <Container>
        <ReactEpubViewer
          viewerStyle={bookStyle}
          url={'/files/epub_demo.epub'}
          ref={viewerRef}
        />
      </Container>
    </div>
  )
}

export default EpubTest

const Container = styled.div`
  background-color: #000;
  iframe {
    p,
    .calibre1 {
      color: #fff !important;
    }
  }
`
