import mongoose, { Connection } from "mongoose";
import dns from "dns";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Fallback DNS for Node.js SRV resolution issue on certain local networks
if (MONGODB_URI.startsWith("mongodb+srv://")) {
  try {
    // Avoid resetting if it's already set or custom
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
  } catch (err) {
    console.warn("Mongoose: Failed to set custom DNS servers", err);
  }
}

interface MongooseConnectionsCache {
  connections: { [key: string]: Connection };
  promises: { [key: string]: Promise<Connection> };
}

declare global {
  var mongooseCache: MongooseConnectionsCache | undefined;
}

const cached = (global.mongooseCache as any) || {};

if (!cached.connections) {
  cached.connections = {};
}
if (!cached.promises) {
  cached.promises = {};
}

global.mongooseCache = cached;

export async function dbConnect(path: string = ""): Promise<Connection> {
  const dbName = path.replace(/^\//, "");

  if (cached.connections[dbName]) {
    return cached.connections[dbName];
  }

  if (!cached.promises[dbName]) {
    let connectionString = MONGODB_URI as string;

    // Append database name dynamically
    if (dbName) {
      if (connectionString.includes('?')) {
        const [base, params] = connectionString.split('?');
        const baseNorm = base.endsWith('/') ? base.slice(0, -1) : base;
        connectionString = `${baseNorm}/${dbName}?${params}`;
      } else {
        const baseNorm = connectionString.endsWith('/') ? connectionString.slice(0, -1) : connectionString;
        connectionString = `${baseNorm}/${dbName}`;
      }
    }

    cached.promises[dbName] = mongoose.createConnection(connectionString, {
      bufferCommands: false,
      family: 4,
    }).asPromise();
  }

  try {
    cached.connections[dbName] = await cached.promises[dbName];
  } catch (error) {
    delete cached.promises[dbName];
    throw error;
  }

  return cached.connections[dbName];
}