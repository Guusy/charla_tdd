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