describe('My First Test Suite', function() {


  //Test:1 To work with Dropdown 
    it('My 1st testcase', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function(el){

          const url = el.prop('href')
          cy.log(url)
          cy.visit(url)




        })

      

        

        
    })


  })