export interface execPerson {
    name: string;
    role:
      | "President"
      | "Vice President"
      | "Secretary"
      | "Treasurer"
      | "Arc Delegate"
  }
  
  export interface directorRole {
    role:
        | "Events"
        | "External Relations"
        | "Human Resources"
        | "Marketing"
        | "General";
    directors: string[];
  }
  
  export interface subcommitteeData {
    role:
      | "Events"
      | "External Relations"
      | "Human Resources"
      | "Marketing"
      | "General";
    members: string[];
  }
  
  export interface yearTeamData {
    year: number;
    execList: execPerson[];
    directorList: directorRole[];
    subcommittee: subcommitteeData[];
  }
  
  const pastTeamData: yearTeamData[] = [
    {
      year: 2024,
      execList: [
        { name: "Cheryl Wong", role: "President" },
        { name: "Isabella Chen", role: "Vice President" },
        { name: "Jas Arnall", role: "Treasurer" },
        { name: "Roba Goreishi", role: "Arc Delegate" },
        { name: "Evelyn Ly", role: "Secretary" },
      ],
      directorList: [
        { role: "Events", directors: ["Jerrica Kuan", "Kristine Lim"] },
        { role: "External Relations", directors: ["Jerrica Kuan", "Kristine Lim"] },
        { role: "Human Resources", directors: ["Jerrica Kuan", "Kristine Lim"] },
        { role: "Marketing", directors: ["Jerrica Kuan", "Kristine Lim"] },
      ],
      subcommittee: [
        {
          role: "Events",
          members: ["Melissa Soe", "Nhi Nguyen", "Silvia Zhou", "Eric Do"]
        },
        {
          role: "External Relations",
          members: ["Melissa Soe", "Nhi Nguyen", "Silvia Zhou", "Eric Do"]
        },
        {
          role: "Human Resources",
          members: ["Melissa Soe", "Nhi Nguyen", "Silvia Zhou", "Eric Do"]
        },
        {
          role: "Marketing",
          members: ["Melissa Soe", "Nhi Nguyen", "Silvia Zhou", "Eric Do"]
        }
      ]
    }
  ];
  
  export default pastTeamData;