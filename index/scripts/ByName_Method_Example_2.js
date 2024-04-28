/* ByName_Method_Example_2.js
==================================================
JavaScript getElementsByName() example
==================================================
*/
'use strict';
{
    let btn = document.getElementById('btnRate');

    let output = document.getElementById('output');


    btn.addEventListener('click', () => {
        let rates = document.getElementsByName('rate');
        rates.forEach((rate) => {
            if (rate.checked) {
                output.innerText = `You selected: ${rate.value}`;
            }
        });

    });
}

