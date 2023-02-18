import List from 'components/list'

// Eger buraya yazilirsa Public Variable olur
// const links = [
//   'Home', 'About', 'Contact'
// ]

// function Deneme () {
//   // Globalde tanimladigimda burada da asagida da kullanabilirim.
// }

export default function Navbar() {

  // Private Variable
  const links = [
    'Home', 'About', 'Contact'
  ]

  return (
    <nav>
      <List links={links} />
    </nav>
  )
}
