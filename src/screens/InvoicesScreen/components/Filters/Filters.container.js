import React, { useState, useRef } from 'react';
import { FiltersActionSheet } from '../FiltersActionSheet';

// import { useModal } from 'hooks/useModal';

import Filters from './Filters';

const FiltersContainer = ({ onSubmitFilters, ...restProps }) => {
  const filtersSheetRef = useRef();

  const [currentFilters, setCurrentFilters] = useState([]);

  // const [filterModalOpen, openFilterModal, closeFilterModal] = useModal({
  //   defaultOpen: false,
  // });

  const handleFilterBtnPress = () => {
    if (filtersSheetRef.current) {
      filtersSheetRef.current.show();
    }
  };

  // const handleRemoveFilterClick = filter => {
  //   const nextFilters = currentFilters.filter(
  //     currentFilter => currentFilter.type !== filter.type,
  //   );

  //   setCurrentFilters(nextFilters);

  //   const data = nextFilters.reduce((acc, nextFilter) => {
  //     acc[nextFilter.type] = nextFilter.value;

  //     return acc;
  //   }, {});

  //   if (onSubmitFilters) {
  //     onSubmitFilters(data);
  //   }
  // };

  const handleSubmitFilters = data => {
    // closeFilterModal();

    if (data.noteType?.value) {
      setCurrentFilters(prevFilters => [
        ...prevFilters,
        {
          type: 'noteType',
          text: `${data.noteType?.label} :نوع الإشعار`,
          value: data.noteType,
        },
      ]);
    }

    if (data.invoiceType?.value) {
      setCurrentFilters(prevFilters => [
        ...prevFilters,
        {
          type: 'invoiceType',
          text: `${data.invoiceType?.label} :نوع الفاتورة`,
          value: data.invoiceType,
        },
      ]);
    }

    if (data.activityNumber?.value) {
      setCurrentFilters(prevFilters => [
        ...prevFilters,
        {
          type: 'activityNumber',
          text: `${data.activityNumber?.label} :تسلسل مصدر الدخل`,
          value: data.activityNumber,
        },
      ]);
    }

    if (data.invoiceStatus?.value) {
      setCurrentFilters(prevFilters => [
        ...prevFilters,
        {
          type: 'invoiceStatus',
          text: `${data.invoiceStatus?.label} :حالة الفاتورة`,
          value: data.invoiceStatus,
        },
      ]);
    }

    if (data.issueDateFrom) {
      setCurrentFilters(prevFilters => [
        ...prevFilters,
        {
          type: 'issueDateFrom',
          text: `${data.issueDateFrom} :التاريخ (الى)`,
          value: data.issueDateFrom,
        },
      ]);
    }

    if (data.issueDateTo) {
      setCurrentFilters(prevFilters => [
        ...prevFilters,
        {
          type: 'issueDateTo',
          text: `${data.issueDateTo} :التاريخ (من)`,
          value: data.issueDateTo,
        },
      ]);
    }

    if (data.totalAmountFrom) {
      setCurrentFilters(prevFilters => [
        ...prevFilters,
        {
          type: 'totalAmountFrom',
          text: `${data.totalAmountFrom} :مبلغ الفاتورة (الى)`,
          value: data.totalAmountFrom,
        },
      ]);
    }

    if (data.totalAmountTo) {
      setCurrentFilters(prevFilters => [
        ...prevFilters,
        {
          type: 'totalAmountTo',
          text: `${data.totalAmountTo} :مبلغ الفاتورة (من)`,
          value: data.totalAmountTo,
        },
      ]);
    }

    if (data.username?.value) {
      setCurrentFilters(prevFilters => [
        ...prevFilters,
        {
          type: 'username',
          text: `${data.username?.value} :محرر الفاتورة`,
          value: data.username,
        },
      ]);
    }

    if (onSubmitFilters) {
      onSubmitFilters(data);
    }
  };

  const handleClearFilters = () => {
    setCurrentFilters([]);

    if (onSubmitFilters) {
      onSubmitFilters(null);
    }
  };

  return (
    <>
      <Filters
        {...restProps}
        currentFilters={currentFilters}
        onClearFilters={handleClearFilters}
        // onRemoveFilterClick={handleRemoveFilterClick}
        onFilterBtnPress={handleFilterBtnPress}
      />
      <FiltersActionSheet actionSheetRef={filtersSheetRef} />
    </>
  );
};

export default React.memo(FiltersContainer);
