export default function ExperienceFragment({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
