import { Table, Bucket } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {

  // Create an S3 bucket
  const bucket = new Bucket(stack, "Uploads");
  // Create the DynamoDB table

  // userId: The id of the user that the note belongs to.
  // noteId: The id of the note.

  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
    table,
    bucket,
  };
}