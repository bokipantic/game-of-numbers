let counter = 0;
let numbers = [];

$('.num').click(event => {
    const number = event.target.innerHTML;
    const classColor = event.target.className.split(' ')[1];
    if (counter < 10) {
        if (!numbers.includes(number)) {
            counter++;
            numbers.push(number);
            $('.betNumbers').append(`
                <div class="betNum ${classColor}">
                    ${number}
                </div>
            `);
            $(`.${number}`).addClass('selected');
        } else {
            swal("Greska", "Ne mozete odigrati dva ista broja!", "error");
        }
    } else {
        swal("Info", "Mozete maksimalno odigrati 10 brojeva!", "warning");
    }
});

$('.reset').click(() => {
    $('.betNumbers').empty();
    counter = 0;
    numbers = [];
    $('.num').removeClass('selected');
});

const getColor = num => {
    let colorClass;
    switch (+num) {
        case 1:
        case 9:
        case 17:
        case 25:
        case 33:
        case 41:
            colorClass = 'c1';
            break;
        case 2:
        case 10:
        case 18:
        case 26:
        case 34:
        case 42:
            colorClass = 'c2';
            break;
        case 3:
        case 11:
        case 19:
        case 27:
        case 35:
        case 43:
            colorClass = 'c3';
            break;
        case 4:
        case 12:
        case 20:
        case 28:
        case 36:
        case 44:
            colorClass = 'c4';
            break;
        case 5:
        case 13:
        case 21:
        case 29:
        case 37:
        case 45:
            colorClass = 'c5';
            break;
        case 6:
        case 14:
        case 22:
        case 30:
        case 38:
        case 46:
            colorClass = 'c6';
            break;
        case 7:
        case 15:
        case 23:
        case 31:
        case 39:
        case 47:
            colorClass = 'c7';
            break;
        case 8:
        case 16:
        case 24:
        case 32:
        case 40:
        case 48:
            colorClass = 'c8';
            break;
        default:
            colorClass = 'white';
    }
    return colorClass;
}

$('.random').click(() => {
    let randomNumbers = [];
    for (let i = 0; i < Infinity; i++) {
        let randomNum = (Math.floor(Math.random() * 48) + 1).toString();
        if (numbers.indexOf(randomNum) === -1 && randomNumbers.indexOf(randomNum) === -1) {
            randomNumbers.push(randomNum);
        }
        if (randomNumbers.length === 6) {
            break;
        }
    }
    if (numbers.length <= 4) {
        counter += 6;
        numbers.push(...randomNumbers);
        for (const num of randomNumbers) {
            $('.betNumbers').append(`
            <div class="betNum ${getColor(num)}">
                ${num}
            </div>
        `);
            $(`.${num}`).addClass('selected');
        }
    } else {
        swal("Info", "Mozete maksimalno odigrati 10 brojeva!", "warning");
    }
});

$('.colNum').click(event => {
    const classColor = event.target.className.split(' ')[1];
    const n = +classColor.slice(1);
    const colNumbers = [n, n + 8, n + 16, n + 24, n + 32, n + 40];
    for (let el of colNumbers) {
        el = el.toString();
        if (counter < 10) {
            if (!numbers.includes(el)) {
                counter++;
                numbers.push(el);
                $('.betNumbers').append(`
                    <div class="betNum ${classColor}">
                        ${el}
                    </div>
                `);
                $(`.${el}`).addClass('selected');
            }
        } else {
            swal("Info", "Mozete maksimalno odigrati 10 brojeva!", "warning");
            break;
        }
    }
});
