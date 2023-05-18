var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from 'react';
import About from '@components/About';
import BannerGetQuote from '@components/BannerGetQuote';
import { BannerHeroSection } from '@components/BannerHeroSection';
import Faq from '@components/Faq';
import Footer from '@components/Footer';
import HouseholdInformation from '@components/HouseholdInformation';
import LocalRebates from '@components/LocalRebates';
import Navbar from '@components/Navbar';
import PersonalizedIncentives from '@components/PersonalizedIncentives';
import TaxCredits from '@components/TaxCredits';
import IncentivesServices from '@services/incentives';
export const Home = () => {
    const [incentives, setIncentives] = useState();
    const [taxCreditsInformation, setTaxCreditsInformation] = useState([]);
    const [houseHoldingInformation, setHouseHoldingInformation] = useState();
    const fetchIncentives = () => __awaiter(void 0, void 0, void 0, function* () {
        const { incentives } = yield new IncentivesServices().getIncentives();
        return incentives;
    });
    useEffect(() => {
        const items = incentives === null || incentives === void 0 ? void 0 : incentives.filter((item) => item.type === 'tax_credit');
        setTaxCreditsInformation(items);
    }, [incentives]);
    useEffect(() => {
        fetchIncentives().then(incentives => {
            setIncentives(incentives);
        });
    }, []);
    const onSubmitCallback = (data) => setHouseHoldingInformation(data);
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar, null),
        React.createElement(BannerHeroSection, null),
        React.createElement(HouseholdInformation, { info: houseHoldingInformation, onSubmitCallback: onSubmitCallback }),
        React.createElement(PersonalizedIncentives, { householdInformation: houseHoldingInformation }),
        React.createElement(TaxCredits, { tableData: taxCreditsInformation }),
        React.createElement(LocalRebates, null),
        React.createElement(Faq, null),
        React.createElement(BannerGetQuote, null),
        React.createElement(About, null),
        React.createElement(Footer, null)));
};
export default Home;
