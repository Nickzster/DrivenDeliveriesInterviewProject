import { createSample, getSample, updateSample, deleteSample } from "../Sample";

export const SampleTest = () => {
  it("Should create a sample", async () => {
    const sample = await createSample("123456", "message!");
    console.log(sample);
    expect(sample).toBeDefined();
  });
  it("Should be able to find a sample", async () => {
    const sample = await createSample("123456", "message!");
    const duplicate = await getSample(sample.data._id);
    expect(duplicate.data.id).toEqual(sample.data.id);
    expect(duplicate.data.message).toEqual(sample.data.message);
  });
  it("Should be able to update a sample", async () => {
    const sample = await createSample("123456", "message!");
    expect(sample.data.message).toEqual("message!");
    const updatedSample = await updateSample(
      sample.data._id,
      sample.data.id,
      "a new message!"
    );
    expect(updatedSample.data.message).toEqual("a new message!");
  });
  it("Should delete a sample", async () => {
    const sample = await createSample("123456", "message!");
    const message = await deleteSample(sample.data._id);
    expect(message).toEqual("Successfully deleted.");
  });
};
