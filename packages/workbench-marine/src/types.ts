export interface NegotiationViewProps {
  id: string;
  basePath: string;
  navigate: (to: string) => void;
}

export interface SubmissionListProps {
  basePath: string;
  navigate: (to: string) => void;
}

export interface SubmissionDetailProps {
  id: string;
  basePath: string;
  navigate: (to: string) => void;
}
