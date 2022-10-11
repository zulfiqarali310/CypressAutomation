describe('My First Test Suite', function() {


  //Test:1 To work with Dropdown 
    it('My 1st testcase', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

        

        
    })


  })