export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Competitive Exams", path: "/competitive-exams" },
  {
    label: "Admission Guidance",
    path: "/admission-guidance",
    dropdown: [
      {
        label: "Open Board",
        hash: "#open-board",
        subDropdown: [
          { label: "X", hash: "#x" },
          { label: "XII", hash: "#xii" },
        ],
      },
      {
        label: "Traditional UG/PG",
        hash: "#traditionalugpg",
        subDropdown: [
          { label: "UG", hash: "#ug" },
          { label: "PG", hash: "#pg" },
        ],
      },
      { label: "Council Course", hash: "#council" },
      { label: "Research Program", hash: "#research" },
    ],
  },
  { label: "Main Menu", path: "/main-menu" },
  {
    label: "Student Zone",
    dropdown: [
      { label: "Enquiry", path: "/student-zone/enquiry" },
      { label: "Apply", path: "/student-zone/apply" },
      { label: "Notices", path: "/student-zone/notices" },
      { label: "Payment", path: "/student-zone/payment" },
    ],
  },
  { label: "Process", path: "/process" },
  { label: "Campuses", path: "/campuses" },
  { label: "Contact", path: "/contact" },
  { label: "Apply Now", path: "/apply-now" },
];
