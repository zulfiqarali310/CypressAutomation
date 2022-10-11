/// <reference types="Cypress" />
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
///Users/zulfiqarali/CypressAutomation/cypress/integration/pageObjects/HomePage.js
///Users/zulfiqarali/CypressAutomation/cypress/support/pageObjects/HomePage.js

const homepage = new HomePage()
const productpage = new ProductPage()
let name


Given('I open ECommerce Page',()=>
{
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

When('I add items to Cart', function(){


    homepage.getShopTab().click()

  this.data.productName.forEach(function(element) {

    cy.selectProduct(element)
  });

  productpage.checkOutButton().click()
})


And('Validate the total prices', () =>{

  var sum=0  
  cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

        const amount=$el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum)+Number(res)
        
      
      }).then(function() {
        cy.log(sum)
      
       
      })
      cy.get('h3 strong').then(function(element){
      
        const amount=element.text()
        var res = amount.split(" ")
        var total=  res[1].trim(" ")
        //res = res[1].trim()
        expect(Number(total)).to.equal(sum)
        
      })
})

Then('select the country submit and verify Thankyou', () => {

    cy.contains('Checkout').click()
  cy.get('#country').type('India')
  //Cypress.config('defaultCommandTimeout', 8000)
  cy.wait(5000)
  cy.get('.suggestions > ul > li > a').click()
  cy.wait(5000)
  cy.get('#checkbox2').click({force: true})
  cy.get('input[type="submit"]').click()
  //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')

  cy.get('.alert').then(function(element)
  {

   const actualText = element.text()
    expect(actualText.includes("Success")).to.be.true
  })

  When('I fill the form details', function(dataTable){

    // [bobz, male]
    name = dataTable.rawTable[1][0]
    homepage.getEditBox().type(dataTable.rawTable[1][0])
    homepage.getGender().select(dataTable.rawTable[1][1])


  })
  Then('validate the forms behaviour', function(){
    homepage.getTwoWayDataBinding().should('have.value', name)
    homepage.getEditBox().should('have.attr', 'minlength', '2')
    homepage.getEnterePreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)


  })
  And('select the Shop Page', function(){

    homepage.getShopTab().click()


  })
})