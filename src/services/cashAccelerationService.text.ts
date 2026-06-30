import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {
  getContracts,
  getCashKicks,
} from "./cashAccelerationService";

const mock = new MockAdapter(axios);

describe("cashAccelerationService", () => {
  afterEach(() => {
    mock.reset();
  });

  test("fetches contracts", async () => {
    mock.onGet(
      "http://localhost:3001/contracts"
    ).reply(200, [
      {
        id: "1",
        name: "Contract 1",
      },
    ]);

    const result = await getContracts();

    expect(result).toHaveLength(1);

    expect(result[0].name).toBe("Contract 1");
  });

  test("fetches cash kicks", async () => {
    mock.onGet(
      "http://localhost:3001/cashKicks"
    ).reply(200, [
      {
        id: "1",
        name: "Advance",
      },
    ]);

    const result = await getCashKicks();

    expect(result).toHaveLength(1);

    expect(result[0].name).toBe("Advance");
  });
});