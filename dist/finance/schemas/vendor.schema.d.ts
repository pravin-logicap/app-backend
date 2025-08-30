import { Document } from 'mongoose';
export declare class Vendor extends Document {
    name: string;
    contact?: {
        person?: string;
        phone?: string;
        email?: string;
    };
    upi?: string;
    bank?: {
        accountName?: string;
        accountNo?: string;
        ifsc?: string;
    };
    gstin?: string;
    isActive: boolean;
}
export declare const VendorSchema: import("mongoose").Schema<Vendor, import("mongoose").Model<Vendor, any, any, any, Document<unknown, any, Vendor, any, {}> & Vendor & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Vendor, Document<unknown, {}, import("mongoose").FlatRecord<Vendor>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Vendor> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
