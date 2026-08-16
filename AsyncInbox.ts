import { getUnreadInbox, type EmailMessage } from "./EmailMessage.js"

export type MessageLoader = () => Promise<ReadonlyArray<EmailMessage>>;

export async function loadUnreadInbox(loader: MessageLoader, currentUserEmail: string): Promise<EmailMessage[]> {
   const messages = await loader();
   return getUnreadInbox(messages, currentUserEmail);
}