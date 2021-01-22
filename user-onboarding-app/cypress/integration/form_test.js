describe('onboardingApp', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('sanity check', () => {
        expect(4 + 4).to.equal(8)
        expect(6 + 9).not.to.equal(69)
    })


    const nameInput = () => cy.get('#name')
    const emailInput = () => cy.get('#email')
    const passwordInput = () => cy.get('#password')
    const submitButton = () => cy.get('button')

    //test inputs
    it('input fields take text', () => {
        nameInput().type('Corey Kirk')
        emailInput().type('I8bacon@gmail.com')
        passwordInput().type('EasyP@ssw0rd!')
        submitButton().click()

    })
    
})