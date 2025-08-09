import { Document } from 'mongoose';
export declare class Role extends Document {
    roleId: string;
    name: string;
    permissions: string[];
    isActive: boolean;
}
export declare const RoleSchema: import("mongoose").Schema<Role, import("mongoose").Model<Role, any, any, any, Document<unknown, any, Role, any, {}> & Role & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Role, Document<unknown, {}, import("mongoose").FlatRecord<Role>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Role> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
