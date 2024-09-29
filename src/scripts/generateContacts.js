import { createFakeContact } from '../utils/createFakeContact.js';
import { faker } from '@faker-js/faker';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    const addContacts = faker.helpers.multiple(createFakeContact, {
        count: number,
    });

    try {
        const contacts = await readContacts();
        const newContacts = [...contacts, ...addContacts];
        await writeContacts(newContacts);
        console.log(`${number} contacts have been generated and added successfully.`);
    } catch (error) {
        console.error(error);
    }
};

generateContacts(5);
