import GalleryContainer from '../components/GalleryContainer'

const images = [
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAiCYqsR_qiZisogitkA_VSPsTGPdg4nyNJinfMMzfF9zkXyZ',
     alt: 'jacuzzi',
    },
    {img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUie3qslsmTPodrQwxKu_GWGGZW4YKhY8oHhjoSXFhkoDAi_tS',
    alt: 'mesa de ping pong',
    },
    {img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR359Dt3BW0OqmG7DE-GjCpMzIXMR96B4fr0owOs_O0Fj4crUS_',
    alt: 'piscina interior',
    },
    {img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFEQ51czPW4OxCWs4N0XDB5kLP3h1ZVhwQLX0l-M39HExyW7jQ',
    alt: 'piscina exterior',
    },
    {img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIs8cg7Sqtu0zCNyVCdUQBRZaTWscNMOfrmEj5NI2xnoOpX5s7',
    alt: 'spa',
    },
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jDen9ZoipMrNexm_G-t4i1eLevb5-uMLM3VeALnBy4cpJDit',
     alt: 'sauna',
    },
    {img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSkbEpxUXrHZXxmasoga2hALyEO88J9AYyGghGQugCiLQ9ZVcfC',
    alt: 'gimnasio',
    },
    {img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_YIYNb-YFAio1FgkoSs0EK9zrmKSvOTjw_cKWkwKhLQZ3sJM5',
    alt: 'cancha de futbol',
    },
    {img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFx0-7LTVDAoJj_dzfYi_PNKlsafsBlitHDq2k284kuTen2qfq',
    alt: 'bar',
    },
    {img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTju7lUWqtrCSdVxtHDIj_lGFyrVMLE3auYqkBmRz9UxfdS17bR',
    alt: 'restaurante',
    },
    {img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYrCenDO7ssgKKnf20b3G4to3m_SfghHvvm06Z-U890qg7k8Ek',
    alt: 'sala infantil',
    },
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxk-d9juyjWhuxgCTOGFGCt-mywX-4M8xxfmsTfx-p8fzfN2-K',
    alt: 'parrilla',
    },
]

function Gallery() {
  return (
    <>
    <GalleryContainer 
    title = 'Instalaciones'
    images = {images}/>
    </>
  )
}

export default Gallery