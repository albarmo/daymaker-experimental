import React, { useState } from "react";
import Head from "next/head";
import { Header1 } from "@/widgets/headers/header_1";
import { Header2 } from "@/widgets/headers/header_2";
import { Hero1 } from "@/widgets/body/hero/hero_1";
import { Hero2 } from "@/widgets/body/hero/hero_2";
import { Hero3 } from "@/widgets/body/hero/hero_3";
import { Footer1 } from "@/widgets/footers/footer_1";
import { Footer2 } from "@/widgets/footers/footer_2";
import { Footer3 } from "@/widgets/footers/footer_3";
import { Button, Container } from "@mantine/core";
import { Feature1 } from "@/widgets/body/feature/feature_1";
import { Feature2 } from "@/widgets/body/feature/feature_2";
import { Feature3 } from "@/widgets/body/feature/feature_3";
import { Faq1 } from "@/widgets/body/faq/faq_1";
import { Faq2 } from "@/widgets/body/faq/faq_2";
import { Faq3 } from "@/widgets/body/faq/faq_3";
import { Contact1 } from "@/widgets/body/contact/contact_1";
import { Contact2 } from "@/widgets/body/contact/contact_2";
import { Contact3 } from "@/widgets/body/contact/contact_3";
import { Carousel1 } from "@/widgets/body/carousel_1";
import JSZip, { file } from "jszip";
import ReactDOMServer from "react-dom/server";

const LINKS = [
  { label: "Link 1", link: "1" },
  { label: "Link 2", link: "2" },
];

const DATA = [
  {
    title: "Test",
    links: [
      { label: "Menu 1", link: "1" },
      { label: "Menu 2", link: "2" },
      { label: "Menu 3", link: "3" },
    ],
  },
];

// main engine for communicate with comp
const COMPONENTS_LIBRARY: any = {
  header: [
    {
      id: "h-01",
      type: "header",
      comp: <Header1 mainLinks={LINKS} userLinks={LINKS} />,
    },
    {
      id: "h-02",
      type: "header",
      comp: <Header2 links={LINKS} />,
    },
  ],
  body: [
    {
      id: "b-01",
      type: "hero",
      comp: <Hero1 />,
    },
    {
      id: "b-02",
      type: "hero",
      comp: <Hero2 />,
    },
    {
      id: "b-03",
      type: "hero",
      comp: <Hero3 />,
    },
    {
      id: "b-04",
      type: "carousel",
      comp: <Carousel1 />,
    },
    {
      id: "b-05",
      type: "contact",
      comp: <Contact1 />,
    },
    {
      id: "b-06",
      type: "contact",
      comp: <Contact2 />,
    },
    {
      id: "b-07",
      type: "contact",
      comp: <Contact3 />,
    },
    {
      id: "b-08",
      type: "feature",
      comp: <Feature1 />,
    },
    {
      id: "b-09",
      type: "feature",
      comp: <Feature2 />,
    },
    {
      id: "b-10",
      type: "feature",
      comp: <Feature3 />,
    },
    {
      id: "b-11",
      type: "faq",
      comp: <Faq1 />,
    },
    {
      id: "b-12",
      type: "faq",
      comp: <Faq2 />,
    },
    {
      id: "b-13",
      type: "faq",
      comp: (
        <Faq3
          categories={[
            {
              image: "https://vitejs.dev/logo.svg",
              label: "Sample",
            },
          ]}
        />
      ),
    },
  ],
  footer: [
    {
      id: "f-01",
      type: "hero",
      comp: <Footer1 links={LINKS} />,
    },
    {
      id: "f-02",
      type: "hero",
      comp: <Footer2 data={DATA} />,
    },
    {
      id: "f-03",
      type: "hero",
      comp: <Footer3 />,
    },
  ],
};

const scopes = {
  header: COMPONENTS_LIBRARY.header.length,
  body: COMPONENTS_LIBRARY.body.length,
  footer: COMPONENTS_LIBRARY.footer.length,
};

function randomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ExperimentalPage: React.FC = () => {
  // single page schema
  const appSchema = {
    app: {
      appId: "uuid",
      appType: "Store",
      description: "app description",
    },
    user: { id: "", email: "" },
    pages: [
      {
        pageName: "Page 1",
        pageId: "short-uuid",
        pageContext: "",
        screenComponents: [
          {
            compId:
              COMPONENTS_LIBRARY.header[
                randomNumberInRange(0, scopes.header - 1)
              ]?.id,
            compType: "header",
            description: "flat navbar",
            properties: {
              colorScheme: "",
              logo: "",
              title: "",
              submenu: [{ id: "", target: "" }],
              action: [{ id: "", target: "" }],
            },
          },
          {
            compId:
              COMPONENTS_LIBRARY.body[randomNumberInRange(0, scopes.body - 1)]
                ?.id,
            compType: "body",
            description: "hero",
            properties: {
              colorScheme: "",
              logo: "",
              title: "",
              submenu: [{ id: "", target: "" }],
              action: [{ id: "", target: "" }],
            },
          },
          {
            compId:
              COMPONENTS_LIBRARY.body[randomNumberInRange(0, scopes.body - 1)]
                ?.id,
            compType: "body",
            description: "carousel",
            properties: {
              colorScheme: "",
              logo: "",
              title: "",
              submenu: [{ id: "", target: "" }],
              action: [{ id: "", target: "" }],
            },
          },
          {
            compId:
              COMPONENTS_LIBRARY.body[randomNumberInRange(0, scopes.body - 1)]
                ?.id,
            compType: "body",
            description: "feature",
            properties: {
              colorScheme: "",
              logo: "",
              title: "",
              submenu: [{ id: "", target: "" }],
              action: [{ id: "", target: "" }],
            },
          },
          {
            compId:
              COMPONENTS_LIBRARY.body[randomNumberInRange(0, scopes.body - 1)]
                ?.id,
            compType: "body",
            description: "feature",
            properties: {
              colorScheme: "",
              logo: "",
              title: "",
              submenu: [{ id: "", target: "" }],
              action: [{ id: "", target: "" }],
            },
          },
          {
            compId:
              COMPONENTS_LIBRARY.body[randomNumberInRange(0, scopes.body - 1)]
                ?.id,
            compType: "body",
            description: "faq",
            properties: {
              //dynamic
              colorScheme: "",
              logo: "",
              title: "",
              submenu: [{ id: "", target: "" }],
              action: [{ id: "", target: "" }],
            },
          },
          {
            compId:
              COMPONENTS_LIBRARY.footer[
                randomNumberInRange(0, scopes.footer - 1)
              ]?.id,
            compType: "footer",
            description: "footer ",
            properties: {
              colorScheme: "",
              logo: "",
              title: "",
              submenu: [{ id: "", target: "" }],
              action: [{ id: "", target: "" }],
            },
          },
        ],
      },
    ],
  };

  const generateComponent = (cs: any) => {
    let CX: any[] = [];
    cs.forEach((element: any) => {
      COMPONENTS_LIBRARY[element.compType].forEach((component: any) => {
        if (component.id == element.compId) {
          // Only push if not already in CX
          if (!CX.some((c) => c.id === component.id)) {
            CX.push(component);
          }
        }
      });
    });
    return CX;
  };

  const getComponent = (id: string, type: string) => {
    COMPONENTS_LIBRARY[type].forEach((comp: any) => {
      // console.log({ comp }, '=> from lib')
      if (comp.id == id) {
        return comp.comp;
      } else {
        return <p>No Component</p>;
      }
    });
  };

  let [generationId, setGenerationId] = useState<number>(1);
  let [COMPX, setCOMPX] = React.useState<any[]>();

  React.useEffect(() => {
    if (!appSchema) return;
    const comps = appSchema.pages.flatMap((comp) => comp.screenComponents);
    const component = generateComponent(comps);
    // console.log({ component })
    setCOMPX(component);
  }, []);

  const regenerate = () => {
    setGenerationId((prev) => prev + 1);
    const comps = appSchema.pages.flatMap((comp) => comp.screenComponents);
    const component = generateComponent(comps);
    // console.log({ component })
    console.log(">>", component);
    setCOMPX(component);
  };

  console.log({ version: generationId, appSchema });

  const exportAsReact = async () => {
    const zip = new JSZip();
    const componentsInSchema = appSchema.pages.flatMap(
      (page) => page.screenComponents
    );

    const getComponentFromLibrary = (compId: string, compType: string) => {
      return COMPONENTS_LIBRARY[compType].find((c: any) => c.id === compId);
    };

    const getImportInfo = (compDetails: any) => {
      const component = getComponentFromLibrary(
        compDetails.compId,
        compDetails.compType
      );
        
      console.log('component >> ',component)
        
      if (!component) {
        return { folder: "", fileName: "", compName: "" };
      }

      const compName = component.comp.type?.name;
      const idNumber = component.id.split("-")[1];

      let folder = "";
      let fileName = "";

      switch (component.type) {
        case "header":
          folder = "headers";
          fileName = `header_${idNumber}.tsx`;
          break;
        case "footer":
          folder = "footers";
          fileName = `footer_${idNumber}.tsx`;
          break;
        default:
          if (compName?.startsWith("Hero")) {
            folder = "body/hero";
            fileName = `hero_${idNumber}.tsx`;
          } else if (compName?.startsWith("Feature")) {
            folder = "body/feature";
            fileName = `feature_${idNumber}.tsx`;
          } else if (compName?.startsWith("Faq")) {
            folder = "body/faq";
            fileName = `faq_${idNumber}.tsx`;
          } else if (compName?.startsWith("Contact")) {
            folder = "body/contact";
            fileName = `contact_${idNumber}.tsx`;
          } else if (compName?.startsWith("Carousel")) {
            folder = "body";
            fileName = `carousel_${idNumber}.tsx`;
          }
          break;
      }
      return { folder, fileName, compName };
    };

    const uniqueComponents = Array.from(
      new Map(
        componentsInSchema.map((comp) => {
          const info = getImportInfo(comp);
          return [`${info.folder}/${info.fileName}`, info];
        })
      ).values()
    );

    console.log({ componentsInSchema, uniqueComponents });

    const imports = [
      `import React from "react";`,
      ...uniqueComponents.map((info) => {
        return `import { ${info.compName} } from "./widgets/${
          info.folder
        }/${info.fileName.replace(".tsx", "")}";`;
      }),
    ].join("\n");

    const body = componentsInSchema
      .map((comp, idx) => {
        const { compName } = getImportInfo(comp);
        if (!compName) return null;
        return `        <${compName} />`;
      })
      .filter(Boolean)
      .join("\n");

    const pageContent = `
${imports}

const ExportedPage: React.FC = () => {
    return (
        <main>
${body}
        </main>
    );
};

export default ExportedPage;
    `.trim();

    zip.file("ExportedPage.tsx", pageContent);

    const resolvePath = (folder: string, fileName: string) => {
      // This path is relative to the public folder for client-side fetch
      return `/widgets/${folder}/${fileName}`;
    };

    for (const comp of uniqueComponents) {
      try {
        const filePath = resolvePath(comp.folder, comp.fileName);
        console.log(filePath);
        // Assuming component source files are in the public directory
        const response = await fetch(filePath);
        if (response.ok) {
          const content = await response.text();
          zip.file(`widgets/${comp.folder}/${comp.fileName}`, content);
        } else {
          console.error(`File not found: ${filePath}`);
          zip.file(
            `widgets/${comp.folder}/${comp.fileName}`,
            `// File not found: ${filePath}`
          );
        }
      } catch (e) {
        console.error(`Error fetching: ${comp.fileName}`, e);
        zip.file(
          `widgets/${comp.folder}/${comp.fileName}`,
          `// Error fetching: ${comp.fileName}`
        );
      }
    }

    zip.generateAsync({ type: "blob" }).then((blob: any) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "ExportedPage.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const exportStaticHtml = async () => {
    // 1. Render React components to an HTML string
    const componentsToRender = COMPX?.map((el: any, index: number) => (
      <div key={el.id + index}>{el.comp}</div>
    ));

    if (!componentsToRender) {
      console.error("No components to render for export.");
      return;
    }

    const renderContainer = React.createElement(
      "div",
      null,
      ...componentsToRender
    );
    const bodyHtml = ReactDOMServer.renderToStaticMarkup(renderContainer);

    // 2. Extract CSS styles from the document head
    const styleTags = document.head.querySelectorAll("style");
    let cssString = "";
    styleTags.forEach((styleTag) => {
      cssString += styleTag.innerHTML + "\n";
    });

    // 3. Create the final HTML file content
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Page</title>
    <style>
            /* Extracted CSS */
            ${cssString}
    </style>
</head>
<body>
    ${bodyHtml}
</body>
</html>
    `.trim();

    // 4. Create a Blob from the HTML content and trigger download
    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ExportedPage.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

      <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 50 }}>
        <Button
          style={{ boxShadow: "10px", border: "2px", marginRight: 5 }}
          radius={"xl"}
          onClick={() => regenerate()}
          color="lime"
        >
          Re-Generate
        </Button>
        <Button
          style={{ boxShadow: "10px", border: "2px", marginRight: 5 }}
          radius={"xl"}
          onClick={() => exportAsReact()}
          color="indigo"
        >
          Export-React
        </Button>
        <Button
          style={{ boxShadow: "10px", border: "2px" }}
          radius={"xl"}
          onClick={() => exportStaticHtml()}
          color="indigo"
        >
          Export-Html
        </Button>
      </div>
      <main style={{ width: "100vw", overflowX: "hidden" }}>
        {COMPX?.map((el: any, index: number) => (
          <div key={el.id + index}>{el.comp}</div>
        ))}
      </main>
      {/* BODY_SECTION */}
      {/* FOOTER_SECTION */}
    </>
  );
};

export default ExperimentalPage;
