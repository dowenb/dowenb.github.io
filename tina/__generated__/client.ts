import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '368f3b94b77f44e9878a9a8944b63f37cec5f227', queries,  });
export default client;
  