//Link do GraphCMS
//https://app.graphcms.com/clone/1d7442bf5a434389904c44d54a041b01?name=Ignite%20Lab%2002

import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"

/*
//GQL Permite escrever query do GrapCms
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

//Tipo Lesson
interface Lesson {
  id: string;
  title: string
}

  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY
    }).then(response => {
      console.log(response.data)
    })
  })
  

  //Bem mais simples do que fazer o Use Effect acima
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  console.log(data)

      <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>

 */

function App() {
  return (
    <div>
      <Event />
    </div>
  )
}

export default App
