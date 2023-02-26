import DashboardLayout from "@/components/dashboard/Layout";
import { defaultConfigs } from "@/configs";
import { Fragment } from "react";

export default function DashboardIndex() {
  return (
    <Fragment>
      <DashboardLayout
        pageTitle={`${defaultConfigs.companyName} - Dashboard`}
        page="index"
      >
        <h1>Index Page</h1>
      </DashboardLayout>
    </Fragment>
  );
}
