import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Nat "mo:core/Nat";
import Time "mo:core/Time";

module {
  type DashboardStatus = {
    ntpStatus : Text;
    uptime : Int;
  };

  type OldUserProfile = {
    name : Text;
  };

  type NewUserProfile = {
    name : Text;
    email : Text;
  };

  type MessageTerminalEntry = {
    from : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type OldActor = {
    userProfiles : Map.Map<Principal, OldUserProfile>;
    dashboardStatus : DashboardStatus;
    contactInfo : Text;
  };

  type NewActor = {
    userProfiles : Map.Map<Principal, NewUserProfile>;
    dashboardStatus : DashboardStatus;
    contactInfo : Text;
    messageTerminalEntries : Map.Map<Nat, MessageTerminalEntry>;
    nextMessageId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    let newUserProfiles = old.userProfiles.map<Principal, OldUserProfile, NewUserProfile>(
      func(_principal, oldProfile) {
        {
          name = oldProfile.name;
          email = "";
        };
      }
    );

    {
      userProfiles = newUserProfiles;
      dashboardStatus = old.dashboardStatus;
      contactInfo = old.contactInfo;
      messageTerminalEntries = Map.empty<Nat, MessageTerminalEntry>();
      nextMessageId = 0;
    };
  };
};
