import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Map "mo:core/Map";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the user system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  type DashboardStatus = {
    ntpStatus : Text;
    uptime : Int;
  };

  var dashboardStatus : DashboardStatus = {
    ntpStatus = "Unknown";
    uptime = 0;
  };

  var contactInfo : Text = "contact@default.com";

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Admin-only dashboard update functions
  public shared ({ caller }) func updateNTPStatus(newStatus : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update NTP status");
    };
    dashboardStatus := {
      ntpStatus = newStatus;
      uptime = dashboardStatus.uptime;
    };
  };

  public shared ({ caller }) func updateContactInfo(newContact : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update contact info");
    };
    contactInfo := newContact;
  };

  public shared ({ caller }) func updateUptime() : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update uptime");
    };
    dashboardStatus := {
      ntpStatus = dashboardStatus.ntpStatus;
      uptime = Time.now();
    };
  };

  // Public read functions (no authorization required)
  public query func getDashboardStatus() : async DashboardStatus {
    dashboardStatus;
  };

  public query func getContactInfo() : async Text {
    contactInfo;
  };
};
