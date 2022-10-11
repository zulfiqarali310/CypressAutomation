import 'cypress-iframe'
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe('My First Test Suite', function() {

before(function(){

  // rto load data file

  cy.fixture('Data1').then(function(data){

    this.data=data


  })
})

it('My FirstTest Case', function (){

// calling homepage  and prductpage calss

const homepage = new HomePage()
const productpage = new ProductPage()


  cy.visit("https://rahulshettyacademy.com/angularpractice/")

  homepage.getEditBox().type(this.data.name)
  homepage.getGender().select(this.data.gender)
  homepage.getTwoWayDataBinding().should('have.value', this.data.name)
  homepage.getEditBox().should('have.attr', 'minlength', '2')
  homepage.getEnterePreneaur().should('be.disabled')
  Cypress.config('defaultCommandTimeout', 8000)

  // pause your test during run time
  //cy.pause()

  // to use debug with  click method
  //cy.get(':nth-child(2) > .nav-link').click().debug()

  homepage.getShopTab().click()

  this.data.productName.forEach(function(element) {

    cy.selectProduct(element)
  });

  productpage.checkOutButton().click()
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
  

})

  


  })