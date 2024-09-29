import { createFakeContact } from '../utils/createFakeContact.js';
import { faker } from '@faker-js/faker';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    const addContact = faker.helpers.multiple(createFakeContact, {
        count: 1,
    });

    try {
        const contacts = await readContacts();
        const newContacts = [...contacts, ...addContact];
        await writeContacts(newContacts);
        console.log('Contact has been generated and added successfully.');
    } catch (error) {
        console.error(error);
    }
};

addOneContact();
