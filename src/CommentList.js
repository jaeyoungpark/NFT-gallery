import { useEffect, useState } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Box, Text } from '@chakra-ui/react'

import { Comment } from './models'

export function CommentList ({ postId, isAdmin }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
      const getComments = async () => {
        const postComments = await DataStore.query(Comment, p => p.timelineitemID('eq', postId))
        setComments(postComments)
      }
      getComments()
    }, [])
    return (
      <Box>
        {comments.map(comment => (
          <Text key={comment.id}>
            <Text key={comment.id}>
              <Text as='b'>{comment.user.username} </Text>
              {comment.body}
            </Text>
            {isAdmin && <button onClick={async () => {
              const modelToDelete = await DataStore.query(Comment, comment.id)
              DataStore.delete(modelToDelete)
            }}>
              delete
            </button>}
          </Text>
        ))}
      </Box>
    )
  }
  