import { ICompany } from "entities/company";
import { useCallback, useMemo, useState } from "react";

const INITIAL_COUNT = 30;
const COUNT_INCREASE_STEP = 30;

export const useFilterCompanies = (companies: ICompany[]) => {
  const [count, setCount] = useState<number>(INITIAL_COUNT);
  const filteredCompanies = useMemo(
    () => companies.slice(0, count),
    [companies, count]
  );

  // const increaseCount = useCallback(() => {
  //   const companiesCount = companies.length;
  //   const newCount = count + COUNT_INCREASE_STEP;
  //   if (newCount <= companiesCount) setCount(newCount);
  //   else setCount(companiesCount);
  // }, [companies, count]);

  const increaseCount = useCallback(() => {
    const companiesCount = companies.length;
    const newCount = count + COUNT_INCREASE_STEP;
    newCount <= companiesCount ? setCount(newCount) : setCount(companiesCount);
  }, [companies, count]);

  return {
    array: filteredCompanies,
    count,
    increaseCount,
  };
};
