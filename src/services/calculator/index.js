var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { apiRoutes } from '@services/constants';
import * as fetch from '@utils/fetch';
class CalculatorService {
    constructor() {
        this.getCalculatorResponse = ({ zip, owner_status, household_income, tax_filing, household_size }) => __awaiter(this, void 0, void 0, function* () {
            return yield fetch.get(apiRoutes.calculator, {
                zip,
                owner_status,
                household_income,
                tax_filing,
                household_size
            }, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_REWIRING_AMERICA_TOKEN}`
                }
            });
        });
    }
}
export default CalculatorService;
