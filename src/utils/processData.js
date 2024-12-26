function findData(data, sentence) {
    if (typeof sentence === 'string' && sentence.match(/\$\{.*?}/g) !== null)
        return findData(data, sentence.replace(/\$\{(.*?)}/g, (_, key) => {
            return data[key] || '';
        }))
    return sentence;
}

function addPunctuation(sentence) {
    const vowel = 'AEIOUaeiou'
    if (vowel.includes(sentence[0]))
        return 'an ' + sentence;
    return 'a ' + sentence;
}

function processData(data) {
    let processedData = {}
    Object.entries(data).forEach(([key, value]) => {
        processedData[key] = findData(data, value);
    });

    let punctuation_roles = []
    processedData.roles.forEach(role => {
        punctuation_roles.push(addPunctuation(role))
    })

    processedData['punctuation_roles'] = punctuation_roles;
    processedData['max_len'] = Math.max(...punctuation_roles.map(x => x.length))
    console.log(processedData)
    return processedData;
}

export default processData;