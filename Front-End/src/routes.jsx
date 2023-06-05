import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Users, EditUsers, AddPitches } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import AddUsers from "./pages/dashboard/AddUsers";
import Pitches from "./pages/dashboard/pitches";
import EditPitche from "./pages/dashboard/EditPitche";
import Booking from "./pages/dashboard/booking";
import ContactUs from "./pages/dashboard/ContactUs";
const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Goat field Home",
        path: "/home",
        element: <Home />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Users",
        path: "/Users",
        element: <Users />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Pitches",
        path: "/pitches",
        element: <Pitches />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Booking",
        path: "/booking",
        element: <Booking />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Contact Us",
        path: "/ContactUs",
        element: <ContactUs />,
      },
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: "notifactions",
      //   path: "/notifactions",
      //   element: <Notifications />,
      // },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },

    ],
  },
  {
    title: "without",
    layout: "dashboard",
    pages: [
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Edit Users",
        path: "/users/edit/:id",
        element: <EditUsers />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Add users",
        path: "/users/add",
        element: <AddUsers />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Add pitch",
        path: "/pitches/add",
        element: <AddPitches />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Edit pitch",
        path: "/pitches/edit/:id",
        element: <EditPitche />,
      },
    ],
  },
];

export default routes;
