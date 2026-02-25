import { useState, useEffect } from "react";
import { WorkbenchLayout } from "@mfe/workbench-shared";
import { SubmissionList } from "./pages/SubmissionList";
import { SubmissionDetail } from "./pages/SubmissionDetail";
import { NegotiationView } from "./pages/NegotiationView";

interface Props {
  basePath: string;
  lobSlug: string;
}

function getCurrentPath() {
  return window.location.pathname;
}

export default function WorkbenchApp({ basePath }: Props) {
  const [path, setPath] = useState(getCurrentPath());

  useEffect(() => {
    const onPop = () => setPath(getCurrentPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function navigate(to: string) {
    window.history.pushState({}, "", to);
    setPath(to);
  }

  // Простой матчинг маршрутов
  const submissionDetailMatch = path.match(
    new RegExp(`^${basePath}/submissions/([^/]+)$`),
  );
  const negotiationMatch = path.match(
    new RegExp(`^${basePath}/submissions/([^/]+)/negotiation$`),
  );

  if (negotiationMatch) {
    const id = negotiationMatch[1];
    return (
      <WorkbenchLayout
        lobName="Marine Insurance"
        breadcrumb={`Negotiation — ${id}`}
      >
        <NegotiationView id={id} basePath={basePath} navigate={navigate} />
      </WorkbenchLayout>
    );
  }

  if (submissionDetailMatch) {
    const id = submissionDetailMatch[1];
    return (
      <WorkbenchLayout lobName="Marine Insurance" breadcrumb={id}>
        <SubmissionDetail id={id} basePath={basePath} navigate={navigate} />
      </WorkbenchLayout>
    );
  }

  return (
    <WorkbenchLayout lobName="Marine Insurance" breadcrumb="Submissions">
      <SubmissionList basePath={basePath} navigate={navigate} />
    </WorkbenchLayout>
  );
}
