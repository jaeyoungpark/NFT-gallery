import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore'
import { User } from './models'
import { ChakraProvider } from '@chakra-ui/react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'


import Timeline from './Timeline'
import { Card } from './Card'
import { CommentList } from './CommentList'
// import { CommentForm } from './CommentForm'

import { useEffect, useState } from 'react'


function App () {
  const [user, setUser] = useState({})
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
      setIsAdmin(user.signInUserSession.accessToken.payload['cognito:groups'].includes('admin'))
    }

    getUser()
  }, [])
  return (
    <ChakraProvider>
      <button onClick={async () => await Auth.signOut()}>
        Sign Out
      </button>
      <Timeline>
        {({ post }) => (
          <Card post={post} key={post.id}>
            <Card.Header author={post.user} />
            <Card.Main content={post.content} />
            <Card.Footer
              author={post.user}
              description={post.description}
            >
              <CommentList postId={post.id} isAdmin={isAdmin} />
            </Card.Footer>
          </Card>
        )}
      </Timeline>
    </ChakraProvider>
  )
}

export default withAuthenticator(App)


// function App () {
//   const [isAdmin, setIsAdmin] = useState(false)
//   const [user, setUser] = useState({})

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         // fetch the current signed in user
//         const user = await Auth.currentAuthenticatedUser()
//         // check to see if they're a member of the admin user group
//         setIsAdmin(user.signInUserSession.accessToken.payload['cognito:groups'].includes('admin'))
//         setUser(user)
//         //// save the file to the database
//         // const file = await Storage.put(pic.name, pic)
//         // const newUser = await DataStore.save(new Content({
//         //   image: pic.name
//         // }))
//         // console.log(newUser)        
//       } catch (err) {
//         console.error(err)
//       }
//     }
//     getData()
//   }, [])
      
//   return (
//     <ChakraProvider>
//       <button onClick={async () => await Auth.signOut()}>Sign Out</button> 
//       <Timeline>
//         {({ post }) => (
//           <Card post={post} key={post.id}>
//             <Card.Header author={post.author} />
//             <Card.Main content={post.content} />
//             {/* <S3Image key={image.name}> */}
//             <Card.Footer
//               author={post.author}
//               description={post.description}
//             >
//               <CommentList postId={post.id} />
//             </Card.Footer>
//             {/* <CommentForm /> */}
            
//           </Card>
//         )}
//       </Timeline>
//     </ChakraProvider>
//   )
// }

// export default withAuthenticator(App)