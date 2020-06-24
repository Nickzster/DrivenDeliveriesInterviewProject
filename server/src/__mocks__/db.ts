import mongoose from "mongoose";

const dbname = "driven-deliveries-test";

class MongoConnection {
  private static instance: MongoConnection;
  private db;
  constructor() {
    this.db = null;
  }
  public static create(): MongoConnection {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection();
    }
    return MongoConnection.instance;
  }
  public async connectDB() {
    if (!!this.db) return this.db;
    this.db = await mongoose.connect(`mongodb://127.0.0.1:27017/${dbname}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
  }
  public async destroyDB() {
    await this.db.connection.db.dropDatabase();
    await this.db.connection.close();
  }
  public async clearCollections() {
    const collections = await this.db.connection.db.collections();
    for (let collection of collections) {
      await collection.remove();
    }
  }
}

export default MongoConnection;
