import Link from 'components/link';
import './list.scss'

export default function List({ links, inline }) {
  return (
    <ul className={`list ${inline && 'd-flex'}`}>
      {
        links.map((link, index) => {
          return (
            <li key={`link-${index}`}>
              <Link href={link} className={`${inline && 'px-3'}`} />
            </li>
          )
        })
      }
    </ul>
  )
}

List.defaultProps = {
  inline : true
}
