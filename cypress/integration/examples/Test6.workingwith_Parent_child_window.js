describe('My First Test Suite', function() {


  //Test:1 To work with Dropdown 
    it('My 1st testcase', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // it will open child window in the same page by just removing in the same page

       cy.get('#opentab').invoke('removeAttr', 'target').click()

       // in order to validate if you are in the right page or not
       cy.url().should('include', 'rahulshettyacademy')

       
       
       
       // Now check browser navigation back

       cy.go('back')

        

        
    })


  })