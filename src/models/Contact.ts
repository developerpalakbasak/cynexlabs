import mongoose, { Schema, Document, Connection } from 'mongoose';

export interface IContact extends Document {
  fullName: string;
  email: string;
  phone?: string;
  plan?: string;
  projectType?: string;
  message: string;
  isRead: boolean;
  isReplyed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const ContactSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    plan: {
      type: String,
    },
    projectType: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    isReplyed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export function getContactModel(connection: Connection) {
  return connection.models.Contact || connection.model<IContact>('Contact', ContactSchema);
}

