import 'cypress-iframe'


describe('My First Test Suite', function() {


// install iframe in project directory by using npm install -D cypress-iframe

  //Test:1 To work with Dropdown 
    it('My 1st testcase', function() {

      //Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
//cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force: true})
cy.url().should('include','top')



        
    })


  })