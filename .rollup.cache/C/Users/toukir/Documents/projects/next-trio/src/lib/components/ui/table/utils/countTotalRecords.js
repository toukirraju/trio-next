export function countTotalRecords(data) {
    var count = 0;
    data.forEach(function (item) {
        if (item.id) {
            count++;
        }
        if (item.groupItems && Array.isArray(item.groupItems)) {
            count += countTotalRecords(item.groupItems);
        }
    });
    return count;
}
//# sourceMappingURL=countTotalRecords.js.map