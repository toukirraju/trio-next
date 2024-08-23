'use client';
import { __assign, __awaiter, __generator, __spreadArray } from "tslib";
import React, { useState, useCallback, useEffect } from 'react';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import Progress from '../../progress/Progress';
import { useDropzone } from 'react-dropzone';
import IconBox from '../../iconbox/IconBox';
import Button from '../../button/Button';
export default function InputFile(props) {
    var _this = this;
    // Destructure props with default values
    var id = props.id, url = props.url, acceptedFileTypes = props.acceptedFileTypes, _a = props.maxFileSize, maxFileSize = _a === void 0 ? 5 : _a, _b = props.allowMultiple, allowMultiple = _b === void 0 ? false : _b, _c = props.label, label = _c === void 0 ? '' : _c, _d = props.labelAlt, labelAlt = _d === void 0 ? '' : _d, _e = props.shape, shape = _e === void 0 ? 'smooth' : _e, _f = props.color, color = _f === void 0 ? 'contrast' : _f, _g = props.bordered, bordered = _g === void 0 ? false : _g, _h = props.spaced, spaced = _h === void 0 ? true : _h, responses = props.responses, setResponses = props.setResponses;
    var _j = useState([]), files = _j[0], setFiles = _j[1];
    var _k = useState(false), uploadComplete = _k[0], setUploadComplete = _k[1];
    var _l = useState([]), oversizedFiles = _l[0], setOversizedFiles = _l[1];
    // Callback function to handle file drop
    var onDrop = useCallback(function (acceptedFiles, rejectedFiles) {
        var newFiles = acceptedFiles.map(function (file) { return ({
            name: file.name,
            progress: 0,
            status: 'uploading'
        }); });
        setFiles(function (prevFiles) { return __spreadArray(__spreadArray([], prevFiles, true), newFiles, true); });
        acceptedFiles.forEach(uploadFile);
        // Handle oversized files
        var oversized = rejectedFiles
            .filter(function (file) { var _a; return ((_a = file.errors[0]) === null || _a === void 0 ? void 0 : _a.code) === 'file-too-large'; })
            .map(function (file) { return file.file.name; });
        setOversizedFiles(oversized);
    }, []);
    // Configure dropzone
    var _m = useDropzone({
        onDrop: onDrop,
        accept: acceptedFileTypes
            ? acceptedFileTypes.reduce(function (acc, type) {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[type] = [], _a)));
            }, {})
            : undefined,
        maxSize: maxFileSize * 1024 * 1024,
        multiple: allowMultiple,
        onDropRejected: function (rejectedFiles) {
            var oversized = rejectedFiles
                .filter(function (file) { var _a; return ((_a = file.errors[0]) === null || _a === void 0 ? void 0 : _a.code) === 'file-too-large'; })
                .map(function (file) { return file.file.name; });
            setOversizedFiles(oversized);
        }
    }), getRootProps = _m.getRootProps, getInputProps = _m.getInputProps, isDragActive = _m.isDragActive;
    // Function to handle file upload
    var uploadFile = function (file) { return __awaiter(_this, void 0, void 0, function () {
        var formData, response, responseData_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = new FormData();
                    formData.append('file', file);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            body: formData
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Upload failed. Please try again.');
                    return [4 /*yield*/, response.json()];
                case 3:
                    responseData_1 = _a.sent();
                    setFiles(function (prevFiles) {
                        return prevFiles.map(function (f) {
                            return f.name === file.name
                                ? __assign(__assign({}, f), { progress: 100, status: 'success', response: responseData_1 }) : f;
                        });
                    });
                    setResponses(function (prevResponses) { return __spreadArray(__spreadArray([], prevResponses, true), [responseData_1], false); }); // Add the response to the responses state
                    if (files.every(function (f) { return f.status === 'success'; })) {
                        setUploadComplete(true);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    setFiles(function (prevFiles) {
                        return prevFiles.map(function (f) {
                            return f.name === file.name
                                ? __assign(__assign({}, f), { status: 'error', message: 'Upload failed. Please try again.' }) : f;
                        });
                    });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // Function to reset the uploader state
    var resetUploader = function () {
        setFiles([]);
        setUploadComplete(false);
        setResponses([]);
        setOversizedFiles([]);
    };
    // Updated the uploader state
    useEffect(function () {
        setResponses(files);
    }, [files]);
    console.log('response-------------', responses, files);
    return (<div className={"flex w-full flex-col gap-4\n      ".concat(bordered && color === 'default' ? 'border border-muted-200 dark:border-muted-700' : '', "\n      ").concat(bordered && color === 'contrast' ? 'border border-muted-200 dark:border-muted-800' : '', "\n      ").concat(bordered && color === 'muted' ? 'border border-muted-200 dark:border-muted-700' : '', "\n      ").concat(bordered && color === 'mutedContrast' ? 'border border-muted-200 dark:border-muted-800' : '', "\n      ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n      ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n      ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n      ").concat(shape === 'full' ? 'rounded-xl' : '', "\n      ").concat(color === 'default' ? 'bg-white dark:bg-muted-800' : '', "\n      ").concat(color === 'contrast' ? 'bg-white dark:bg-muted-950' : '', "\n      ").concat(color === 'muted' ? 'bg-muted-100 dark:bg-muted-800' : '', "\n      ").concat(color === 'mutedContrast' ? 'bg-muted-100 dark:bg-muted-950' : '', "\n    ")}>
      <div className="w-full">
        <label className={"block pb-3 pt-6 ".concat(spaced ? 'px-6' : '')}>
          <span className="block text-sm text-muted-500 dark:text-muted-400">{label}</span>
          <span className="block text-xs text-muted-500 dark:text-muted-400">{labelAlt}</span>
        </label>

        <div className={"group ".concat(spaced ? 'px-6' : '')}>
          <div {...getRootProps()} className={"relative border-2 border-dashed border-muted-300 bg-muted-50 p-5 dark:border-muted-700 dark:bg-muted-800\n            ".concat(shape === 'rounded' ? 'rounded-md' : '', "\n            ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n            ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n            ").concat(shape === 'full' ? 'rounded-xl' : '', "\n          ")}>
            <input {...getInputProps()}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="mx-auto mb-4 h-14 w-14 text-muted-400 transition-colors duration-300 group-hover:text-primary-500">
              <g fill="none" stroke="currentColor" strokeLinejoin="round">
                <path d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.502 4.502 0 0 0 2 14.5Z"/>
                <path strokeLinecap="round" d="m14 11l-2-2m0 0l-2 2m2-2v6"/>
              </g>
            </svg>
            <div className="mx-auto flex max-w-xs flex-col text-center">
              <p className="text-sm text-muted-500 dark:text-muted-400">
                {isDragActive
            ? 'Drop the files here ...'
            : "Drag 'n' drop some files here, or click to select files"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"flex flex-col-reverse gap-2 overflow-x-auto mb-4 ".concat(spaced ? 'px-6' : '')}>
        {oversizedFiles.length > 0 && (<div className="text-xs text-error-500 mb-2">
            The following file(s) exceed the maximum size of {maxFileSize}MB:
            <ul className="list-disc list-inside">
              {oversizedFiles.map(function (file) { return (<li key={file}>{file}</li>); })}
            </ul>
          </div>)}
        {files.map(function (file) { return (<div key={file.name} className="flex flex-col gap-1 text-xs">
            <p className="text-muted-500 dark:text-muted-400">{file.name}</p>
            <div className={"flex h-6 items-center gap-2 rounded-full border border-muted-200 dark:border-muted-700 pl-2  py-3 overflow-hidden ".concat(file.status !== 'success' && 'pr-2', " ").concat(file.status !== 'success' && 'pr-4')}>
              {file.status === 'success' && (<div className="mr-2">
                  <ReIcon iconName="AiFillCheckCircle" className="-me-3 h-4 w-4 text-success-500"/>
                </div>)}
              <Progress size="xs" value={file.progress}/>
              {file.status === 'success' && (<div className="flex gap-2 pr-2">
                  <button>
                    <ReIcon iconName="CgEye" className="h-4 w-4 text-primary-500"/>
                  </button>
                  <button onClick={function () {
                    setFiles(function (prevFiles) {
                        return prevFiles.filter(function (f) { return f.name !== file.name; });
                    });
                }}>
                    <ReIcon iconName="AiOutlineClose" className="h-4 w-4 text-error-500"/>
                  </button>
                </div>)}
              {file.status === 'error' && (<ReIcon iconName="AiOutlinePlusCircle" className="-me-3 h-5 w-5 rotate-45 text-error-500"/>)}
            </div>
            {file.status === 'error' && (<p className="font-normal text-xs text-error-500 mb-2">{file.message}</p>)}
          </div>); })}
      </div>

      {uploadComplete && (<div className={"flex flex-col gap-2 py-3 ".concat(spaced ? 'px-6' : '')}>
          <div className="mt-3 w-full text-center">
            <IconBox icon="AiOutlineCheckCircle" variant="pastel" color="success" className="mx-auto mb-2"/>
            <h3 className="mb-1 text-base font-light text-muted-800 dark:text-muted-100">
              Upload Complete
            </h3>
            <p className="mx-auto max-w-[320px] text-sm text-muted-500 dark:text-muted-400">
              Great, your file{allowMultiple ? 's were' : ' was'} successfully uploaded.
            </p>
          </div>
        </div>)}

      {(uploadComplete || files.length > 0 || oversizedFiles.length > 0) && (<div className={"pb-6 ".concat(spaced ? 'px-6' : '')}>
          <Button shape={shape} color="muted" type="button" className="w-full" onClick={resetUploader}>
            Upload Again
          </Button>
        </div>)}
    </div>);
}
//# sourceMappingURL=InputFile.jsx.map