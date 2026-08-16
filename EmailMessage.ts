export interface EmailMessage {
    id: string,
    sender: string,
    recipients: Array<string>,
    receivedAt: Date,
    read: boolean,
    encrypted: boolean,
    subject: string
}

export function getUnreadInbox(messages: ReadonlyArray<EmailMessage>, currentUserEmail: string): EmailMessage[] {
    let result: EmailMessage[] = [];

    for (let message of messages) {
        if (message.read) {
            continue;
        }
        for (let recipient of message.recipients) {
            if (recipient.toLowerCase() === currentUserEmail.toLowerCase()) {
                result.push(message);
                break;
            }
        }
    }
    return result.sort(messageCompareFunction);
}

function messageCompareFunction(a: EmailMessage, b: EmailMessage) {
    if (a.receivedAt < b.receivedAt) return 1;
    if (a.receivedAt > b.receivedAt) return -1;
    else return 0;
}