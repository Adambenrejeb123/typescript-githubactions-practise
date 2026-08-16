import { describe, expect, it } from "vitest"
import type { EmailMessage } from "./EmailMessage.js"
import { loadUnreadInbox } from "./AsyncInbox.js";

async function messageLoader() {
    const recipients: string[] = ["adambenrejeb@gmail.com", "someotherguy@gmail.com"];
    let messages: EmailMessage[] = [];
    const message1: EmailMessage = {
        id: "Some_id",
        sender: "adambenrejeb35@gmail.com",
        recipients: recipients,
        receivedAt: new Date('2020-12-24T10:33:30'),
        read: false,
        encrypted: true,
        subject: "Professional Help required"

    }
    messages.push(message1)
    const result: ReadonlyArray<EmailMessage> = messages;
    return result;
}




describe("loadUnreadInbox", () => {
    it("Loads and checks not yet read messages", async () => {
        const currentUserEmail: string = "adambenrejeb@gmail.com";
        const recipients: string[] = ["adambenrejeb@gmail.com", "someotherguy@gmail.com"];
        const message1: EmailMessage = {
            id: "Some_id",
            sender: "adambenrejeb35@gmail.com",
            recipients: recipients,
            receivedAt: new Date('2020-12-24T10:33:30'),
            read: false,
            encrypted: true,
            subject: "Professional Help required"

        }
        const expectedResult: EmailMessage[] = [];
        expectedResult.push(message1);
        let messages: EmailMessage[] = [];
        const result: EmailMessage[] = await loadUnreadInbox(messageLoader, currentUserEmail);
        //Test 1

        expect(result).toEqual(expectedResult);

    })
})