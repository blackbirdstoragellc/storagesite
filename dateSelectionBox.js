const dateSelectBox = document.getElementById("date_dynamic_select");

switch(['umw', 'uva', 'jmu', 'gu', 'mu', 'gwu', 'gmu', 'su', 'umd'].indexOf(school)) {
    case 0: //umw
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 4/27/2020 All Day', 'umw-04272020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 4/28/2020 All Day', 'umw-04282020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 4/29/2020 All Day', 'umw-04292020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 4/30/2020 Morning', 'umw-04302020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/1/2020 Evening', 'umw-05012020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/2/2020 Evening', 'umw-05022020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date ($90 fee)', 'custom');
        break;
    case 1: //uva
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/1/2020 Morning', 'uva-05012020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Sunday 5/3/2020 Morning', 'uva-05032020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 5/4/2020 Evening', 'uva-05042020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 5/5/2020 Morning', 'uva-05052020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/6/2020 Evening', 'uva-05062020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/7/2020 Morning', 'uva-05072020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/8/2020 Evening', 'uva-05082020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/9/2020 Morning', 'uva-05092020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date', 'custom');
        break;
    case 2: //jmu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/2/2020 Evening', 'jmu-05022020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Sunday 5/3/2020 Morning', 'jmu-05032020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 5/4/2020 Evening', 'jmu-05042020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 5/5/2020 Morning', 'jmu-05052020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/6/2020 Evening', 'jmu-05062020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/7/2020 Morning', 'jmu-05072020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/8/2020 Evening', 'jmu-05082020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date ($90 fee)', 'custom');
        break;
    case 3: //gu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/2/2020 Morning', 'gu-05022020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Sunday 5/3/2020 Evening', 'gu-05032020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 5/4/2020 Morning', 'gu-05042020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 5/5/2020 Evening', 'gu-05052020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/6/2020 Morning', 'gu-05062020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/7/2020 Evening', 'gu-05072020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/8/2020 Morning', 'gu-05082020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/9/2020 Evening', 'gu-05092020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Sunday 5/10/2020 Morning', 'gu-05102020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date ($90 fee)', 'custom');
        break;
    case 4: //mu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 5/4/2020 Morning', 'mu-05042020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 5/5/2020 Evening', 'mu-05052020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/6/2020 Morning', 'mu-05062020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/7/2020 Evening', 'mu-05072020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/8/2020 Morning', 'mu-05082020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/9/2020 Evening', 'mu-05092020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Sunday 5/10/2020 Morning', 'mu-05102020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date ($90 fee)', 'custom');
        break;
    case 5: //gwu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 5/4/2020 Morning', 'gwu-05042020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 5/5/2020 Evening', 'gwu-05052020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/6/2020 Morning', 'gwu-05062020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/7/2020 Evening', 'gwu-05072020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/8/2020 Morning', 'gwu-05082020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/9/2020 Evening', 'gwu-05092020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Sunday 5/10/2020 Morning', 'gwu-05102020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 5/11/2020 Morning', 'gwu-05112020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 5/12/2020 Evening', 'gwu-05122020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/13/2020 Morning', 'gwu-05132020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date ($90 fee)', 'custom');
        break;
    case 6: //gmu
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/6/2020 Morning', 'gmu-05062020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/7/2020 Evening', 'gmu-05072020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/8/2020 Morning', 'gmu-05082020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/9/2020 Evening', 'gmu-05092020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Sunday 5/10/2020 Evening', 'gmu-05102020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 5/11/2020 Morning', 'gmu-05112020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 5/12/2020 Evening', 'gmu-05122020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/13/2020 Morning', 'gmu-05132020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/14/2020 Evening', 'gmu-05142020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date ($90 fee)', 'custom');
        break;
    case 7: //su
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 5/11/2020 Evening', 'su-05112020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 5/12/2020 Morning', 'su-05122020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/13/2020 Evening', 'su-05132020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/14/2020 Morning', 'su-05142020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/15/2020 Evening', 'su-05152020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/16/2020 Morning', 'su-05162020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date ($90 fee)', 'custom');
        break;
    case 8: //umd
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/14/2020 Evening', 'umd-05142020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Friday 5/15/2020 Morning', 'umd-05152020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Saturday 5/16/2020 Evening', 'umd-05162020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Sunday 5/17/2020 All Day', 'umd-05272020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Monday 5/18/2020 All Day', 'umd-05272020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Tuesday 5/19/2020 All Day', 'umd-05282020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Wednesday 5/20/2020 All Day', 'umd-05202020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Thursday 5/21/2020 All Day', 'umd-05212020');
        dateSelectBox.options[dateSelectBox.options.length] = new Option('Custom Date ($90 fee)', 'custom');
        break;
}