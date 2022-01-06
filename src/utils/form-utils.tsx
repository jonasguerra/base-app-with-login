import moment from "moment";
import { FieldName } from "react-hook-form";

export function setInputErrorsFromApi<T>(setError, errorsObject) {
  let formError: string;
  Object.keys(errorsObject).forEach((key) => {
    const keyOf = key as FieldName<T>;
    if (keyOf != "__all__") {
      setError(keyOf, { message: errorsObject[key][0], type: "manual" });
    } else {
      formError = errorsObject[key][0];
    }
  });
  if (formError) return formError;
}

export function setInputValuesFromApi<T>(setValue, object) {
  Object.keys(object).forEach((key) => {
    const keyOf = key as FieldName<T>;
    setValue(keyOf, object[key], { shouldValidate: true, shouldDirty: true });
  });
}

export function FormatDateFromAPI(date: Date) {
  return moment(date).format("MM/DD/YYYY");
}
