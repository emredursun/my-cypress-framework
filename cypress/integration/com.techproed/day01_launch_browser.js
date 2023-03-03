describe('Go to the application',()=>{
    it('Test Case 1', ()=>{
        // visit () => to go to the URL
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        //clicking on Log in
        //Finding the elements 
        //whose text includes 'Log in'
        //Then clicking on it
        cy.contains('Log in').click()

        //Verifying if the user is on the Login page
        //I will check if the new url contains /Account/Logon
        cy.url().should('include','/Account/Logon')

        //get() is used to find element.
        //Find username and type 'manager'
        //type() is used to type in input box
        cy.get('#UserName').type('manager')
        //Find password and type 'Manager2!'
        cy.get('#Password').type('Manager2!')
        //Click on the submit button
        //Click() is used to click on the buttons
        cy.get('#btnSubmit').click()
        //Verify if the user is on the Admin - ListOfUsers page
        cy.url().should('include','/Admin/UserAdmin')
        //Verify if the title equal to 'Admin - ListOfUsers'
        cy.title().should('eq','Admin - ListOfUsers')

    })
})