import { MongoClient } from "mongodb";

const { MONGO_URI, MONGO_DB } = process.env;

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI enironment variable inside .env.local"
  );
}

if (!MONGO_DB) {
  throw new Error(
    "Please define the MONGO_DB enironment variable inside .env.local"
  );
}

let cached = global.mongo;

if (!cached.conn) {
  cached = global.mongo = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(MONGO_URI, opts).then((client) => {
      return {
        client,
        db: client.db(MONGO_DB),
      };
    });
    cached.conn = await cached.promise;
    return cached.conn;
  }
};
