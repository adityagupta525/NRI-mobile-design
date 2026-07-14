export interface ProfileHeaderProps {
  name: string;
  avatar?: React.ReactNode;
  subtitle?: string;
  kycStatus?: "verified" | "pending" | "failed";
  corridor?: string;
  onEdit?: () => void;
}
export function ProfileHeader(props: ProfileHeaderProps): JSX.Element;
