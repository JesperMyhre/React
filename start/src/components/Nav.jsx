import { useState } from 'react'

export default function Nav({category}) {
    const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]

    return(
      <nav>
      <ul>
        {categoryList.map((item, index) => 
        <li key ={index+"mjeu"}>
          <a className={category === item ? "active" : null} href="#">{item}</a>
        </li>)}
      </ul>
    </nav>
    )
  }