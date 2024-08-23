'use client';
import { __spreadArray } from "tslib";
import React, { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../../Dialog/Dialog';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import BaseParagraph from '../../base-paragraph/BaseParagraph';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { generateInitialValues } from '@/components/DynamicForm/utils/generateInitialValues';
import { InputRenderrer } from '@/components/DynamicForm/DynamicForm';
import { generateValidationSchema } from '@/components/DynamicForm/utils/generateValidationSchema';
var CustomCDDA = function (props) {
    var _a;
    var _b = props || {}, name = _b.name, item = _b.item, open = _b.open, setOpen = _b.setOpen, oldFormik = _b.oldFormik;
    var _c = useState(null), editIndex = _c[0], setEditIndex = _c[1];
    var formik = useFormik({
        initialValues: generateInitialValues(item.form.items),
        validationSchema: Yup.object(generateValidationSchema(item.form.items, {})),
        onSubmit: function (values, _a) {
            var _b, _c;
            var resetForm = _a.resetForm;
            if (editIndex !== null) {
                // Update existing item
                var updatedValues = __spreadArray([], (_b = oldFormik === null || oldFormik === void 0 ? void 0 : oldFormik.values) === null || _b === void 0 ? void 0 : _b[name], true);
                updatedValues[editIndex] = values;
                oldFormik === null || oldFormik === void 0 ? void 0 : oldFormik.setFieldValue(name, updatedValues);
            }
            else {
                // Add new item
                oldFormik === null || oldFormik === void 0 ? void 0 : oldFormik.setFieldValue(name, __spreadArray(__spreadArray([], (_c = oldFormik === null || oldFormik === void 0 ? void 0 : oldFormik.values) === null || _c === void 0 ? void 0 : _c[name], true), [values], false));
            }
            setOpen(false);
            resetForm();
            setEditIndex(null); // Reset edit mode
        }
    });
    var handleRemoveIndex = function (index) {
        var _a;
        var updatedValues = __spreadArray([], (_a = oldFormik === null || oldFormik === void 0 ? void 0 : oldFormik.values) === null || _a === void 0 ? void 0 : _a[name], true);
        updatedValues.splice(index, 1);
        oldFormik === null || oldFormik === void 0 ? void 0 : oldFormik.setFieldValue(name, updatedValues);
    };
    var handleEditIndex = function (index) {
        var _a;
        setEditIndex(index);
        var itemToEdit = (_a = oldFormik === null || oldFormik === void 0 ? void 0 : oldFormik.values) === null || _a === void 0 ? void 0 : _a[name][index];
        formik.setValues(itemToEdit); // Populate form with existing values
        setOpen(true);
    };
    return (<div className="bg-white p-6 rounded-lg shadow-md col-span-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Co-founders</h2>
        <Dialog open={open}>
          <DialogTrigger>
            <button type="button" className="flex items-center gap-x-2 group bg-green-100 font-medium py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-green-200" onClick={function () {
            setEditIndex(null); // Ensure form is in add mode
            setOpen(true);
        }}>
              <BaseParagraph className="group-hover:opacity-100 duration-500 text-primary" size="xs" lead="normal">
                + Add a Co-Founder
              </BaseParagraph>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white rounded-md min-w-[900px] p-4">
            <div className="w-full flex items-center justify-between gap-4 p-3">
              <BaseParagraph size="md" weight="semibold">
                {editIndex !== null ? 'Edit Co-Founder' : 'Add a Co-Founder'}
              </BaseParagraph>
              <button onClick={function () { return setOpen(false); }} type="button" className="text-muted-400 hover:text-red-500 duration-200 z-50">
                <ReIcon iconName="AiOutlineClose"/>
              </button>
            </div>
            <div className="w-full">
              <div className="bg-white p-6 w-full">
                <p className="text-gray-600 mb-4">
                  Tell us about you and any co-founders of this entity.
                </p>

                <form onSubmit={formik.handleSubmit} className="w-full">
                  {item.form.items.map(function (field, i) {
            var _a;
            return (<InputRenderrer key={i} suggested="current-password" name={field.name} formik={formik} value={(_a = formik === null || formik === void 0 ? void 0 : formik.values) === null || _a === void 0 ? void 0 : _a[field.name]} type={field.type} label={field.label} onChange={formik.handleChange} onBlur={formik === null || formik === void 0 ? void 0 : formik.handleBlur}/>);
        })}

                  <div className="flex justify-end">
                    <DialogClose>
                      <button type="button" className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md mr-2 hover:bg-gray-300" onClick={function () { return setOpen(false); }}>
                        Cancel
                      </button>
                    </DialogClose>
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <p className="text-gray-600 mb-4">
        Do you have any other co-founders? You’ll need their name, email, phone, and address.
      </p>
      <div className="space-y-4">
        {(_a = oldFormik === null || oldFormik === void 0 ? void 0 : oldFormik.values) === null || _a === void 0 ? void 0 : _a[name].map(function (val, index) {
            var boldText = "".concat(val[Object.keys(val)[0]], " (Co-Founder)");
            var secondaryText = "".concat(val[Object.keys(val)[1]]);
            var descriptionText = "".concat(val[Object.keys(val)[2]]);
            return (<div key={index} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center shadow-sm">
              <div>
                <p className="font-medium text-gray-800">{boldText}</p>
                <p className="text-gray-600">{secondaryText}</p>
                <p className="text-gray-600">{descriptionText}</p>
              </div>
              <div className="flex space-x-4">
                <button type="button" onClick={function () { return handleEditIndex(index); }} className="text-blue-600 hover:underline">
                  Edit
                </button>
                <button type="button" onClick={function () { return handleRemoveIndex(index); }} className="text-red-600 hover:underline">
                  Remove
                </button>
              </div>
            </div>);
        })}
      </div>
    </div>);
};
export default CustomCDDA;
//# sourceMappingURL=CustomCDDA.jsx.map