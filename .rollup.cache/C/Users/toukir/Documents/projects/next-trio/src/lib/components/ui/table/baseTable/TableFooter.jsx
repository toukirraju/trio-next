var TableFooter = function (_a) {
    var footerData = _a.footerData, footerClasses = _a.footerClasses;
    return (<tfoot className={footerClasses && footerClasses}>
            <tr>
                {footerData.map(function (column, index) { return (<td key={index}>
                        {column === null || column === void 0 ? void 0 : column.value}
                    </td>); })}
            </tr>
        </tfoot>);
};
export default TableFooter;
//# sourceMappingURL=TableFooter.jsx.map