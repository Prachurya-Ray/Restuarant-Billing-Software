import React from 'react';
import {  Routes, Route } from "react-router-dom";
import CaptainWiseSummary from '../CaptainWiseSummary';
import CategorySummary from '../CategorySummary';
import CounterSummary from '../CounterSummary';
import CoverSizeSummary from '../CoverSizeSummary';
import EmployeeSummary from '../EmployeeSummary';
import ExecutiveSalesSummary from '../ExecutiveSalesSummary';
import GroupSummary from '../GroupSummary';
import ItemSummary from '../ItemSummary';
import LocalityWiseSummary from '../LocalityWiseSummary';
import NcItemSummary from '../NcItemSummary';
import OrderSummary from '../OrderSummary';
import SalesSummary from '../SalesSummary';
import TipSummary from '../TipSummary';
import VariationSummary from '../VariationSummary';

const route = () => {
  return (
    <>
      <Routes>
        <Route path='/captain-summary' element={<CaptainWiseSummary/>}/>
        <Route path='/category-summary' element={<CategorySummary/>}/>
        <Route path='/counter-summary' element={<CounterSummary/>}/>
        <Route path='/cover-size-summary' element={<CoverSizeSummary/>}/>
        <Route path='/employee-summary' element={<EmployeeSummary/>}/>
        <Route path='/executive-sales-summary' element={<ExecutiveSalesSummary/>}/>
        <Route path='/group-summary' element={<GroupSummary/>}/>
        <Route path='/item-summary' element={<ItemSummary/>}/>
        <Route path='/locality-wise-summary' element={<LocalityWiseSummary/>}/>
        <Route path='/nc-item-summary' element={<NcItemSummary/>}/>
        <Route path='/order-summary' element={<OrderSummary/>}/>
        <Route path='/sales-summary' element={<SalesSummary/>}/>
        <Route path='/tip-summary' element={<TipSummary/>}/>
        <Route path='/variation-summary' element={<VariationSummary/>}/>
      </Routes>

    </>
  );
}

export default route;
