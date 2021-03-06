import React, { useState, useEffect } from 'react';

// Components
import PageHeader from '../components/PageHeader.js';
import BookResults from '../components/BookResults.js';

// Assets 
import Api from '../util/api.js';

function Saved() {
    const api = new Api();

    const [savedState, setSavedState] = useState({
        savedResults: []
    });

    useEffect(() => {
        handleGetBooks();
    }, []);

    // Get all books from database
    const handleGetBooks = () => {
        api.getSavedBooks(results => {
            setSavedState({ ...savedState, savedResults: results });
        });
    }

    // Delete Book from Database
    const handleDeleteBook = (e) => {
        const bookId = e.target.attributes.databookid.value;

        api.deleteSavedBook(bookId, () => {
            handleGetBooks();
        });
    }

    return (
        <section>
            <PageHeader pageName="Saved Books" />
            <BookResults header="Results"
                books={savedState.savedResults}
                err={null}
                clickText="Delete"
                handleClick={handleDeleteBook} />
        </section>
    )
}

export default Saved;