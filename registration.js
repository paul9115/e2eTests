// Registration page
describe('Test suite for the way2automation registration dummy appliacation', () => {

   const scope = element(by.className('ng-scope'));
   const logout = element(by.linkText('Logout'));
   const user = element(by.id('username'));
   const user2 = element(by.model('model[options.key]'));
   const pass = element(by.id('password'));
   const button = element(by.className('btn btn-danger'));

    //Set up fresh session for each test 
    beforeEach(() => {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    });

    // Helper fuctions
    const login = (username, password, username2 = username) => {
        user.sendKeys(username);
        user2.sendKeys(username2);
        pass.sendKeys(password);
        button.click();
    }

    const genString = (len) => {
        let str = '';
        for(let i = 0; i < len; i++) {
            str += 'a';
        }
        return str;
    }

    const clearInput = () => {
        user.clear();
        user2.clear();
        pass.clear();
    }

    it('Should have a title', () => {
        expect(browser.getTitle()).toEqual('Protractor practice website - Registration');
    });

    it('Should disable the login button with missing fields', () => {
        expect(button.isEnabled()).toBe(false);
        user.sendKeys(genString(3));
        expect(button.isEnabled()).toBe(false);
        pass.sendKeys(genString(3));
        expect(button.isEnabled()).toBe(false);
        user2.sendKeys(genString(3));
        expect(button.isEnabled()).toBe(true);
    });

    it('should allow login and out with valid credentials', () => {
        login('angular', 'password');
        expect(scope.getText()).toContain("You're logged in!!");
        logout.click();
        expect(scope.isPresent()).toBe(true);

        login('angular', 'password', 'null');
        expect(scope.getText()).toContain("You're logged in!!");
        logout.click();
        expect(scope.isPresent()).toBe(true);

        login('null', 'password', 'angular');
        expect(scope.getText()).toContain("Username or password is incorrect");
    }); 


    it('Should take input between 3 and 30 characters', () => {
        user.sendKeys(genString(2));
        pass.sendKeys(genString(2));
        user2.sendKeys(genString(2));
        expect(button.isEnabled()).toBe(false);
        clearInput();
        user.sendKeys(genString(3));
        pass.sendKeys(genString(3));
        user2.sendKeys(genString(3));
        expect(button.isEnabled()).toBe(true);
        clearInput();
        user.sendKeys(genString(50));
        pass.sendKeys(genString(50));
        user2.sendKeys(genString(50));
        expect(button.isEnabled()).toBe(true);
        clearInput();
        user.sendKeys(genString(51));
        pass.sendKeys(genString(51));
        user2.sendKeys(genString(51));
        expect(button.isEnabled()).toBe(false);
        clearInput();
    })
})