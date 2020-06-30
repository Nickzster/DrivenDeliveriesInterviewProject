import Sample from "../models/SampleModel";
import { ISample } from "../lib/interfaces/models";

const generateError = (error) => {
  return {
    success: false,
    data: null,
    error: error,
  };
};

const generateData = (SampleModel: ISample) => {
  return {
    success: true,
    data: {
      _id: SampleModel._id,
      id: SampleModel.id,
      message: SampleModel.message,
    },
    error: null,
  };
};

export const getMultipleSamples = async (
  queries = { page: 1 },
  ITEMS_PER_FETCH = 5
) => {
  try {
    const { page } = queries;
    let searchParams = {};
    //WARNING: This gets sent back unprotected!
    return await Sample.find(searchParams)
      .sort({ date: -1 })
      .skip((page - 1) * ITEMS_PER_FETCH)
      .limit(ITEMS_PER_FETCH);
  } catch (err) {
    return generateError(err);
  }
};

export const createSample = async (newId, newMessage) => {
  try {
    if (!!newId && !!newMessage) {
      let newSample = new Sample();
      newSample.id = newId;
      newSample.message = newMessage;
      await newSample.save();
      return generateData(newSample);
    }
    throw "Error!";
  } catch (err) {
    return generateError(err);
  }
};

export const getSample = async (id) => {
  try {
    if (!!id) {
      return generateData(await Sample.findById(id));
    }
    throw "Error!";
  } catch (err) {
    return generateError(err);
  }
};

export const updateSample = async (actualId, updatedId, updatedMessage) => {
  try {
    if (!!updatedId && !!updatedMessage) {
      let sample = await Sample.findById(actualId);
      let newSample = {
        id: updatedId != sample.id ? updatedId : sample.id,
        message:
          updatedMessage != sample.message ? updatedMessage : sample.message,
      };
      return generateData(
        await Sample.findByIdAndUpdate(
          { _id: actualId },
          { $set: newSample },
          { new: true }
        )
      );
    }
    throw "Error!";
  } catch (err) {
    return generateError(err);
  }
};

export const deleteSample = async (actualId) => {
  try {
    if (!!actualId) {
      await Sample.findByIdAndRemove(actualId);
      return "Successfully deleted.";
    }
    throw "Error!";
  } catch (err) {
    return generateError(err);
  }
};
