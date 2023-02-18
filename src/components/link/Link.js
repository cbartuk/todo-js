export default function Link ({ href, className }) {
  const target = href.toLowerCase();
  // const link = `go to ${href} page`;
  return (
    <a href={target} className={className}>{href}</a>
  )
}
