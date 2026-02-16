import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface MessageTerminalEntry {
    from: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface DashboardStatus {
    uptime: bigint;
    ntpStatus: string;
}
export interface UserProfile {
    name: string;
    email: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllMessageTerminalEntries(): Promise<Array<MessageTerminalEntry>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactInfo(): Promise<string>;
    getDashboardStatus(): Promise<DashboardStatus>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitMessageTerminalEntry(from: string, email: string, message: string): Promise<void>;
    updateContactInfo(newContact: string): Promise<void>;
    updateNTPStatus(newStatus: string): Promise<void>;
    updateUptime(): Promise<void>;
}
