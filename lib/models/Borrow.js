import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    totalBooks: {
      type: Number,
      required: true,
      min: 1,
    },

    status: {
      type: String,
      enum: ["pending", "issued", "returned", "overdue", "cancelled"],
      default: "pending",
      index: true,
    },

    notes: {
      type: String,
      maxlength: 300,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

borrowSchema.index({ user: 1, createdAt: -1 });

borrowSchema.virtual("items", {
  ref: "BorrowItem",
  localField: "_id",
  foreignField: "borrow",
});

export default mongoose.models.Borrow ||
  mongoose.model("Borrow", borrowSchema);
