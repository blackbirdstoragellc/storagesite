const dateSelectBox = document.getElementById("date_dynamic_select");

switch(['umw', 'uva', 'jmu', 'gu', 'mu', 'gwu', 'gmu', 'su', 'umd'].indexOf(school)) {
    case 0: //gmu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 1', '0');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 2', '1');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    case 1: //uva
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 1', '0');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 2', '1');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    case 2: //jmu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 1', '0');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 2', '1');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    case 3: //gu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 1', '0');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 2', '1');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    case 4: //mu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 1', '0');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 2', '1');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    case 5: //gwu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 1', '0');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 2', '1');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    case 6: //gmu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 1', '0');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 2', '1');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    case 7: //su
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 1', '0');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 2', '1');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    case 8: //umd
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 1', '0');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Date 2', '1');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    default:
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
}