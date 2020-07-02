// Registration page
describe('Test suite for the way2automation registration dummy appliacation', () => {

   const scope = element(by.className('ng-scope'));
   const logout = element(by.linkText('Logout'));


    //Set up fresh session for each test 
    beforeEach(() => {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    });

    // Helper fuctions
    const login = (username, password) => {
        const user = element(by.id('username'));
        const user2 = element(by.model('model[options.key]'));
        const pass = element(by.id('password'));
        const button = element(by.className('btn btn-danger'));

        user.sendKeys(username);
        user2.sendKeys(username);
        pass.sendKeys(password);
        button.click();
    }
    it('Should have a title', () => {
        expect(browser.getTitle()).toEqual('Protractor practice website - Registration');
    });

    it('should allow login with valid credentials', () => {
        login('angular', 'password');
        expect(scope.getText()).toContain("You're logged in!!");
        logout.click();
        expect(scope.isPresent()).toBe(true);
    }); 
})