import {
  Context,
  APIGatewayProxyCallback,
  APIGatewayProxyEvent,
} from "aws-lambda"

import { ApolloServer } from "apollo-server-lambda"
import { schema } from "./schema"

const lambda = new ApolloServer({
  playground: {
    settings: {
      "request.credentials": "include",
    },
  },
  schema,
})

const handler = lambda.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})

// Fix wrong graphql server path on lambda:
// https://github.com/apollographql/apollo-server/issues/2136
export function graphql(
  event: APIGatewayProxyEvent,
  context: Context,
  callback: APIGatewayProxyCallback
): void {
  if (event.httpMethod === "GET") {
    const path = event.requestContext.path || event.path
    handler({ ...event, path }, context, callback)
  } else {
    handler(event, context, callback)
  }
}
