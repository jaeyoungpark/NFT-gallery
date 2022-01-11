// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { User, Comment, Content, TimelineItem } = initSchema(schema);

export {
  User,
  Comment,
  Content,
  TimelineItem,
  ContentType
};