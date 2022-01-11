/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent {
    onCreateContent {
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
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent {
    onUpdateContent {
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
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent {
    onDeleteContent {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateTimelineItem = /* GraphQL */ `
  subscription OnCreateTimelineItem {
    onCreateTimelineItem {
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
export const onUpdateTimelineItem = /* GraphQL */ `
  subscription OnUpdateTimelineItem {
    onUpdateTimelineItem {
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
export const onDeleteTimelineItem = /* GraphQL */ `
  subscription OnDeleteTimelineItem {
    onDeleteTimelineItem {
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
