import { LandingPage } from "../pages/landing";
import { LoginPage } from "../pages/login";
import { CreateAccountPage } from "../pages/createAccount";
import { DashboardPage } from "../pages/dashboard";
import { MembersPage } from "../pages/members";
import { AmenitiesPage } from "../pages/amenities";
import { ViewRequestPage } from "../pages/viewRequest";
import { VisitorsPage } from "../pages/visitors";
import { ProfilePage } from "../pages/profile";
import { HistoryPage } from "../pages/history";
import { SecurityQuestionsPage } from "../pages/securityQuestions";

import { Authentication } from "../layouts/authentication";
import { DashboardLayout } from "../layouts/dashboard";

export const routes = [
  {
    path: "/",
    component: LandingPage,
    layout: null,
  },
  {
    path: "/auth/login",
    component: LoginPage,
    layout: Authentication,
  },
  {
    path: "/auth/create-account",
    component: CreateAccountPage,
    layout: Authentication,
  },
  {
    path: "/auth/security-questions",
    component: SecurityQuestionsPage,
    layout: Authentication,
  },
  {
    path: "/dashboard",
    component: DashboardPage,
    layout: DashboardLayout,
  },
  {
    path: "/dashboard/members",
    component: MembersPage,
    layout: DashboardLayout,
  },
  {
    path: "/dashboard/amenities",
    component: AmenitiesPage,
    layout: DashboardLayout,
  },
  {
    path: "/dashboard/view-request",
    component: ViewRequestPage,
    layout: DashboardLayout,
  },
  {
    path: "/dashboard/visitors",
    component: VisitorsPage,
    layout: DashboardLayout,
  },
  {
    path: "/dashboard/profile",
    component: ProfilePage,
    layout: DashboardLayout,
  },
  {
    path: "/dashboard/history",
    component: HistoryPage,
    layout: DashboardLayout,
  },
];
