// Precondicion
describe('when the user has permissions to read secret files', () => {
    let user
    beforeEach(() => {
        // Contexto
        user = new User()
        user.setPermissions(SPECIAL_PERMISSION)
    })
    // Operacion
    describe('and tries to read one', () => {
        beforeEach(() => {
            user.read(SECRET_FILE)
        })
        // Post condicion
        it('adds the files to the user\'s read files', () => {
            const readFiles = user.getReadFiles()
            expect(readFiles[0]).toEqual(SECRET_FILE)
        })
    })
})


const readABook = (user, book) => {
    book.actualLector = user
    user.readBooks.push(book)
}

describe('when a user reads a books', () => {
    beforeEach(() => {
        readABook(user, book)
    })
    it('marks the user as actualLector in book', () => {
        expect(book.actualLector).toEqual(user)
    })
})