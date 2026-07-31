import mongoose, { Schema, Document, Connection } from 'mongoose';

export interface ISubscriber extends Document {
  email: string;
  subscribedAt: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const SubscriberSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export function getSubscriberModel(connection: Connection) {
  return connection.models.Subscriber || connection.model<ISubscriber>('Subscriber', SubscriberSchema);
}