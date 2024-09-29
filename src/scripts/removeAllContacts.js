import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    try {
        const contacts = await readContacts();
        
        if (contacts.length < 1) {
            console.log('There are no contacts!');
            return;
        }
        
        await writeContacts([]);
        console.log('All contacts have been removed successfully.');
    } catch (error) {
        console.error(error);
    }
};

removeAllContacts();
