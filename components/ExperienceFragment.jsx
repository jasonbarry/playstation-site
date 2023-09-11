export default function ExperienceFragment({ content, style }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} style={style} />;
}
