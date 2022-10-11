describe('My First Test Suite', function() {


  //Test:1
    it('My 1st testcase', function() {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        // Add element using the step by step
        
       // cypress get acts like findelement of slenium
       cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        
        // Paraent child chaning
        cy.get('.products').find('.product').should('have.length',4)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()


        console.log('this to be checked where is printed')



     



        
    })


    // Test:2
    it('My 2nd testcase', function() {

           // Adding Add to cart using the Loop
           cy.get('.products').as('productLocator')
           cy.get('@productLocator').find('.product').each(($el, index, $list) => {
   
             const textVeg = $el.find('h4.product-name').text()
             if(textVeg.includes('Cashews')) 
             {
   
               cy.wrap($el).find('button').click()
             }
   
           })
           // assert if logo text is correctly displayed or not
           cy.get('.brand').should('have.text', 'GREENKART')
    })

    // Test:3 Getting title of the page
    it('My 3rd testcase', function(){

      cy.get('.brand').then(function(logoelement){

        cy.log(logoelement.text())



      })


    })
  })