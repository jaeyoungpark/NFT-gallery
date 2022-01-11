const aws = require('aws-sdk')
const ddb = new aws.DynamoDB()
 
exports.handler = async (event, context) => {
 const date = new Date()
 const params = {
   Item: {
     __typename: { S: 'Author' },
     id: { S: event.request.userAttributes.sub },
     name: { S: event.userName },
     profilePic: {
       S:
       'https://placekitten.com/640/360'
     },
     createdAt: { S: date.toISOString() },
     updatedAt: { S: date.toISOString() },
     _version: { N: '1' },
     _lastChangedAt: { N: `${date.getTime()}` }
 
   },
   TableName: process.env.TABLE_NAME
 }
 
 try {
   const item = await ddb.putItem(params).promise()
   console.log(item)
 } catch (err) {
   console.error(err)
 }
 
 context.done(null, event)
} 


// // eslint-disable-next-line
// exports.handler = async function (event) {
// 	// save the file to the database
// 	const file = await Storage.put(pic.name, pic)

// 	const newUser = await DataStore.save(new Content({
// 	  image: pic.name
// 	}))

// 	console.log(newUser)
// 	// <S3Image key={image.name}>
	
//   // console.log('Received S3 event:', JSON.stringify(event, null, 2));
//   // // Get the object from the event and show its content type
//   // const bucket = event.Records[0].s3.bucket.name; //eslint-disable-line
//   // const key = event.Records[0].s3.object.key; //eslint-disable-line
//   // console.log(`Bucket: ${bucket}`, `Key: ${key}`);
// };
