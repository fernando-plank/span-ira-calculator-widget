import MockGenerator from '@mock/generator';
import Chance from 'chance';
const chance = new Chance();
export class CalculatorMock extends MockGenerator {
    getOne(properties) {
        return Object.assign({ pos_savings: chance.integer({ min: 200, max: 8000 }), tax_savings: chance.integer({ min: 200, max: 8000 }), estimated_annual_savings: chance.integer({ min: 200, max: 8000 }) }, properties);
    }
}
