import MongoConnection from "../__mocks__/db";

import { SampleTest } from "../controllers/tests/Sample";

MongoConnection.create();
let connection = new MongoConnection();

describe("Run tests", () => {
  beforeAll(async () => {
    await connection.connectDB();
  });
  afterAll(async () => {
    await connection.destroyDB();
  });
  afterEach(async () => {
    await connection.clearCollections();
  });
  describe("Run Sample Test", SampleTest);
});
