const textAr =
  'underscore_case\nfirst_name \nSome_Variable \ncalculate_AGE\ndelayed_departure';
const textSplt = textAr.split('\n');
console.log(textSplt);
//works for text format
for (const i of textSplt) {
  let words = i.toLowerCase().trim().split('_');
  let [one, two] = words;
  console.log(`${one}${two.replace(two[0], two[0].toUpperCase())}`);
}

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
