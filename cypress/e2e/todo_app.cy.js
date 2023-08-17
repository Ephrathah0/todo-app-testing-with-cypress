describe('template spec', () => {\
  beforeEach(()=>{
    cy.visit('http://localhost:3000')

  } )
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

 //cy.get("input[name=q]").type('abc123').then(function($input){ const value = $input.text(), expect(value.includes('abc123')).to.be.true })

  it("if the page works", () => {
      cy.contains("Todo List");
  });
  it("New task can be created", () => {
    cy.get(".addTask").type("Add a new task");
    cy.get(".add").click();
    cy.contains("Add a new task");
  });
  cy.get('[type="checkbox"]').check()

  cy.get('body').then(($body) => {
    if ($body.find('.add')) {
      cy.get('.add').click()
    } 
  })
  cy.get('body')
  .then(($body) => {
    if ($body.find('.trash')) {
      cy.get('..trash').click()
    } 
  })



  it('contains the correct number of todos', () => {
    const todos = [
      { text: 'Buy milk', id: 1 },
      { text: 'Learn Component Testing', id: 2 },
    ]
  
    cy.mount(<TodoList todos={todos} />)
    cy.get('[data-testid="todos"]').should('have.length', todos.length)
  })
  cy.get('.trash').click() 
  cy.get('button').should('not.be.enabled')
/*
*/

