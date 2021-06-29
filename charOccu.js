function count(s1) {
    return s1.toLowerCase().split("").reduce(
        (output, i) => {
            if (output.hasOwnProperty(i))
                output[i]++;
            else
                output[i] = 1;
            return output;
        }, {}
    )
}
var input = count("Pragati is here");
console.log(input);