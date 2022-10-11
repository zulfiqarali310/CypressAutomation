describe('My First Test Suite', function() {


  //Test:1 To work with checkboxes 
    it('My 1st testcase', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        // To uncheck the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // to check multiple checkbox it once
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])



       

     



        
    })


  })