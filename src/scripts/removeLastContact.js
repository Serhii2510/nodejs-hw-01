import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        
        if (contacts.length < 1) {
            console.log('There are no contacts!');  
            return;
        }
        
        const newContacts = contacts.slice(0, -1);
        writeContacts(newContacts);
        console.log('Last contact has been removed successfully.');
    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
