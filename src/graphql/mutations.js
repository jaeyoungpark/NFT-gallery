/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
      id
      type
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
      id
      type
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
      id
      type
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      body
      user {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      timelineitemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentUserId
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      body
      user {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      timelineitemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentUserId
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      body
      user {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      timelineitemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentUserId
      owner
    }
  }
`;
export const createTimelineItem = /* GraphQL */ `
  mutation CreateTimelineItem(
    $input: CreateTimelineItemInput!
    $condition: ModelTimelineItemConditionInput
  ) {
    createTimelineItem(input: $input, condition: $condition) {
      id
      description
      postTime
      content {
        id
        type
        source
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          body
          timelineitemID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentUserId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      timelineItemContentId
      timelineItemUserId
      owner
    }
  }
`;
export const updateTimelineItem = /* GraphQL */ `
  mutation UpdateTimelineItem(
    $input: UpdateTimelineItemInput!
    $condition: ModelTimelineItemConditionInput
  ) {
    updateTimelineItem(input: $input, condition: $condition) {
      id
      description
      postTime
      content {
        id
        type
        source
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          body
          timelineitemID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentUserId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      timelineItemContentId
      timelineItemUserId
      owner
    }
  }
`;
export const deleteTimelineItem = /* GraphQL */ `
  mutation DeleteTimelineItem(
    $input: DeleteTimelineItemInput!
    $condition: ModelTimelineItemConditionInput
  ) {
    deleteTimelineItem(input: $input, condition: $condition) {
      id
      description
      postTime
      content {
        id
        type
        source
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          body
          timelineitemID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentUserId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      timelineItemContentId
      timelineItemUserId
      owner
    }
  }
`;
