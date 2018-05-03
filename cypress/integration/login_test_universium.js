describe('Login', function(){
    it('redirects to /http://services.universum.no:8888/# on success',function(){
        cy.visit('http://services.universum.no:8888/Account/Login')
        
        cy.get('input[name=UserName]').type('kenneth')
        cy.get('input[name=Password]').type('kennethtest123{enter}')

        cy.url().should('include', '/#')
        cy.get('a').should('have id','vod')
    })

 
    
})