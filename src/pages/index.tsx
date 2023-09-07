import React from 'react'
import Head from 'next/head'
import { Header1 } from '@/components/headers/header_1'
import { Header2 } from '@/components/headers/header_2'
import { Hero1 } from '@/components/body/hero/hero_1'
import { Hero2 } from '@/components/body/hero/hero_2'
import { Hero3 } from '@/components/body/hero/hero_3'
import { Footer1 } from '@/components/footers/footer_1'
import { Footer2 } from '@/components/footers/footer_2'
import { Footer3 } from '@/components/footers/footer_3'
import { Container } from '@mantine/core'
import { Feature1 } from '@/components/body/feature/feature_1'
import { Feature2 } from '@/components/body/feature/feature_2'
import { Feature3 } from '@/components/body/feature/feature_3'
import { Faq1 } from '@/components/body/faq/faq_1'
import { Faq2 } from '@/components/body/faq/faq_2'
import { Faq3 } from '@/components/body/faq/faq_3'
import { Contact1 } from '@/components/body/contact/contact_1'
import { Contact2 } from '@/components/body/contact/contact_2'
import { Contact3 } from '@/components/body/contact/contact_3'
import { Carousel1 } from '@/components/body/carousel_1'

const LINKS = [
  { label: 'Menu 1', link: '1' },
  { label: 'Menu 2', link: '2' },
]

const DATA = [
  {
    title: 'Test',
    links: [
      { label: 'Menu 1', link: '1' },
      { label: 'Menu 2', link: '2' },
    ],
  },
]

// main engine for communicate with comp
const COMPONENTS_LIBRARY: any = {
  header: [
    {
      id: 'h-01',
      type: 'header',
      comp: <Header1 mainLinks={LINKS} userLinks={LINKS} />,
    },
    {
      id: 'h-02',
      type: 'header',
      comp: <Header2 links={LINKS} />,
    },
  ],
  body: [
    {
      id: 'b-01',
      type: 'hero',
      comp: <Hero1 />,
    },
    {
      id: 'b-02',
      type: 'hero',
      comp: <Hero2 />,
    },
    {
      id: 'b-03',
      type: 'hero',
      comp: <Hero3 />,
    },
    {
      id: 'b-04',
      type: 'carousel',
      comp: <Carousel1 />,
    },
    {
      id: 'b-05',
      type: 'contact',
      comp: <Contact1 />,
    },
    {
      id: 'b-06',
      type: 'contact',
      comp: <Contact2 />,
    },
    {
      id: 'b-07',
      type: 'contact',
      comp: <Contact3 />,
    },
    {
      id: 'b-08',
      type: 'feature',
      comp: <Feature1 />,
    },
    {
      id: 'b-09',
      type: 'feature',
      comp: <Feature2 />,
    },
    {
      id: 'b-10',
      type: 'feature',
      comp: <Feature3 />,
    },
    {
      id: 'b-11',
      type: 'faq',
      comp: <Faq1 />,
    },
    {
      id: 'b-12',
      type: 'faq',
      comp: <Faq2 />,
    },
    {
      id: 'b-13',
      type: 'faq',
      comp: (
        <Faq3
          categories={[
            { image: 'https://vitejs.dev/logo.svg', label: 'Sample' },
          ]}
        />
      ),
    },
  ],
  footer: [
    {
      id: 'f-01',
      type: 'hero',
      comp: <Footer1 links={LINKS} />,
    },
    {
      id: 'f-02',
      type: 'hero',
      comp: <Footer2 data={DATA} />,
    },
    {
      id: 'f-03',
      type: 'hero',
      comp: <Footer3 />,
    },
  ],
}

const generateRandomScheme = () => {
  // generate random sheme here
}

const ExperimentalPage: React.FC = () => {
  // single page schema
  const appSchema = {
    app: {
      appId: 'uuid',
      appType: 'Store',
      description: 'app description',
    },
    user: { id: '', email: '' },
    pages: [
      {
        pageName: 'Page 1',
        pageId: 'short-uuid',
        pageContext: '',
        screenComponents: [
          {
            compId: 'h-01',
            compType: 'header',
            description: 'flat navbar',
            properties: {
              //dynamic
              colorScheme: '',
              logo: '',
              title: '',
              submenu: [{ id: '', target: '' }],
              action: [{ id: '', target: '' }],
            },
          },
          {
            compId: 'b-02',
            compType: 'body',
            description: 'hero',
            properties: {
              //dynamic
              colorScheme: '',
              logo: '',
              title: '',
              submenu: [{ id: '', target: '' }],
              action: [{ id: '', target: '' }],
            },
          },
          {
            compId: 'b-04',
            compType: 'body',
            description: 'carousel',
            properties: {
              //dynamic
              colorScheme: '',
              logo: '',
              title: '',
              submenu: [{ id: '', target: '' }],
              action: [{ id: '', target: '' }],
            },
          },
          {
            compId: 'b-08',
            compType: 'body',
            description: 'feature',
            properties: {
              //dynamic
              colorScheme: '',
              logo: '',
              title: '',
              submenu: [{ id: '', target: '' }],
              action: [{ id: '', target: '' }],
            },
          },
          {
            compId: 'b-10',
            compType: 'body',
            description: 'feature',
            properties: {
              //dynamic
              colorScheme: '',
              logo: '',
              title: '',
              submenu: [{ id: '', target: '' }],
              action: [{ id: '', target: '' }],
            },
          },

          {
            compId: 'b-11',
            compType: 'body',
            description: 'faq',
            properties: {
              //dynamic
              colorScheme: '',
              logo: '',
              title: '',
              submenu: [{ id: '', target: '' }],
              action: [{ id: '', target: '' }],
            },
          },
          {
            compId: 'f-02',
            compType: 'footer',
            description: 'footer ',
            properties: {
              //dynamic
              colorScheme: '',
              logo: '',
              title: '',
              submenu: [{ id: '', target: '' }],
              action: [{ id: '', target: '' }],
            },
          },
        ],
      },
    ],
  }

  const generateComponent = (cs: any) => {
    let CX: any[] = []
    cs.forEach((element: any) => {
      console.log(element.compType, element.compId)
      COMPONENTS_LIBRARY[element.compType].forEach((component: any) => {
        console.log({ component }, '=> from lib')
        if (component.id == element.compId) {
          CX.push(component)
        }
      })
    })
    return CX
  }

  const getComponent = (id: string, type: string) => {
    COMPONENTS_LIBRARY[type].forEach((comp: any) => {
      console.log({ comp }, '=> from lib')
      if (comp.id == id) {
        return comp.comp
      } else {
        return <p>No Component</p>
      }
    })
  }

  let [COMPX, setCOMPX] = React.useState<any[]>()
  React.useEffect(() => {
    if (!appSchema) return
    const comps = appSchema.pages.flatMap((comp) => comp.screenComponents)
    const component = generateComponent(comps)
    console.log({ component })
    setCOMPX(component)
  }, [])

  return (
    <>
      <Head>
        <title>Daymaker Experimental</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER_SECTION  */}
      {/* {JSON.stringify(appSchema.pages)} */}
      {/* {JSON.stringify(COMPX)} */}

      <Container>{COMPX?.map((el: any) => el.comp)}</Container>
      {/* BODY_SECTION */}
      {/* FOOTER_SECTION */}
    </>
  )
}

export default ExperimentalPage
