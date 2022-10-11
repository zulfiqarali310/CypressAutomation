describe('My First Test Suite', function() {


  //Test:1 To work with Dropdown 
    it('My 1st testcase', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       // Cypress auto accept Alerts and popup

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert button popup
        cy.on('window:alert', (str) =>{

          //Mocha
          expect(str).to.equal('Hello , share this practice page and share your knowledge')


        })

        // for confirm button popup
        cy.on('window:confirm', (str) =>{

          //Mocha
          expect(str).to.equal('Hello , Are you sure you want to confirm?')


        })


        
    })


  })