function findData(data, sentence) {
    if (typeof sentence === 'string' && sentence.match(/\$\{.*?}/g) !== null)
        return findData(data, sentence.replace(/\$\{(.*?)}/g, (_, key) => {
            return data[key] || '';
        }))
    return sentence;

}

function processData(data) {
    let processedData = {}
    Object.entries(data).forEach(([key, value]) => {
        processedData[key] = findData(data, value);
    });
    return processedData;
}

export default processData;