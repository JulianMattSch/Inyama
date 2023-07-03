import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { PutCommand, DynamoDBDocument } from '@aws-sdk/lib-dynamodb'

import { AWS_REGION } from '../config'

const dbOptions = {
  // endpoint: 'http://localhost:8001', // add for local usage
  region: AWS_REGION,
  convertEmptyValues: true
}

const client = DynamoDBDocument.from(new DynamoDBClient(dbOptions))

export async function putItem(tableName, item) {
  try {
    const params = {
      TableName: tableName,
      Item: DynamoDBDocument.marshall(item)
    }
    const command = new PutCommand(params)
    return await client.send(command)
  } catch (err) {
    throw err
  }
}
