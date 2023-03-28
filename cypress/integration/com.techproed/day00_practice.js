describe("Go to the application", () => {
    beforeEach(() => {
        cy.visit("https://qa-environment.crystalkeyhotels.com/");
    });

    it("Cypress Basics Functionalities", () => {
        // Clicking on the 'Log in' link
        cy.contains('Log in').click();

        // Verifying if the user is on the 'Log in' page
        cy.url().should('include', 'Account/Logon');
        cy.title().should('include', 'Log in');
    });

    it("Login Functionality", () => {
        // Go to 'Log in' page
        cy.contains('Log in').click();

        // Find username and type 'manager'
        cy.get('#UserName').type('manager');

        // Find password and type 'Manager2!' 
        cy.get('#Password').type('Manager2!');

        // Clicking on the 'Log in' button
        cy.get('#btnSubmit').click();
    });

    it.only("Finding Elements", () => {
        // Go to 'Log in' page
        cy.contains('Log in').click();

        // ASSERTIONS:
        // 1. Asserting if url includes 'Logon' or if title includes 'Login in'
        cy.url().should('include', 'Account/Logon');
        cy.title().should('include', 'Log in');

        //CSS LOCATORS FOR LOG IN
        //.row > .mb-4
        //h2.mb-4
        //h2[class='mb-4']

        // 2. Asserting if Log in is visible
        //should('be.visible') : checking if the element is visible 
        cy.get("h2[class='mb-4']").should('be.visible');

        //Finding total number of links that is child of li
        //Assert the total is 29

        //  li a => Means give me all link(a) that is child of list item(li)

        // xpath = li//a , css = li a
        cy.get('li a').should('have.length', 29)

        //2. find() is used to find any element after get()

        //get the Single room and assert there is one matching element
        cy.get("a[href='/Rooms/6']").should('have.length', 1)

        //We can also say specifically
        //find a[href='/Rooms/6'] that is child of li
        cy.get('li').find("a[href='/Rooms/6']").should('have.length', 1)

        //3. within () is also used after get()
        // Looks for specific elements within that parent

        //PARENT : div.categories  CHILD : a[href='/Rooms/318']
        cy.get("a[href='/Rooms/318']").should('have.length', 1)
        cy.get('div.categories').find("a[href='/Rooms/318']").should('have.length', 1)
        cy.get('div.categories').within(() => { //Search for the elements that is only child of div.categories
            cy.get("a[href='/Rooms/318']").should('have.length', 1)
            cy.get("a[href='/Rooms/318']").click()
        })
    });
});