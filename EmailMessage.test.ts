import { getUnreadInbox, type EmailMessage } from "./EmailMessage.js";
import { describe, expect, it } from "vitest";



describe("getUnreadInbox", () => {
    it("returns an empty array when there are no messages", () => {
        //Arrange
        let currentUserEmail: string = "adambenrejeb@gmail.com";
        let messages: EmailMessage[] = [];
        //Act
        let result = getUnreadInbox(messages, currentUserEmail);
        //Assert
        expect(result).toEqual([]);
    });

    it("excludes read messages", () => {
        let currentUserEmail: string = "adambenrejeb@gmail.com";
        let messages: EmailMessage[] = [];
        //Test 2 Read
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

        const message2: EmailMessage = {
            id: "Some_id2",
            sender: "adambenrejeb35@gmail.com",
            recipients: recipients,
            receivedAt: new Date('2020-12-24T10:33:30'),
            read: true,
            encrypted: true,
            subject: "Definitely not Spam phising email!"

        }
        messages.push(message1);
        messages.push(message2);
        const result = getUnreadInbox(messages, currentUserEmail)
        const expectedArray: EmailMessage[] = [message1];
        expect(result).toEqual(expectedArray);
    })

    it("Detects case sensitivity correctly", () => {
        let currentUserEmail: string = "adambenrejeb@gmail.com";
        let messages: EmailMessage[] = [];
        //Test 3 Read
        const recipients: string[] = ["AdamBenRejeb@gmail.com", "someotherguy@gmail.com"];
        const message1: EmailMessage = {
            id: "Some_id",
            sender: "adambenrejeb35@gmail.com",
            recipients: recipients,
            receivedAt: new Date('2020-12-24T10:33:30'),
            read: false,
            encrypted: true,
            subject: "Professional Help required"

        }
        messages.push(message1);
        const result = getUnreadInbox(messages, currentUserEmail)
        const expectedArray: EmailMessage[] = [message1];
        expect(result).toEqual(expectedArray);
    })
});