//should be capital single

const mongoose = require(`mongoose`);

//schema
const patientschema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minLength: 7,
      maxLength: 30,
      required: true,
    },
    Gender: {
      type: String,
      enum: [`Female`, `Male`],
      required: true,
    },
    Illness: {
      type: String,
      trim: true,
      required: true,
      trim: true,
    },

    IsReadyToDischarge: {
      type: Boolean,
    },
    Medication: {
      type: String,
      trim: true,
      required: true,
    },
    daysOfAdmission: {
      type: Number,
      min: 1,
      max: 100,
      required: true,
    },
    wards: {
      type: String,
      required: true,
      enum: [`Adults`, `Peadiatric`],
    },
  },
  { timestamps: true },
);
//model
const Patient = mongoose.model(`Patient`, patientschema);

module.exports = Patient;
