/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
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
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        source
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContents = /* GraphQL */ `
  query SyncContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        source
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTimelineItem = /* GraphQL */ `
  query GetTimelineItem($id: ID!) {
    getTimelineItem(id: $id) {
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
export const listTimelineItems = /* GraphQL */ `
  query ListTimelineItems(
    $filter: ModelTimelineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimelineItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTimelineItems = /* GraphQL */ `
  query SyncTimelineItems(
    $filter: ModelTimelineItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTimelineItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
