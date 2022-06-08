describe('basic get command', () => {
    it("gets the todo list", () => {
        cy.visit('https://example.cypress.io/todo')
        cy.get('.todo-list li')
    })
})