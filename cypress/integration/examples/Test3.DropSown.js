describe('My First Test Suite', function() {


  //Test:1 To work with Dropdown 
    it('My 1st testcase', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Static DropDown

        cy.get('select').select('option2').should('have.value', 'option2')




        //Dynamic DropDown

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

          if($el.text()==="India") {

            $el.click()
          }


        
        })

        // To verify right value is selected or not

        cy.get('#autocomplete').should('have.value', 'India')
     



       

     



        
    })


  })