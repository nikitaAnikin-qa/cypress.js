describe('Тестирование staya', function () {
    
    it('Авторизация на сайте staya', function () {
        cy.visit('https://staya.dog/');
        
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('nbbvc95@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Nickita273');
        cy.get('.auth-form__submit > .s-button__content').click();

        cy.contains('Мои заказы');
        cy.get('.profile-orders__title');
         })

     
})
