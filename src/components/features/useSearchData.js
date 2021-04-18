import { useSelector } from "react-redux";
import { createSelector } from "reselect";

export const useSearchData = (searchValue) => {
  const tableData = useSelector((state) => state).regularData;
  const elementsSearch = createSelector(
    (state) => state.regularData,
    (elements) =>
      elements.filter(
        (el) =>
          Object.values(el).filter((v) => v.toString().includes(searchValue)).length
      )
  );

  const tableDataElementsSearch = useSelector(elementsSearch);

  const reSearch = createSelector(
    (state) => state.regularData,
    (elements) => {
      const re = new RegExp(searchValue);
      return elements.filter(
        (el) => Object.values(el).filter((v) => re.test(v.toString())).length
      );
    }
  );

  const tableDataRegSearch = useSelector(reSearch);

  return { tableDataElementsSearch, tableDataRegSearch, tableData };
};
