export interface InboxNotificationRowProps {
  type?: "order" | "alert" | "money" | "info";
  title: string;
  body: string;
  time: string;
  unread?: boolean;
  onClick?: () => void;
}
export function InboxNotificationRow(props: InboxNotificationRowProps): JSX.Element;
