//testSpec.js
describe('Protractor app test', () =>{
    const firstNumber = element(by.model('first'));
    const secondNumber = element(by.model('second'));
    const goButton = element(by.id('gobutton'));
    const latestResult = element(by.binding('latest'));
    const history = element.all(by.repeater('result in memory'));
    const allOptions = element.all(by.options('value for (key, value) in operators'));

    // Helper functions
    const selectOperator = (op) => {
        switch(op) {
            case '/':
                allOptions.get(1).click();
                break;
            case '%':
                allOptions.get(2).click();
                break;
            case '*':
                allOptions.get(3).click();
                break;
            case '-':
                allOptions.last().click();
                break;
            default:
                allOptions.first().click();
        }
    }
    
    const operation = (a, b, op) => {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        selectOperator(op);
        goButton.click();
    }
    
    // Set up each test in a fresh session 
    beforeEach(() => {
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    });

    it('Should have a title', () => {
        expect(browser.getTitle()).toEqual('Protractor practice website - Calculator');
    });

    it('Should have a history', () => {
        operation(1, 2);
        operation(3, 4, '*');

        expect(history.count()).toEqual(2);

        operation(5, 6, '/');

        expect(history.count()).toEqual(3);
        // history places newest items at the top 
        expect(history.last().getText()).toContain('1 + 2');
        expect(history.first().getText()).toContain('5 / 6');
    });

    it('Should have 5 operations', () => {
        expect(allOptions.count()).toEqual(5);
        const firstOption = allOptions.first();
        expect(firstOption.getText()).toEqual('+');
    });
})