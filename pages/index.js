import Head from "next/head";
import Image from "next/image";

import ExperienceFragment from "../components/ExperienceFragment";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Slides from "../components/Slides";

function Renderer(component, id) {
  const key = `renderer-${id}`;
  switch (component.type) {
    case "ExperienceFragment":
      return <ExperienceFragment key={key} {...component} />;
    case "ResponsiveGrid":
      return (
        <ResponsiveGrid key={key}>
          {component.children.map((child, i) => Renderer(child, `${key}-${i}`))}
        </ResponsiveGrid>
      );
    case "Slides":
      return <Slides key={key} {...component.content} />;
    default:
      return null;
  }
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Welcome to PlayStation</title>
      </Head>
      {data.components.map(Renderer)}
    </div>
  );
}

async function fetchReferences(component) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${component.reference}`;
  if (component.format === "HTML") {
    const response = await fetch(url);
    let htmlContent = await response.text();

    // handle server-side includes
    if (component.children) {
      const promises = component.children.map(async (path) => {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
        const fragment = await fetch(url);
        return await fragment.text();
      });
      const children = await Promise.all(promises);
      component.children.forEach((child, i) => {
        htmlContent = htmlContent.replace(
          "<!--#include children -->",
          children[i],
        );
      });
    }
    component.content = htmlContent;
  } else if (component.format === "JSON") {
    const response = await fetch(url);
    const jsonContent = await response.json();
    component.content = jsonContent;
  }

  // handle nested components
  if (component.children) {
    const promises = component.children.map((child) => fetchReferences(child));
    await Promise.all(promises);
  }
  return component;
}

export async function getStaticProps(props) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/content/mock-aem-api.json`,
  );

  // Fetch HTML content for Experience Fragments that are in HTML format
  const promises = data.components.map((component) =>
    fetchReferences(component),
  );

  const updatedComponents = await Promise.all(promises);
  data.components = updatedComponents;

  return {
    props: { data },
    revalidate: 60 * 5, // 5 minutes
  };
}
