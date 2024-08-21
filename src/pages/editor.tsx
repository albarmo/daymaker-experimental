import React, { useState } from 'react'
import Head from 'next/head'
import { Header1 } from '@/widgets/headers/header_1'
import { Header2 } from '@/widgets/headers/header_2'
import { Hero1 } from '@/widgets/body/hero/hero_1'
import { Hero2 } from '@/widgets/body/hero/hero_2'
import { Hero3 } from '@/widgets/body/hero/hero_3'
import { Footer1 } from '@/widgets/footers/footer_1'
import { Footer2 } from '@/widgets/footers/footer_2'
import { Footer3 } from '@/widgets/footers/footer_3'
import { Button, Container, Grid } from '@mantine/core'
import { Feature1 } from '@/widgets/body/feature/feature_1'
import { Feature2 } from '@/widgets/body/feature/feature_2'
import { Feature3 } from '@/widgets/body/feature/feature_3'
import { Faq1 } from '@/widgets/body/faq/faq_1'
import { Faq2 } from '@/widgets/body/faq/faq_2'
import { Faq3 } from '@/widgets/body/faq/faq_3'
import { Contact1 } from '@/widgets/body/contact/contact_1'
import { Contact2 } from '@/widgets/body/contact/contact_2'
import { Contact3 } from '@/widgets/body/contact/contact_3'
import { Carousel1 } from '@/widgets/body/carousel_1'

import { DndContext } from '@dnd-kit/core';
import { useDroppable } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';

const LINKS = [
    { label: 'Link 1', link: '1' },
    { label: 'Link 2', link: '2' },
]

const DATA = [
    {
        title: 'Test',
        links: [
            { label: 'Menu 1', link: '1' },
            { label: 'Menu 2', link: '2' },
            { label: 'Menu 3', link: '3' },
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

const scopes = {
    header: COMPONENTS_LIBRARY.header.length,
    body: COMPONENTS_LIBRARY.body.length,
    footer: COMPONENTS_LIBRARY.footer.length,
}


function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function Droppable(props: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };


    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}
export function Draggable(props: any) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    return (
        <button ref={setNodeRef} style={{ ...style, width: '100px', height: '100px' }} {...listeners} {...attributes}>
            {props.children}
        </button>
    );
}

const Editor: React.FC = () => {
    // single page schema
    const containers = ['AppPreviewer'];
    const draggableMarkup = COMPONENTS_LIBRARY.body?.map((item: any, index: number) => <Draggable key={index} id={item.id}>{item.comp}</Draggable>)
    const [parent, setParent] = useState(null);


    function handleDragEnd(event: any) {
        const { over } = event;
        setParent(over ? over.id : null);
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Grid>
                <Grid.Col span={4} w={500} h={500} bg={'gray'}>
                    <Grid>
                        <Grid.Col span={4} w={500} h={500} bg={'gray'}>
                            {parent === null ? draggableMarkup : null}
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid.Col span={4} w={500} h={500} bg={'blue'}>
                    {containers.map((id) => (
                        <Droppable key={id} id={id} width='500px' height='500px'  >
                            {console.log(parent, id)}
                            {parent === id ? draggableMarkup : id}
                        </Droppable>
                    ))}
                </Grid.Col>
            </Grid>
        </DndContext>
    )
}

export default Editor
