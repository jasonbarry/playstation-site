import Head from "next/head";
import Image from "next/image";

import ExperienceFragment from "../components/ExperienceFragment";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Slides from "../components/Slides";

import fetchPlaystationData from "../lib/fetchData";

function Renderer(component) {
  switch (component.type) {
    case "ExperienceFragment":
      return <ExperienceFragment {...component} />;
    case "ResponsiveGrid":
      return (
        <ResponsiveGrid>
          {component.children.map((child) =>
            Renderer({ key: child.type, ...child }),
          )}
        </ResponsiveGrid>
      );
    case "Slides":
      return <Slides {...component.content} />;
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
  if (component.type === "ExperienceFragment" && component.format === "HTML") {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${component.reference}`;
    const response = await fetch(url);
    const htmlContent = await response.text();
    component.content = htmlContent;
  }
  if (component.children) {
    component.children.forEach((child) => fetchReferences(child));
  }
  return component;
}

export async function getStaticProps(props) {
  const data = await fetchPlaystationData();

  // Fetch HTML content for Experience Fragments that are in HTML format
  const fetchPromises = data.components.map((component) =>
    fetchReferences(component),
  );

  const updatedComponents = await Promise.all(fetchPromises);
  data.components = updatedComponents;

  return {
    props: { data },
    revalidate: 60 * 5, // 5 minutes
  };
}
