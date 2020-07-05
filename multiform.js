//Multiple part form 
describe('Test suite for the way2automation multi part form dummy appliacation', () => {

    const navBar = element.all(by.tagName('a'));
    const name = element(by.model('formData.name'));
    const email = element(by.model('formData.email'));
    const console = element.all(by.model('formData.type'));
    const submit = element(by.buttonText('Submit'));
    const output = element(by.className('ng-binding'));

    const EC = protractor.ExpectedConditions;

    beforeEach(() => {
        browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
    });

    // Helper functions 
    const formData = (formName, formEmail) => {
        name.sendKeys(formName);
        email.sendKeys(formEmail);
    }

    it('Should have a title', () => {
        expect(browser.getTitle()).toEqual('Protractor practice website - Multiform');
    })

    it('Should have navigation links', () => {
        expect(navBar.first().getText()).toContain('PROFILE');
        expect(navBar.get(1).getText()).toContain('INTERESTS');
        expect(navBar.get(2).getText()).toContain('PAYMENT');
        expect(navBar.get(3).getText()).toContain('Next Section');
    });

    it('Should show an alert on submit', () => {
        navBar.get(2).click();
        submit.click();
        expect(browser.wait(EC.alertIsPresent(), 5000));
        const ale = browser.switchTo().alert();
        expect(ale.getText()).toBe('awesome!');
        ale.dismiss();
    });

    it('Should have 2 options for console', () => {
        navBar.get(1).click();
        expect(console.count()).toEqual(2);
        console.first().click();
        console.last().click();
    });

    it('Should grab form data as it is typed', () => {
        expect(output.getText()).toContain('{}');
        formData('Paul', 'paul@test.com');
        expect(output.getText()).toContain('{"name":"Paul","email":"paul@test.com"}');
        navBar.get(1).click();
        console.first().click();
        expect(output.getText()).toContain('{"name":"Paul","email":"paul@test.com","type":"xbox"}');
        navBar.get(1).click();
        console.last().click();
        expect(output.getText()).toContain('{"name":"Paul","email":"paul@test.com","type":"ps"}');
    }); 

})