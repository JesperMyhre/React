import { useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Nav({}) {
  const {id} = useParams()
  console.log(id)
  const [active, setActive] = useState()
  const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]
  return (
    <nav>
      <ul>
        {categoryList.map((item, i) => <li key={i + "cat"}><Link to={"produkter/"+item.replaceAll(" ", "-")} className={active === item ? "active" : null} href="#">{item}</Link></li>)}
      </ul>
    </nav>
  )
}