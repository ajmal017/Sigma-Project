function LightweightChartDesktop() {

    function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
        var switcherElement = document.querySelector('.coin-main-linear-diagram-swither.desktop');

        var intervalElements = items.map(function(item) {
            var itemEl = document.createElement('button');
            itemEl.innerText = item;
            itemEl.classList.add('switcher-item');
            itemEl.classList.toggle('switcher-active-item', item === activeItem);
            itemEl.addEventListener('click', function() {
                onItemClicked(item);
            });
            switcherElement.appendChild(itemEl);
            return itemEl;
        });

        function onItemClicked(item) {
            if (item === activeItem) {
                return;
            }

            intervalElements.forEach(function(element, index) {
                element.classList.toggle('switcher-active-item', items[index] === item);
            });

            activeItem = item;

            activeItemChangedCallback(item);
        }

        return switcherElement;
    }

    var intervals = ['1D', '1W', '1M', '1Y'];

    var dayData = [{
            time: '2018-10-19',
            value: 26.19
        },
        {
            time: '2018-10-22',
            value: 25.87
        },
        {
            time: '2018-10-23',
            value: 25.83
        },
        {
            time: '2018-10-24',
            value: 25.78
        },
        {
            time: '2018-10-25',
            value: 25.82
        },
        {
            time: '2018-10-26',
            value: 25.81
        },
        {
            time: '2018-10-29',
            value: 25.82
        },
        {
            time: '2018-10-30',
            value: 25.71
        },
        {
            time: '2018-10-31',
            value: 25.82
        },
        {
            time: '2018-11-01',
            value: 25.72
        },
        {
            time: '2018-11-02',
            value: 25.74
        },
        {
            time: '2018-11-05',
            value: 25.81
        },
        {
            time: '2018-11-06',
            value: 25.75
        },
        {
            time: '2018-11-07',
            value: 25.73
        },
        {
            time: '2018-11-08',
            value: 25.75
        },
        {
            time: '2018-11-09',
            value: 25.75
        },
        {
            time: '2018-11-12',
            value: 25.76
        },
        {
            time: '2018-11-13',
            value: 25.80
        },
        {
            time: '2018-11-14',
            value: 25.77
        },
        {
            time: '2018-11-15',
            value: 25.75
        },
        {
            time: '2018-11-16',
            value: 25.75
        },
        {
            time: '2018-11-19',
            value: 25.75
        },
        {
            time: '2018-11-20',
            value: 25.72
        },
        {
            time: '2018-11-21',
            value: 25.78
        },
        {
            time: '2018-11-23',
            value: 25.72
        },
        {
            time: '2018-11-26',
            value: 25.78
        },
        {
            time: '2018-11-27',
            value: 25.85
        },
        {
            time: '2018-11-28',
            value: 25.85
        },
        {
            time: '2018-11-29',
            value: 25.55
        },
        {
            time: '2018-11-30',
            value: 25.41
        },
        {
            time: '2018-12-03',
            value: 25.41
        },
        {
            time: '2018-12-04',
            value: 25.42
        },
        {
            time: '2018-12-06',
            value: 25.33
        },
        {
            time: '2018-12-07',
            value: 25.39
        },
        {
            time: '2018-12-10',
            value: 25.32
        },
        {
            time: '2018-12-11',
            value: 25.48
        },
        {
            time: '2018-12-12',
            value: 25.39
        },
        {
            time: '2018-12-13',
            value: 25.45
        },
        {
            time: '2018-12-14',
            value: 25.52
        },
        {
            time: '2018-12-17',
            value: 25.38
        },
        {
            time: '2018-12-18',
            value: 25.36
        },
        {
            time: '2018-12-19',
            value: 25.65
        },
        {
            time: '2018-12-20',
            value: 25.70
        },
        {
            time: '2018-12-21',
            value: 25.66
        },
        {
            time: '2018-12-24',
            value: 25.66
        },
        {
            time: '2018-12-26',
            value: 25.65
        },
        {
            time: '2018-12-27',
            value: 25.66
        },
        {
            time: '2018-12-28',
            value: 25.68
        },
        {
            time: '2018-12-31',
            value: 25.77
        },
        {
            time: '2019-01-02',
            value: 25.72
        },
        {
            time: '2019-01-03',
            value: 25.69
        },
        {
            time: '2019-01-04',
            value: 25.71
        },
        {
            time: '2019-01-07',
            value: 25.72
        },
        {
            time: '2019-01-08',
            value: 25.72
        },
        {
            time: '2019-01-09',
            value: 25.66
        },
        {
            time: '2019-01-10',
            value: 25.85
        },
        {
            time: '2019-01-11',
            value: 25.92
        },
        {
            time: '2019-01-14',
            value: 25.94
        },
        {
            time: '2019-01-15',
            value: 25.95
        },
        {
            time: '2019-01-16',
            value: 26.00
        },
        {
            time: '2019-01-17',
            value: 25.99
        },
        {
            time: '2019-01-18',
            value: 25.60
        },
        {
            time: '2019-01-22',
            value: 25.81
        },
        {
            time: '2019-01-23',
            value: 25.70
        },
        {
            time: '2019-01-24',
            value: 25.74
        },
        {
            time: '2019-01-25',
            value: 25.80
        },
        {
            time: '2019-01-28',
            value: 25.83
        },
        {
            time: '2019-01-29',
            value: 25.70
        },
        {
            time: '2019-01-30',
            value: 25.78
        },
        {
            time: '2019-01-31',
            value: 25.35
        },
        {
            time: '2019-02-01',
            value: 25.60
        },
        {
            time: '2019-02-04',
            value: 25.65
        },
        {
            time: '2019-02-05',
            value: 25.73
        },
        {
            time: '2019-02-06',
            value: 25.71
        },
        {
            time: '2019-02-07',
            value: 25.71
        },
        {
            time: '2019-02-08',
            value: 25.72
        },
        {
            time: '2019-02-11',
            value: 25.76
        },
        {
            time: '2019-02-12',
            value: 25.84
        },
        {
            time: '2019-02-13',
            value: 25.85
        },
        {
            time: '2019-02-14',
            value: 25.87
        },
        {
            time: '2019-02-15',
            value: 25.89
        },
        {
            time: '2019-02-19',
            value: 25.90
        },
        {
            time: '2019-02-20',
            value: 25.92
        },
        {
            time: '2019-02-21',
            value: 25.96
        },
        {
            time: '2019-02-22',
            value: 26.00
        },
        {
            time: '2019-02-25',
            value: 25.93
        },
        {
            time: '2019-02-26',
            value: 25.92
        },
        {
            time: '2019-02-27',
            value: 25.67
        },
        {
            time: '2019-02-28',
            value: 25.79
        },
        {
            time: '2019-03-01',
            value: 25.86
        },
        {
            time: '2019-03-04',
            value: 25.94
        },
        {
            time: '2019-03-05',
            value: 26.02
        },
        {
            time: '2019-03-06',
            value: 25.95
        },
        {
            time: '2019-03-07',
            value: 25.89
        },
        {
            time: '2019-03-08',
            value: 25.94
        },
        {
            time: '2019-03-11',
            value: 25.91
        },
        {
            time: '2019-03-12',
            value: 25.92
        },
        {
            time: '2019-03-13',
            value: 26.00
        },
        {
            time: '2019-03-14',
            value: 26.05
        },
        {
            time: '2019-03-15',
            value: 26.11
        },
        {
            time: '2019-03-18',
            value: 26.10
        },
        {
            time: '2019-03-19',
            value: 25.98
        },
        {
            time: '2019-03-20',
            value: 26.11
        },
        {
            time: '2019-03-21',
            value: 26.12
        },
        {
            time: '2019-03-22',
            value: 25.88
        },
        {
            time: '2019-03-25',
            value: 25.85
        },
        {
            time: '2019-03-26',
            value: 25.72
        },
        {
            time: '2019-03-27',
            value: 25.73
        },
        {
            time: '2019-03-28',
            value: 25.80
        },
        {
            time: '2019-03-29',
            value: 25.77
        },
        {
            time: '2019-04-01',
            value: 26.06
        },
        {
            time: '2019-04-02',
            value: 25.93
        },
        {
            time: '2019-04-03',
            value: 25.95
        },
        {
            time: '2019-04-04',
            value: 26.06
        },
        {
            time: '2019-04-05',
            value: 26.16
        },
        {
            time: '2019-04-08',
            value: 26.12
        },
        {
            time: '2019-04-09',
            value: 26.07
        },
        {
            time: '2019-04-10',
            value: 26.13
        },
        {
            time: '2019-04-11',
            value: 26.04
        },
        {
            time: '2019-04-12',
            value: 26.04
        },
        {
            time: '2019-04-15',
            value: 26.05
        },
        {
            time: '2019-04-16',
            value: 26.01
        },
        {
            time: '2019-04-17',
            value: 26.09
        },
        {
            time: '2019-04-18',
            value: 26.00
        },
        {
            time: '2019-04-22',
            value: 26.00
        },
        {
            time: '2019-04-23',
            value: 26.06
        },
        {
            time: '2019-04-24',
            value: 26.00
        },
        {
            time: '2019-04-25',
            value: 25.81
        },
        {
            time: '2019-04-26',
            value: 25.88
        },
        {
            time: '2019-04-29',
            value: 25.91
        },
        {
            time: '2019-04-30',
            value: 25.90
        },
        {
            time: '2019-05-01',
            value: 26.02
        },
        {
            time: '2019-05-02',
            value: 25.97
        },
        {
            time: '2019-05-03',
            value: 26.02
        },
        {
            time: '2019-05-06',
            value: 26.03
        },
        {
            time: '2019-05-07',
            value: 26.04
        },
        {
            time: '2019-05-08',
            value: 26.05
        },
        {
            time: '2019-05-09',
            value: 26.05
        },
        {
            time: '2019-05-10',
            value: 26.08
        },
        {
            time: '2019-05-13',
            value: 26.05
        },
        {
            time: '2019-05-14',
            value: 26.01
        },
        {
            time: '2019-05-15',
            value: 26.03
        },
        {
            time: '2019-05-16',
            value: 26.14
        },
        {
            time: '2019-05-17',
            value: 26.09
        },
        {
            time: '2019-05-20',
            value: 26.01
        },
        {
            time: '2019-05-21',
            value: 26.12
        },
        {
            time: '2019-05-22',
            value: 26.15
        },
        {
            time: '2019-05-23',
            value: 26.18
        },
        {
            time: '2019-05-24',
            value: 26.16
        },
        {
            time: '2019-05-28',
            value: 26.23
        },
    ];

    var weekData = [{
            time: '2016-07-18',
            value: 26.10
        },
        {
            time: '2016-07-25',
            value: 26.19
        },
        {
            time: '2016-08-01',
            value: 26.24
        },
        {
            time: '2016-08-08',
            value: 26.22
        },
        {
            time: '2016-08-15',
            value: 25.98
        },
        {
            time: '2016-08-22',
            value: 25.85
        },
        {
            time: '2016-08-29',
            value: 25.98
        },
        {
            time: '2016-09-05',
            value: 25.71
        },
        {
            time: '2016-09-12',
            value: 25.84
        },
        {
            time: '2016-09-19',
            value: 25.89
        },
        {
            time: '2016-09-26',
            value: 25.65
        },
        {
            time: '2016-10-03',
            value: 25.69
        },
        {
            time: '2016-10-10',
            value: 25.67
        },
        {
            time: '2016-10-17',
            value: 26.11
        },
        {
            time: '2016-10-24',
            value: 25.80
        },
        {
            time: '2016-10-31',
            value: 25.70
        },
        {
            time: '2016-11-07',
            value: 25.40
        },
        {
            time: '2016-11-14',
            value: 25.32
        },
        {
            time: '2016-11-21',
            value: 25.48
        },
        {
            time: '2016-11-28',
            value: 25.08
        },
        {
            time: '2016-12-05',
            value: 25.06
        },
        {
            time: '2016-12-12',
            value: 25.11
        },
        {
            time: '2016-12-19',
            value: 25.34
        },
        {
            time: '2016-12-26',
            value: 25.20
        },
        {
            time: '2017-01-02',
            value: 25.33
        },
        {
            time: '2017-01-09',
            value: 25.56
        },
        {
            time: '2017-01-16',
            value: 25.32
        },
        {
            time: '2017-01-23',
            value: 25.71
        },
        {
            time: '2017-01-30',
            value: 25.85
        },
        {
            time: '2017-02-06',
            value: 25.77
        },
        {
            time: '2017-02-13',
            value: 25.94
        },
        {
            time: '2017-02-20',
            value: 25.67
        },
        {
            time: '2017-02-27',
            value: 25.60
        },
        {
            time: '2017-03-06',
            value: 25.54
        },
        {
            time: '2017-03-13',
            value: 25.84
        },
        {
            time: '2017-03-20',
            value: 25.96
        },
        {
            time: '2017-03-27',
            value: 25.90
        },
        {
            time: '2017-04-03',
            value: 25.97
        },
        {
            time: '2017-04-10',
            value: 26.00
        },
        {
            time: '2017-04-17',
            value: 26.13
        },
        {
            time: '2017-04-24',
            value: 26.02
        },
        {
            time: '2017-05-01',
            value: 26.30
        },
        {
            time: '2017-05-08',
            value: 26.27
        },
        {
            time: '2017-05-15',
            value: 26.24
        },
        {
            time: '2017-05-22',
            value: 26.02
        },
        {
            time: '2017-05-29',
            value: 26.20
        },
        {
            time: '2017-06-05',
            value: 26.12
        },
        {
            time: '2017-06-12',
            value: 26.20
        },
        {
            time: '2017-06-19',
            value: 26.46
        },
        {
            time: '2017-06-26',
            value: 26.39
        },
        {
            time: '2017-07-03',
            value: 26.52
        },
        {
            time: '2017-07-10',
            value: 26.57
        },
        {
            time: '2017-07-17',
            value: 26.65
        },
        {
            time: '2017-07-24',
            value: 26.45
        },
        {
            time: '2017-07-31',
            value: 26.37
        },
        {
            time: '2017-08-07',
            value: 26.13
        },
        {
            time: '2017-08-14',
            value: 26.21
        },
        {
            time: '2017-08-21',
            value: 26.31
        },
        {
            time: '2017-08-28',
            value: 26.33
        },
        {
            time: '2017-09-04',
            value: 26.38
        },
        {
            time: '2017-09-11',
            value: 26.38
        },
        {
            time: '2017-09-18',
            value: 26.50
        },
        {
            time: '2017-09-25',
            value: 26.39
        },
        {
            time: '2017-10-02',
            value: 25.95
        },
        {
            time: '2017-10-09',
            value: 26.15
        },
        {
            time: '2017-10-16',
            value: 26.43
        },
        {
            time: '2017-10-23',
            value: 26.22
        },
        {
            time: '2017-10-30',
            value: 26.14
        },
        {
            time: '2017-11-06',
            value: 26.08
        },
        {
            time: '2017-11-13',
            value: 26.27
        },
        {
            time: '2017-11-20',
            value: 26.30
        },
        {
            time: '2017-11-27',
            value: 25.92
        },
        {
            time: '2017-12-04',
            value: 26.10
        },
        {
            time: '2017-12-11',
            value: 25.88
        },
        {
            time: '2017-12-18',
            value: 25.82
        },
        {
            time: '2017-12-25',
            value: 25.82
        },
        {
            time: '2018-01-01',
            value: 25.81
        },
        {
            time: '2018-01-08',
            value: 25.95
        },
        {
            time: '2018-01-15',
            value: 26.03
        },
        {
            time: '2018-01-22',
            value: 26.04
        },
        {
            time: '2018-01-29',
            value: 25.96
        },
        {
            time: '2018-02-05',
            value: 25.99
        },
        {
            time: '2018-02-12',
            value: 26.00
        },
        {
            time: '2018-02-19',
            value: 26.06
        },
        {
            time: '2018-02-26',
            value: 25.77
        },
        {
            time: '2018-03-05',
            value: 25.81
        },
        {
            time: '2018-03-12',
            value: 25.88
        },
        {
            time: '2018-03-19',
            value: 25.72
        },
        {
            time: '2018-03-26',
            value: 25.75
        },
        {
            time: '2018-04-02',
            value: 25.70
        },
        {
            time: '2018-04-09',
            value: 25.73
        },
        {
            time: '2018-04-16',
            value: 25.74
        },
        {
            time: '2018-04-23',
            value: 25.69
        },
        {
            time: '2018-04-30',
            value: 25.76
        },
        {
            time: '2018-05-07',
            value: 25.89
        },
        {
            time: '2018-05-14',
            value: 25.89
        },
        {
            time: '2018-05-21',
            value: 26.00
        },
        {
            time: '2018-05-28',
            value: 25.79
        },
        {
            time: '2018-06-04',
            value: 26.11
        },
        {
            time: '2018-06-11',
            value: 26.43
        },
        {
            time: '2018-06-18',
            value: 26.30
        },
        {
            time: '2018-06-25',
            value: 26.58
        },
        {
            time: '2018-07-02',
            value: 26.33
        },
        {
            time: '2018-07-09',
            value: 26.33
        },
        {
            time: '2018-07-16',
            value: 26.32
        },
        {
            time: '2018-07-23',
            value: 26.20
        },
        {
            time: '2018-07-30',
            value: 26.03
        },
        {
            time: '2018-08-06',
            value: 26.15
        },
        {
            time: '2018-08-13',
            value: 26.17
        },
        {
            time: '2018-08-20',
            value: 26.28
        },
        {
            time: '2018-08-27',
            value: 25.86
        },
        {
            time: '2018-09-03',
            value: 25.69
        },
        {
            time: '2018-09-10',
            value: 25.69
        },
        {
            time: '2018-09-17',
            value: 25.64
        },
        {
            time: '2018-09-24',
            value: 25.67
        },
        {
            time: '2018-10-01',
            value: 25.55
        },
        {
            time: '2018-10-08',
            value: 25.59
        },
        {
            time: '2018-10-15',
            value: 26.19
        },
        {
            time: '2018-10-22',
            value: 25.81
        },
        {
            time: '2018-10-29',
            value: 25.74
        },
        {
            time: '2018-11-05',
            value: 25.75
        },
        {
            time: '2018-11-12',
            value: 25.75
        },
        {
            time: '2018-11-19',
            value: 25.72
        },
        {
            time: '2018-11-26',
            value: 25.41
        },
        {
            time: '2018-12-03',
            value: 25.39
        },
        {
            time: '2018-12-10',
            value: 25.52
        },
        {
            time: '2018-12-17',
            value: 25.66
        },
        {
            time: '2018-12-24',
            value: 25.68
        },
        {
            time: '2018-12-31',
            value: 25.71
        },
        {
            time: '2019-01-07',
            value: 25.92
        },
        {
            time: '2019-01-14',
            value: 25.60
        },
        {
            time: '2019-01-21',
            value: 25.80
        },
        {
            time: '2019-01-28',
            value: 25.60
        },
        {
            time: '2019-02-04',
            value: 25.72
        },
        {
            time: '2019-02-11',
            value: 25.89
        },
        {
            time: '2019-02-18',
            value: 26.00
        },
        {
            time: '2019-02-25',
            value: 25.86
        },
        {
            time: '2019-03-04',
            value: 25.94
        },
        {
            time: '2019-03-11',
            value: 26.11
        },
        {
            time: '2019-03-18',
            value: 25.88
        },
        {
            time: '2019-03-25',
            value: 25.77
        },
        {
            time: '2019-04-01',
            value: 26.16
        },
        {
            time: '2019-04-08',
            value: 26.04
        },
        {
            time: '2019-04-15',
            value: 26.00
        },
        {
            time: '2019-04-22',
            value: 25.88
        },
        {
            time: '2019-04-29',
            value: 26.02
        },
        {
            time: '2019-05-06',
            value: 26.08
        },
        {
            time: '2019-05-13',
            value: 26.09
        },
        {
            time: '2019-05-20',
            value: 26.16
        },
        {
            time: '2019-05-27',
            value: 26.23
        },
    ];

    var monthData = [{
            time: '2006-12-01',
            value: 25.40
        },
        {
            time: '2007-01-01',
            value: 25.50
        },
        {
            time: '2007-02-01',
            value: 25.11
        },
        {
            time: '2007-03-01',
            value: 25.24
        },
        {
            time: '2007-04-02',
            value: 25.34
        },
        {
            time: '2007-05-01',
            value: 24.82
        },
        {
            time: '2007-06-01',
            value: 23.85
        },
        {
            time: '2007-07-02',
            value: 23.24
        },
        {
            time: '2007-08-01',
            value: 23.05
        },
        {
            time: '2007-09-03',
            value: 22.26
        },
        {
            time: '2007-10-01',
            value: 22.52
        },
        {
            time: '2007-11-01',
            value: 20.84
        },
        {
            time: '2007-12-03',
            value: 20.37
        },
        {
            time: '2008-01-01',
            value: 23.90
        },
        {
            time: '2008-02-01',
            value: 22.58
        },
        {
            time: '2008-03-03',
            value: 21.74
        },
        {
            time: '2008-04-01',
            value: 22.50
        },
        {
            time: '2008-05-01',
            value: 22.38
        },
        {
            time: '2008-06-02',
            value: 20.58
        },
        {
            time: '2008-07-01',
            value: 20.60
        },
        {
            time: '2008-08-01',
            value: 20.82
        },
        {
            time: '2008-09-01',
            value: 17.50
        },
        {
            time: '2008-10-01',
            value: 17.70
        },
        {
            time: '2008-11-03',
            value: 15.52
        },
        {
            time: '2008-12-01',
            value: 18.58
        },
        {
            time: '2009-01-01',
            value: 15.40
        },
        {
            time: '2009-02-02',
            value: 11.68
        },
        {
            time: '2009-03-02',
            value: 14.89
        },
        {
            time: '2009-04-01',
            value: 16.24
        },
        {
            time: '2009-05-01',
            value: 18.33
        },
        {
            time: '2009-06-01',
            value: 18.08
        },
        {
            time: '2009-07-01',
            value: 20.07
        },
        {
            time: '2009-08-03',
            value: 20.35
        },
        {
            time: '2009-09-01',
            value: 21.53
        },
        {
            time: '2009-10-01',
            value: 21.48
        },
        {
            time: '2009-11-02',
            value: 20.28
        },
        {
            time: '2009-12-01',
            value: 21.39
        },
        {
            time: '2010-01-01',
            value: 22.00
        },
        {
            time: '2010-02-01',
            value: 22.31
        },
        {
            time: '2010-03-01',
            value: 22.82
        },
        {
            time: '2010-04-01',
            value: 22.58
        },
        {
            time: '2010-05-03',
            value: 21.02
        },
        {
            time: '2010-06-01',
            value: 21.45
        },
        {
            time: '2010-07-01',
            value: 22.42
        },
        {
            time: '2010-08-02',
            value: 23.61
        },
        {
            time: '2010-09-01',
            value: 24.40
        },
        {
            time: '2010-10-01',
            value: 24.46
        },
        {
            time: '2010-11-01',
            value: 23.64
        },
        {
            time: '2010-12-01',
            value: 22.90
        },
        {
            time: '2011-01-03',
            value: 23.73
        },
        {
            time: '2011-02-01',
            value: 23.52
        },
        {
            time: '2011-03-01',
            value: 24.15
        },
        {
            time: '2011-04-01',
            value: 24.37
        },
        {
            time: '2011-05-02',
            value: 24.40
        },
        {
            time: '2011-06-01',
            value: 24.45
        },
        {
            time: '2011-07-01',
            value: 24.24
        },
        {
            time: '2011-08-01',
            value: 24.00
        },
        {
            time: '2011-09-01',
            value: 22.77
        },
        {
            time: '2011-10-03',
            value: 24.21
        },
        {
            time: '2011-11-01',
            value: 23.40
        },
        {
            time: '2011-12-01',
            value: 23.90
        },
        {
            time: '2012-01-02',
            value: 24.84
        },
        {
            time: '2012-02-01',
            value: 25.04
        },
        {
            time: '2012-03-01',
            value: 24.90
        },
        {
            time: '2012-04-02',
            value: 25.06
        },
        {
            time: '2012-05-01',
            value: 24.63
        },
        {
            time: '2012-06-01',
            value: 25.07
        },
        {
            time: '2012-07-02',
            value: 25.30
        },
        {
            time: '2012-08-01',
            value: 25.08
        },
        {
            time: '2012-09-03',
            value: 25.27
        },
        {
            time: '2012-10-01',
            value: 25.39
        },
        {
            time: '2012-11-01',
            value: 25.06
        },
        {
            time: '2012-12-03',
            value: 25.03
        },
        {
            time: '2013-01-01',
            value: 25.26
        },
        {
            time: '2013-02-01',
            value: 25.20
        },
        {
            time: '2013-03-01',
            value: 25.30
        },
        {
            time: '2013-04-01',
            value: 25.38
        },
        {
            time: '2013-05-01',
            value: 25.22
        },
        {
            time: '2013-06-03',
            value: 24.88
        },
        {
            time: '2013-07-01',
            value: 24.98
        },
        {
            time: '2013-08-01',
            value: 24.60
        },
        {
            time: '2013-09-02',
            value: 24.65
        },
        {
            time: '2013-10-01',
            value: 24.62
        },
        {
            time: '2013-11-01',
            value: 24.65
        },
        {
            time: '2013-12-02',
            value: 24.70
        },
        {
            time: '2014-01-01',
            value: 24.98
        },
        {
            time: '2014-02-03',
            value: 24.95
        },
        {
            time: '2014-03-03',
            value: 25.45
        },
        {
            time: '2014-04-01',
            value: 25.40
        },
        {
            time: '2014-05-01',
            value: 25.51
        },
        {
            time: '2014-06-02',
            value: 25.34
        },
        {
            time: '2014-07-01',
            value: 25.30
        },
        {
            time: '2014-08-01',
            value: 25.36
        },
        {
            time: '2014-09-01',
            value: 25.16
        },
        {
            time: '2014-10-01',
            value: 25.53
        },
        {
            time: '2014-11-03',
            value: 25.40
        },
        {
            time: '2014-12-01',
            value: 25.70
        },
        {
            time: '2015-01-01',
            value: 25.95
        },
        {
            time: '2015-02-02',
            value: 25.81
        },
        {
            time: '2015-03-02',
            value: 25.63
        },
        {
            time: '2015-04-01',
            value: 25.39
        },
        {
            time: '2015-05-01',
            value: 25.62
        },
        {
            time: '2015-06-01',
            value: 25.23
        },
        {
            time: '2015-07-01',
            value: 25.47
        },
        {
            time: '2015-08-03',
            value: 25.18
        },
        {
            time: '2015-09-01',
            value: 25.30
        },
        {
            time: '2015-10-01',
            value: 25.68
        },
        {
            time: '2015-11-02',
            value: 25.63
        },
        {
            time: '2015-12-01',
            value: 25.57
        },
        {
            time: '2016-01-01',
            value: 25.55
        },
        {
            time: '2016-02-01',
            value: 25.05
        },
        {
            time: '2016-03-01',
            value: 25.61
        },
        {
            time: '2016-04-01',
            value: 25.91
        },
        {
            time: '2016-05-02',
            value: 25.84
        },
        {
            time: '2016-06-01',
            value: 25.94
        },
        {
            time: '2016-07-01',
            value: 26.19
        },
        {
            time: '2016-08-01',
            value: 26.06
        },
        {
            time: '2016-09-01',
            value: 25.65
        },
        {
            time: '2016-10-03',
            value: 25.80
        },
        {
            time: '2016-11-01',
            value: 25.06
        },
        {
            time: '2016-12-01',
            value: 25.20
        },
        {
            time: '2017-01-02',
            value: 25.70
        },
        {
            time: '2017-02-01',
            value: 25.78
        },
        {
            time: '2017-03-01',
            value: 25.90
        },
        {
            time: '2017-04-03',
            value: 26.02
        },
        {
            time: '2017-05-01',
            value: 26.02
        },
        {
            time: '2017-06-01',
            value: 26.39
        },
        {
            time: '2017-07-03',
            value: 26.30
        },
        {
            time: '2017-08-01',
            value: 26.14
        },
        {
            time: '2017-09-01',
            value: 26.39
        },
        {
            time: '2017-10-02',
            value: 26.12
        },
        {
            time: '2017-11-01',
            value: 25.81
        },
        {
            time: '2017-12-01',
            value: 25.82
        },
        {
            time: '2018-01-01',
            value: 26.06
        },
        {
            time: '2018-02-01',
            value: 25.78
        },
        {
            time: '2018-03-01',
            value: 25.75
        },
        {
            time: '2018-04-02',
            value: 25.72
        },
        {
            time: '2018-05-01',
            value: 25.75
        },
        {
            time: '2018-06-01',
            value: 26.58
        },
        {
            time: '2018-07-02',
            value: 26.14
        },
        {
            time: '2018-08-01',
            value: 25.86
        },
        {
            time: '2018-09-03',
            value: 25.67
        },
        {
            time: '2018-10-01',
            value: 25.82
        },
        {
            time: '2018-11-01',
            value: 25.41
        },
        {
            time: '2018-12-03',
            value: 25.77
        },
        {
            time: '2019-01-01',
            value: 25.35
        },
        {
            time: '2019-02-01',
            value: 25.79
        },
        {
            time: '2019-03-01',
            value: 25.77
        },
        {
            time: '2019-04-01',
            value: 25.90
        },
        {
            time: '2019-05-01',
            value: 26.23
        },
    ];

    var yearData = [{
            time: '2006-01-02',
            value: 24.89
        },
        {
            time: '2007-01-01',
            value: 25.50
        },
        {
            time: '2008-01-01',
            value: 23.90
        },
        {
            time: '2009-01-01',
            value: 15.40
        },
        {
            time: '2010-01-01',
            value: 22.00
        },
        {
            time: '2011-01-03',
            value: 23.73
        },
        {
            time: '2012-01-02',
            value: 24.84
        },
        {
            time: '2013-01-01',
            value: 25.26
        },
        {
            time: '2014-01-01',
            value: 24.98
        },
        {
            time: '2015-01-01',
            value: 25.95
        },
        {
            time: '2016-01-01',
            value: 25.55
        },
        {
            time: '2017-01-02',
            value: 25.70
        },
        {
            time: '2018-01-01',
            value: 26.06
        },
        {
            time: '2019-01-01',
            value: 26.23
        },
    ];

    var seriesesData = new Map([
        ['1D', dayData],
        ['1W', weekData],
        ['1M', monthData],
        ['1Y', yearData],
    ]);

    var switcherElement = createSimpleSwitcher(intervals, intervals[0], syncToInterval);


    var container = document.createElement('div');
    document.body.appendChild(container);

    var chartWidth = 700;
    var chartHeight = 305;

    var chart = LightweightCharts.createChart(container, {
        width: chartWidth,
        height: chartHeight,
        grid: {
            vertLines: {
                color: 'rgba(42, 46, 57, 0)',
            },
            horzLines: {
                color: 'rgba(42, 46, 57, 0.6)',
            },
        },
        priceScale: {
            scaleMargins: {
                top: 0.3,
                bottom: 0.25,
            },
            borderVisible: false,
        },
        layout: {
            backgroundColor: '#fff',
            textColor: '#000',
        },
        timeScale: {
            borderVisible: false,
        },
        crosshair: {
            horzLine: {
                visible: false,
            },
        },
    });

    document.querySelector('.coin-main-linear-diagram-content.desktop').appendChild(container);



    var areaSeries = null;

    function syncToInterval(interval) {
        if (areaSeries) {
            chart.removeSeries(areaSeries);
            areaSeries = null;
        }
        areaSeries = chart.addAreaSeries({
            topColor: 'transparent',
            bottomColor: 'transparent',
            lineColor: 'rgba(76, 1, 224, 0.8)',
            lineWidth: 2,
        });
        areaSeries.setData(seriesesData.get(interval));
    }

    syncToInterval(intervals[0]);

    var currentBarBtnWidth = 27;
    var currentBarBtnHeight = 27;

    var button = document.createElement('div');
    button.className = 'go-to-realtime-button';
    button.style.left = (chartWidth - currentBarBtnWidth - 60) + 'px';
    button.style.top = (chartHeight - currentBarBtnHeight - 30) + 'px';
    button.style.color = '#4c525e';
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"></path></svg>';
    document.querySelector('.coin-main-linear-diagram-goto.desktop').appendChild(button);

    var timeScale = chart.timeScale();
    chart.subscribeVisibleTimeRangeChange(function() {
        var buttonVisible = timeScale.scrollPosition() < 0;
        button.style.display = buttonVisible ? 'block' : 'none';
    });

    button.addEventListener('click', function() {
        timeScale.scrollToRealTime();
    });

    button.addEventListener('mouseover', function() {
        button.style.background = 'rgba(250, 250, 250, 1)';
        button.style.color = '#000';
    });

    button.addEventListener('mouseout', function() {
        button.style.background = 'rgba(250, 250, 250, 0.6)';
        button.style.color = '#4c525e';
    });


    var legend = document.createElement('div');
    legend.classList.add('legend');
    document.querySelector('.coin-main-linear-diagram-legend.desktop').appendChild(legend);

    var firstRow = document.createElement('div');
    firstRow.innerText = 'ETC USD 7D VWAP';
    legend.appendChild(firstRow);

    function pad(n) {
        var s = ('0' + n);
        return s.substr(s.length - 2);
    }

    chart.subscribeCrosshairMove((param) => {
        if (param.time) {
            const price = param.seriesPrices.get(areaSeries);
            firstRow.innerText = 'ETC USD 7D VWAP' + '  ' + price.toFixed(2);
        } else {
            firstRow.innerText = 'ETC USD 7D VWAP';
        }
    });



    function businessDayToString(businessDay) {
        return businessDay.year + '-' + businessDay.month + '-' + businessDay.day;
    }

    var toolTipWidth = 100;
    var toolTipHeight = 80;
    var toolTipMargin = 15;

    var toolTip = document.createElement('div');
    toolTip.className = 'floating-tooltip-2';
    container.appendChild(toolTip);

    // update tooltip
    chart.subscribeCrosshairMove(function(param) {
        if (!param.time  || param.point.x < 0 || param.point.x > chartWidth || param.point.y < 0 || param.point.y > chartHeight) {
            toolTip.style.display = 'none';
            return;
        }

        var dateStr = LightweightCharts.isBusinessDay(param.time) ?
            businessDayToString(param.time) :
            new Date(param.time * 1000).toLocaleDateString();

        var valueStr = param.seriesPrices.get(volumeSeries);

        toolTip.style.display = 'block';
        var price = param.seriesPrices.get(areaSeries);
        toolTip.innerHTML = '<div style="color: rgba(255, 70, 70, 1)">Apple Inc.</div>' +
            '<div style="font-size: 24px; margin: 4px 0px">' + Math.round(price * 100) / 100 + '</div>' + '<div>' + '<span>Volume</span> ' + valueStr + '</div>' + '<div>' + dateStr + '</div>';

        var y = param.point.y;

        var left = param.point.x + toolTipMargin;
        if (left > chartWidth - toolTipWidth) {
            left = param.point.x - toolTipMargin - toolTipWidth;
        }

        var top = y + toolTipMargin;
        if (top > chartHeight - toolTipHeight) {
            top = y - toolTipHeight - toolTipMargin;
        }

        toolTip.style.left = left + 'px';
        toolTip.style.top = top + 'px';
    });

    var volumeSeries = chart.addHistogramSeries({
        color: '#26a69a',
        lineWidth: 2,
        priceFormat: {
            type: 'volume',
        },
        overlay: true,
        scaleMargins: {
            top: 0.8,
            bottom: 0,
        },
    });

    volumeSeries.setData([{
            time: '2018-10-19',
            value: 19103293.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-22',
            value: 21737523.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-23',
            value: 29328713.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-24',
            value: 37435638.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-25',
            value: 25269995.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-10-26',
            value: 24973311.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-10-29',
            value: 22103692.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-30',
            value: 25231199.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-31',
            value: 24214427.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-01',
            value: 22533201.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-02',
            value: 14734412.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-05',
            value: 12733842.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-06',
            value: 12371207.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-07',
            value: 14891287.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-08',
            value: 12482392.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-09',
            value: 17365762.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-12',
            value: 13236769.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-13',
            value: 13047907.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-14',
            value: 18288710.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-15',
            value: 17147123.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-16',
            value: 19470986.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-19',
            value: 18405731.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-20',
            value: 22028957.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-21',
            value: 18482233.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-23',
            value: 7009050.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-26',
            value: 12308876.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-27',
            value: 14118867.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-28',
            value: 18662989.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-29',
            value: 14763658.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-30',
            value: 31142818.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-03',
            value: 27795428.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-04',
            value: 21727411.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-06',
            value: 26880429.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-07',
            value: 16948126.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-10',
            value: 16603356.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-11',
            value: 14991438.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-12',
            value: 18892182.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-13',
            value: 15454706.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-14',
            value: 13960870.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-17',
            value: 18902523.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-18',
            value: 18895777.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-19',
            value: 20968473.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-20',
            value: 26897008.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-21',
            value: 55413082.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-24',
            value: 15077207.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-26',
            value: 17970539.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-27',
            value: 17530977.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-28',
            value: 14771641.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-31',
            value: 15331758.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-02',
            value: 13969691.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-03',
            value: 19245411.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-04',
            value: 17035848.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-07',
            value: 16348982.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-08',
            value: 21425008.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-09',
            value: 18136000.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-10',
            value: 14259910.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-11',
            value: 15801548.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-14',
            value: 11342293.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-15',
            value: 10074386.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-16',
            value: 13411691.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-17',
            value: 15223854.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-18',
            value: 16802516.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-22',
            value: 18284771.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-23',
            value: 15109007.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-24',
            value: 12494109.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-25',
            value: 17806822.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-28',
            value: 25955718.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-29',
            value: 33789235.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-30',
            value: 27260036.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-31',
            value: 28585447.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-01',
            value: 13778392.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-04',
            value: 15818901.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-05',
            value: 14124794.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-06',
            value: 11391442.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-07',
            value: 12436168.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-08',
            value: 12011657.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-11',
            value: 9802798.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-12',
            value: 11227550.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-13',
            value: 11884803.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-14',
            value: 11190094.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-15',
            value: 15719416.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-19',
            value: 12272877.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-20',
            value: 11379006.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-21',
            value: 14680547.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-22',
            value: 12534431.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-25',
            value: 15051182.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-26',
            value: 12005571.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-27',
            value: 8962776.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-28',
            value: 15742971.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-01',
            value: 10942737.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-04',
            value: 13674737.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-05',
            value: 15749545.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-06',
            value: 13935530.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-07',
            value: 12644171.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-08',
            value: 10646710.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-11',
            value: 13627431.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-12',
            value: 12812980.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-13',
            value: 14168350.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-14',
            value: 12148349.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-15',
            value: 23715337.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-18',
            value: 12168133.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-19',
            value: 13462686.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-20',
            value: 11903104.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-21',
            value: 10920129.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-22',
            value: 25125385.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-25',
            value: 15463411.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-26',
            value: 12316901.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-27',
            value: 13290298.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-28',
            value: 20547060.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-29',
            value: 17283871.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-01',
            value: 16331140.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-02',
            value: 11408146.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-03',
            value: 15491724.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-04',
            value: 8776028.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-05',
            value: 11497780.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-08',
            value: 11680538.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-09',
            value: 10414416.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-10',
            value: 8782061.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-11',
            value: 9219930.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-12',
            value: 10847504.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-15',
            value: 7741472.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-16',
            value: 10239261.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-17',
            value: 15498037.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-18',
            value: 13189013.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-22',
            value: 11950365.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-23',
            value: 23488682.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-24',
            value: 13227084.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-25',
            value: 17425466.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-26',
            value: 16329727.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-29',
            value: 13984965.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-30',
            value: 15469002.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-01',
            value: 11627436.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-02',
            value: 14435436.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-03',
            value: 9388228.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-06',
            value: 10066145.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-07',
            value: 12963827.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-08',
            value: 12086743.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-09',
            value: 14835326.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-10',
            value: 10707335.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-13',
            value: 13759350.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-14',
            value: 12776175.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-15',
            value: 10806379.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-16',
            value: 11695064.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-17',
            value: 14436662.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-20',
            value: 20910590.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-21',
            value: 14016315.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-22',
            value: 11487448.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-23',
            value: 11707083.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-24',
            value: 8755506.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-28',
            value: 3097125.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
    ]);

};

function LightweightChartMobile() {

    function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
        var switcherElement = document.querySelector('.coin-main-linear-diagram-swither.mobile');

        var intervalElements = items.map(function(item) {
            var itemEl = document.createElement('button');
            itemEl.innerText = item;
            itemEl.classList.add('switcher-item');
            itemEl.classList.toggle('switcher-active-item', item === activeItem);
            itemEl.addEventListener('click', function() {
                onItemClicked(item);
            });
            switcherElement.appendChild(itemEl);
            return itemEl;
        });

        function onItemClicked(item) {
            if (item === activeItem) {
                return;
            }

            intervalElements.forEach(function(element, index) {
                element.classList.toggle('switcher-active-item', items[index] === item);
            });

            activeItem = item;

            activeItemChangedCallback(item);
        }

        return switcherElement;
    }

    var intervals = ['1D', '1W', '1M', '1Y'];

    var dayData = [{
            time: '2018-10-19',
            value: 26.19
        },
        {
            time: '2018-10-22',
            value: 25.87
        },
        {
            time: '2018-10-23',
            value: 25.83
        },
        {
            time: '2018-10-24',
            value: 25.78
        },
        {
            time: '2018-10-25',
            value: 25.82
        },
        {
            time: '2018-10-26',
            value: 25.81
        },
        {
            time: '2018-10-29',
            value: 25.82
        },
        {
            time: '2018-10-30',
            value: 25.71
        },
        {
            time: '2018-10-31',
            value: 25.82
        },
        {
            time: '2018-11-01',
            value: 25.72
        },
        {
            time: '2018-11-02',
            value: 25.74
        },
        {
            time: '2018-11-05',
            value: 25.81
        },
        {
            time: '2018-11-06',
            value: 25.75
        },
        {
            time: '2018-11-07',
            value: 25.73
        },
        {
            time: '2018-11-08',
            value: 25.75
        },
        {
            time: '2018-11-09',
            value: 25.75
        },
        {
            time: '2018-11-12',
            value: 25.76
        },
        {
            time: '2018-11-13',
            value: 25.80
        },
        {
            time: '2018-11-14',
            value: 25.77
        },
        {
            time: '2018-11-15',
            value: 25.75
        },
        {
            time: '2018-11-16',
            value: 25.75
        },
        {
            time: '2018-11-19',
            value: 25.75
        },
        {
            time: '2018-11-20',
            value: 25.72
        },
        {
            time: '2018-11-21',
            value: 25.78
        },
        {
            time: '2018-11-23',
            value: 25.72
        },
        {
            time: '2018-11-26',
            value: 25.78
        },
        {
            time: '2018-11-27',
            value: 25.85
        },
        {
            time: '2018-11-28',
            value: 25.85
        },
        {
            time: '2018-11-29',
            value: 25.55
        },
        {
            time: '2018-11-30',
            value: 25.41
        },
        {
            time: '2018-12-03',
            value: 25.41
        },
        {
            time: '2018-12-04',
            value: 25.42
        },
        {
            time: '2018-12-06',
            value: 25.33
        },
        {
            time: '2018-12-07',
            value: 25.39
        },
        {
            time: '2018-12-10',
            value: 25.32
        },
        {
            time: '2018-12-11',
            value: 25.48
        },
        {
            time: '2018-12-12',
            value: 25.39
        },
        {
            time: '2018-12-13',
            value: 25.45
        },
        {
            time: '2018-12-14',
            value: 25.52
        },
        {
            time: '2018-12-17',
            value: 25.38
        },
        {
            time: '2018-12-18',
            value: 25.36
        },
        {
            time: '2018-12-19',
            value: 25.65
        },
        {
            time: '2018-12-20',
            value: 25.70
        },
        {
            time: '2018-12-21',
            value: 25.66
        },
        {
            time: '2018-12-24',
            value: 25.66
        },
        {
            time: '2018-12-26',
            value: 25.65
        },
        {
            time: '2018-12-27',
            value: 25.66
        },
        {
            time: '2018-12-28',
            value: 25.68
        },
        {
            time: '2018-12-31',
            value: 25.77
        },
        {
            time: '2019-01-02',
            value: 25.72
        },
        {
            time: '2019-01-03',
            value: 25.69
        },
        {
            time: '2019-01-04',
            value: 25.71
        },
        {
            time: '2019-01-07',
            value: 25.72
        },
        {
            time: '2019-01-08',
            value: 25.72
        },
        {
            time: '2019-01-09',
            value: 25.66
        },
        {
            time: '2019-01-10',
            value: 25.85
        },
        {
            time: '2019-01-11',
            value: 25.92
        },
        {
            time: '2019-01-14',
            value: 25.94
        },
        {
            time: '2019-01-15',
            value: 25.95
        },
        {
            time: '2019-01-16',
            value: 26.00
        },
        {
            time: '2019-01-17',
            value: 25.99
        },
        {
            time: '2019-01-18',
            value: 25.60
        },
        {
            time: '2019-01-22',
            value: 25.81
        },
        {
            time: '2019-01-23',
            value: 25.70
        },
        {
            time: '2019-01-24',
            value: 25.74
        },
        {
            time: '2019-01-25',
            value: 25.80
        },
        {
            time: '2019-01-28',
            value: 25.83
        },
        {
            time: '2019-01-29',
            value: 25.70
        },
        {
            time: '2019-01-30',
            value: 25.78
        },
        {
            time: '2019-01-31',
            value: 25.35
        },
        {
            time: '2019-02-01',
            value: 25.60
        },
        {
            time: '2019-02-04',
            value: 25.65
        },
        {
            time: '2019-02-05',
            value: 25.73
        },
        {
            time: '2019-02-06',
            value: 25.71
        },
        {
            time: '2019-02-07',
            value: 25.71
        },
        {
            time: '2019-02-08',
            value: 25.72
        },
        {
            time: '2019-02-11',
            value: 25.76
        },
        {
            time: '2019-02-12',
            value: 25.84
        },
        {
            time: '2019-02-13',
            value: 25.85
        },
        {
            time: '2019-02-14',
            value: 25.87
        },
        {
            time: '2019-02-15',
            value: 25.89
        },
        {
            time: '2019-02-19',
            value: 25.90
        },
        {
            time: '2019-02-20',
            value: 25.92
        },
        {
            time: '2019-02-21',
            value: 25.96
        },
        {
            time: '2019-02-22',
            value: 26.00
        },
        {
            time: '2019-02-25',
            value: 25.93
        },
        {
            time: '2019-02-26',
            value: 25.92
        },
        {
            time: '2019-02-27',
            value: 25.67
        },
        {
            time: '2019-02-28',
            value: 25.79
        },
        {
            time: '2019-03-01',
            value: 25.86
        },
        {
            time: '2019-03-04',
            value: 25.94
        },
        {
            time: '2019-03-05',
            value: 26.02
        },
        {
            time: '2019-03-06',
            value: 25.95
        },
        {
            time: '2019-03-07',
            value: 25.89
        },
        {
            time: '2019-03-08',
            value: 25.94
        },
        {
            time: '2019-03-11',
            value: 25.91
        },
        {
            time: '2019-03-12',
            value: 25.92
        },
        {
            time: '2019-03-13',
            value: 26.00
        },
        {
            time: '2019-03-14',
            value: 26.05
        },
        {
            time: '2019-03-15',
            value: 26.11
        },
        {
            time: '2019-03-18',
            value: 26.10
        },
        {
            time: '2019-03-19',
            value: 25.98
        },
        {
            time: '2019-03-20',
            value: 26.11
        },
        {
            time: '2019-03-21',
            value: 26.12
        },
        {
            time: '2019-03-22',
            value: 25.88
        },
        {
            time: '2019-03-25',
            value: 25.85
        },
        {
            time: '2019-03-26',
            value: 25.72
        },
        {
            time: '2019-03-27',
            value: 25.73
        },
        {
            time: '2019-03-28',
            value: 25.80
        },
        {
            time: '2019-03-29',
            value: 25.77
        },
        {
            time: '2019-04-01',
            value: 26.06
        },
        {
            time: '2019-04-02',
            value: 25.93
        },
        {
            time: '2019-04-03',
            value: 25.95
        },
        {
            time: '2019-04-04',
            value: 26.06
        },
        {
            time: '2019-04-05',
            value: 26.16
        },
        {
            time: '2019-04-08',
            value: 26.12
        },
        {
            time: '2019-04-09',
            value: 26.07
        },
        {
            time: '2019-04-10',
            value: 26.13
        },
        {
            time: '2019-04-11',
            value: 26.04
        },
        {
            time: '2019-04-12',
            value: 26.04
        },
        {
            time: '2019-04-15',
            value: 26.05
        },
        {
            time: '2019-04-16',
            value: 26.01
        },
        {
            time: '2019-04-17',
            value: 26.09
        },
        {
            time: '2019-04-18',
            value: 26.00
        },
        {
            time: '2019-04-22',
            value: 26.00
        },
        {
            time: '2019-04-23',
            value: 26.06
        },
        {
            time: '2019-04-24',
            value: 26.00
        },
        {
            time: '2019-04-25',
            value: 25.81
        },
        {
            time: '2019-04-26',
            value: 25.88
        },
        {
            time: '2019-04-29',
            value: 25.91
        },
        {
            time: '2019-04-30',
            value: 25.90
        },
        {
            time: '2019-05-01',
            value: 26.02
        },
        {
            time: '2019-05-02',
            value: 25.97
        },
        {
            time: '2019-05-03',
            value: 26.02
        },
        {
            time: '2019-05-06',
            value: 26.03
        },
        {
            time: '2019-05-07',
            value: 26.04
        },
        {
            time: '2019-05-08',
            value: 26.05
        },
        {
            time: '2019-05-09',
            value: 26.05
        },
        {
            time: '2019-05-10',
            value: 26.08
        },
        {
            time: '2019-05-13',
            value: 26.05
        },
        {
            time: '2019-05-14',
            value: 26.01
        },
        {
            time: '2019-05-15',
            value: 26.03
        },
        {
            time: '2019-05-16',
            value: 26.14
        },
        {
            time: '2019-05-17',
            value: 26.09
        },
        {
            time: '2019-05-20',
            value: 26.01
        },
        {
            time: '2019-05-21',
            value: 26.12
        },
        {
            time: '2019-05-22',
            value: 26.15
        },
        {
            time: '2019-05-23',
            value: 26.18
        },
        {
            time: '2019-05-24',
            value: 26.16
        },
        {
            time: '2019-05-28',
            value: 26.23
        },
    ];

    var weekData = [{
            time: '2016-07-18',
            value: 26.10
        },
        {
            time: '2016-07-25',
            value: 26.19
        },
        {
            time: '2016-08-01',
            value: 26.24
        },
        {
            time: '2016-08-08',
            value: 26.22
        },
        {
            time: '2016-08-15',
            value: 25.98
        },
        {
            time: '2016-08-22',
            value: 25.85
        },
        {
            time: '2016-08-29',
            value: 25.98
        },
        {
            time: '2016-09-05',
            value: 25.71
        },
        {
            time: '2016-09-12',
            value: 25.84
        },
        {
            time: '2016-09-19',
            value: 25.89
        },
        {
            time: '2016-09-26',
            value: 25.65
        },
        {
            time: '2016-10-03',
            value: 25.69
        },
        {
            time: '2016-10-10',
            value: 25.67
        },
        {
            time: '2016-10-17',
            value: 26.11
        },
        {
            time: '2016-10-24',
            value: 25.80
        },
        {
            time: '2016-10-31',
            value: 25.70
        },
        {
            time: '2016-11-07',
            value: 25.40
        },
        {
            time: '2016-11-14',
            value: 25.32
        },
        {
            time: '2016-11-21',
            value: 25.48
        },
        {
            time: '2016-11-28',
            value: 25.08
        },
        {
            time: '2016-12-05',
            value: 25.06
        },
        {
            time: '2016-12-12',
            value: 25.11
        },
        {
            time: '2016-12-19',
            value: 25.34
        },
        {
            time: '2016-12-26',
            value: 25.20
        },
        {
            time: '2017-01-02',
            value: 25.33
        },
        {
            time: '2017-01-09',
            value: 25.56
        },
        {
            time: '2017-01-16',
            value: 25.32
        },
        {
            time: '2017-01-23',
            value: 25.71
        },
        {
            time: '2017-01-30',
            value: 25.85
        },
        {
            time: '2017-02-06',
            value: 25.77
        },
        {
            time: '2017-02-13',
            value: 25.94
        },
        {
            time: '2017-02-20',
            value: 25.67
        },
        {
            time: '2017-02-27',
            value: 25.60
        },
        {
            time: '2017-03-06',
            value: 25.54
        },
        {
            time: '2017-03-13',
            value: 25.84
        },
        {
            time: '2017-03-20',
            value: 25.96
        },
        {
            time: '2017-03-27',
            value: 25.90
        },
        {
            time: '2017-04-03',
            value: 25.97
        },
        {
            time: '2017-04-10',
            value: 26.00
        },
        {
            time: '2017-04-17',
            value: 26.13
        },
        {
            time: '2017-04-24',
            value: 26.02
        },
        {
            time: '2017-05-01',
            value: 26.30
        },
        {
            time: '2017-05-08',
            value: 26.27
        },
        {
            time: '2017-05-15',
            value: 26.24
        },
        {
            time: '2017-05-22',
            value: 26.02
        },
        {
            time: '2017-05-29',
            value: 26.20
        },
        {
            time: '2017-06-05',
            value: 26.12
        },
        {
            time: '2017-06-12',
            value: 26.20
        },
        {
            time: '2017-06-19',
            value: 26.46
        },
        {
            time: '2017-06-26',
            value: 26.39
        },
        {
            time: '2017-07-03',
            value: 26.52
        },
        {
            time: '2017-07-10',
            value: 26.57
        },
        {
            time: '2017-07-17',
            value: 26.65
        },
        {
            time: '2017-07-24',
            value: 26.45
        },
        {
            time: '2017-07-31',
            value: 26.37
        },
        {
            time: '2017-08-07',
            value: 26.13
        },
        {
            time: '2017-08-14',
            value: 26.21
        },
        {
            time: '2017-08-21',
            value: 26.31
        },
        {
            time: '2017-08-28',
            value: 26.33
        },
        {
            time: '2017-09-04',
            value: 26.38
        },
        {
            time: '2017-09-11',
            value: 26.38
        },
        {
            time: '2017-09-18',
            value: 26.50
        },
        {
            time: '2017-09-25',
            value: 26.39
        },
        {
            time: '2017-10-02',
            value: 25.95
        },
        {
            time: '2017-10-09',
            value: 26.15
        },
        {
            time: '2017-10-16',
            value: 26.43
        },
        {
            time: '2017-10-23',
            value: 26.22
        },
        {
            time: '2017-10-30',
            value: 26.14
        },
        {
            time: '2017-11-06',
            value: 26.08
        },
        {
            time: '2017-11-13',
            value: 26.27
        },
        {
            time: '2017-11-20',
            value: 26.30
        },
        {
            time: '2017-11-27',
            value: 25.92
        },
        {
            time: '2017-12-04',
            value: 26.10
        },
        {
            time: '2017-12-11',
            value: 25.88
        },
        {
            time: '2017-12-18',
            value: 25.82
        },
        {
            time: '2017-12-25',
            value: 25.82
        },
        {
            time: '2018-01-01',
            value: 25.81
        },
        {
            time: '2018-01-08',
            value: 25.95
        },
        {
            time: '2018-01-15',
            value: 26.03
        },
        {
            time: '2018-01-22',
            value: 26.04
        },
        {
            time: '2018-01-29',
            value: 25.96
        },
        {
            time: '2018-02-05',
            value: 25.99
        },
        {
            time: '2018-02-12',
            value: 26.00
        },
        {
            time: '2018-02-19',
            value: 26.06
        },
        {
            time: '2018-02-26',
            value: 25.77
        },
        {
            time: '2018-03-05',
            value: 25.81
        },
        {
            time: '2018-03-12',
            value: 25.88
        },
        {
            time: '2018-03-19',
            value: 25.72
        },
        {
            time: '2018-03-26',
            value: 25.75
        },
        {
            time: '2018-04-02',
            value: 25.70
        },
        {
            time: '2018-04-09',
            value: 25.73
        },
        {
            time: '2018-04-16',
            value: 25.74
        },
        {
            time: '2018-04-23',
            value: 25.69
        },
        {
            time: '2018-04-30',
            value: 25.76
        },
        {
            time: '2018-05-07',
            value: 25.89
        },
        {
            time: '2018-05-14',
            value: 25.89
        },
        {
            time: '2018-05-21',
            value: 26.00
        },
        {
            time: '2018-05-28',
            value: 25.79
        },
        {
            time: '2018-06-04',
            value: 26.11
        },
        {
            time: '2018-06-11',
            value: 26.43
        },
        {
            time: '2018-06-18',
            value: 26.30
        },
        {
            time: '2018-06-25',
            value: 26.58
        },
        {
            time: '2018-07-02',
            value: 26.33
        },
        {
            time: '2018-07-09',
            value: 26.33
        },
        {
            time: '2018-07-16',
            value: 26.32
        },
        {
            time: '2018-07-23',
            value: 26.20
        },
        {
            time: '2018-07-30',
            value: 26.03
        },
        {
            time: '2018-08-06',
            value: 26.15
        },
        {
            time: '2018-08-13',
            value: 26.17
        },
        {
            time: '2018-08-20',
            value: 26.28
        },
        {
            time: '2018-08-27',
            value: 25.86
        },
        {
            time: '2018-09-03',
            value: 25.69
        },
        {
            time: '2018-09-10',
            value: 25.69
        },
        {
            time: '2018-09-17',
            value: 25.64
        },
        {
            time: '2018-09-24',
            value: 25.67
        },
        {
            time: '2018-10-01',
            value: 25.55
        },
        {
            time: '2018-10-08',
            value: 25.59
        },
        {
            time: '2018-10-15',
            value: 26.19
        },
        {
            time: '2018-10-22',
            value: 25.81
        },
        {
            time: '2018-10-29',
            value: 25.74
        },
        {
            time: '2018-11-05',
            value: 25.75
        },
        {
            time: '2018-11-12',
            value: 25.75
        },
        {
            time: '2018-11-19',
            value: 25.72
        },
        {
            time: '2018-11-26',
            value: 25.41
        },
        {
            time: '2018-12-03',
            value: 25.39
        },
        {
            time: '2018-12-10',
            value: 25.52
        },
        {
            time: '2018-12-17',
            value: 25.66
        },
        {
            time: '2018-12-24',
            value: 25.68
        },
        {
            time: '2018-12-31',
            value: 25.71
        },
        {
            time: '2019-01-07',
            value: 25.92
        },
        {
            time: '2019-01-14',
            value: 25.60
        },
        {
            time: '2019-01-21',
            value: 25.80
        },
        {
            time: '2019-01-28',
            value: 25.60
        },
        {
            time: '2019-02-04',
            value: 25.72
        },
        {
            time: '2019-02-11',
            value: 25.89
        },
        {
            time: '2019-02-18',
            value: 26.00
        },
        {
            time: '2019-02-25',
            value: 25.86
        },
        {
            time: '2019-03-04',
            value: 25.94
        },
        {
            time: '2019-03-11',
            value: 26.11
        },
        {
            time: '2019-03-18',
            value: 25.88
        },
        {
            time: '2019-03-25',
            value: 25.77
        },
        {
            time: '2019-04-01',
            value: 26.16
        },
        {
            time: '2019-04-08',
            value: 26.04
        },
        {
            time: '2019-04-15',
            value: 26.00
        },
        {
            time: '2019-04-22',
            value: 25.88
        },
        {
            time: '2019-04-29',
            value: 26.02
        },
        {
            time: '2019-05-06',
            value: 26.08
        },
        {
            time: '2019-05-13',
            value: 26.09
        },
        {
            time: '2019-05-20',
            value: 26.16
        },
        {
            time: '2019-05-27',
            value: 26.23
        },
    ];

    var monthData = [{
            time: '2006-12-01',
            value: 25.40
        },
        {
            time: '2007-01-01',
            value: 25.50
        },
        {
            time: '2007-02-01',
            value: 25.11
        },
        {
            time: '2007-03-01',
            value: 25.24
        },
        {
            time: '2007-04-02',
            value: 25.34
        },
        {
            time: '2007-05-01',
            value: 24.82
        },
        {
            time: '2007-06-01',
            value: 23.85
        },
        {
            time: '2007-07-02',
            value: 23.24
        },
        {
            time: '2007-08-01',
            value: 23.05
        },
        {
            time: '2007-09-03',
            value: 22.26
        },
        {
            time: '2007-10-01',
            value: 22.52
        },
        {
            time: '2007-11-01',
            value: 20.84
        },
        {
            time: '2007-12-03',
            value: 20.37
        },
        {
            time: '2008-01-01',
            value: 23.90
        },
        {
            time: '2008-02-01',
            value: 22.58
        },
        {
            time: '2008-03-03',
            value: 21.74
        },
        {
            time: '2008-04-01',
            value: 22.50
        },
        {
            time: '2008-05-01',
            value: 22.38
        },
        {
            time: '2008-06-02',
            value: 20.58
        },
        {
            time: '2008-07-01',
            value: 20.60
        },
        {
            time: '2008-08-01',
            value: 20.82
        },
        {
            time: '2008-09-01',
            value: 17.50
        },
        {
            time: '2008-10-01',
            value: 17.70
        },
        {
            time: '2008-11-03',
            value: 15.52
        },
        {
            time: '2008-12-01',
            value: 18.58
        },
        {
            time: '2009-01-01',
            value: 15.40
        },
        {
            time: '2009-02-02',
            value: 11.68
        },
        {
            time: '2009-03-02',
            value: 14.89
        },
        {
            time: '2009-04-01',
            value: 16.24
        },
        {
            time: '2009-05-01',
            value: 18.33
        },
        {
            time: '2009-06-01',
            value: 18.08
        },
        {
            time: '2009-07-01',
            value: 20.07
        },
        {
            time: '2009-08-03',
            value: 20.35
        },
        {
            time: '2009-09-01',
            value: 21.53
        },
        {
            time: '2009-10-01',
            value: 21.48
        },
        {
            time: '2009-11-02',
            value: 20.28
        },
        {
            time: '2009-12-01',
            value: 21.39
        },
        {
            time: '2010-01-01',
            value: 22.00
        },
        {
            time: '2010-02-01',
            value: 22.31
        },
        {
            time: '2010-03-01',
            value: 22.82
        },
        {
            time: '2010-04-01',
            value: 22.58
        },
        {
            time: '2010-05-03',
            value: 21.02
        },
        {
            time: '2010-06-01',
            value: 21.45
        },
        {
            time: '2010-07-01',
            value: 22.42
        },
        {
            time: '2010-08-02',
            value: 23.61
        },
        {
            time: '2010-09-01',
            value: 24.40
        },
        {
            time: '2010-10-01',
            value: 24.46
        },
        {
            time: '2010-11-01',
            value: 23.64
        },
        {
            time: '2010-12-01',
            value: 22.90
        },
        {
            time: '2011-01-03',
            value: 23.73
        },
        {
            time: '2011-02-01',
            value: 23.52
        },
        {
            time: '2011-03-01',
            value: 24.15
        },
        {
            time: '2011-04-01',
            value: 24.37
        },
        {
            time: '2011-05-02',
            value: 24.40
        },
        {
            time: '2011-06-01',
            value: 24.45
        },
        {
            time: '2011-07-01',
            value: 24.24
        },
        {
            time: '2011-08-01',
            value: 24.00
        },
        {
            time: '2011-09-01',
            value: 22.77
        },
        {
            time: '2011-10-03',
            value: 24.21
        },
        {
            time: '2011-11-01',
            value: 23.40
        },
        {
            time: '2011-12-01',
            value: 23.90
        },
        {
            time: '2012-01-02',
            value: 24.84
        },
        {
            time: '2012-02-01',
            value: 25.04
        },
        {
            time: '2012-03-01',
            value: 24.90
        },
        {
            time: '2012-04-02',
            value: 25.06
        },
        {
            time: '2012-05-01',
            value: 24.63
        },
        {
            time: '2012-06-01',
            value: 25.07
        },
        {
            time: '2012-07-02',
            value: 25.30
        },
        {
            time: '2012-08-01',
            value: 25.08
        },
        {
            time: '2012-09-03',
            value: 25.27
        },
        {
            time: '2012-10-01',
            value: 25.39
        },
        {
            time: '2012-11-01',
            value: 25.06
        },
        {
            time: '2012-12-03',
            value: 25.03
        },
        {
            time: '2013-01-01',
            value: 25.26
        },
        {
            time: '2013-02-01',
            value: 25.20
        },
        {
            time: '2013-03-01',
            value: 25.30
        },
        {
            time: '2013-04-01',
            value: 25.38
        },
        {
            time: '2013-05-01',
            value: 25.22
        },
        {
            time: '2013-06-03',
            value: 24.88
        },
        {
            time: '2013-07-01',
            value: 24.98
        },
        {
            time: '2013-08-01',
            value: 24.60
        },
        {
            time: '2013-09-02',
            value: 24.65
        },
        {
            time: '2013-10-01',
            value: 24.62
        },
        {
            time: '2013-11-01',
            value: 24.65
        },
        {
            time: '2013-12-02',
            value: 24.70
        },
        {
            time: '2014-01-01',
            value: 24.98
        },
        {
            time: '2014-02-03',
            value: 24.95
        },
        {
            time: '2014-03-03',
            value: 25.45
        },
        {
            time: '2014-04-01',
            value: 25.40
        },
        {
            time: '2014-05-01',
            value: 25.51
        },
        {
            time: '2014-06-02',
            value: 25.34
        },
        {
            time: '2014-07-01',
            value: 25.30
        },
        {
            time: '2014-08-01',
            value: 25.36
        },
        {
            time: '2014-09-01',
            value: 25.16
        },
        {
            time: '2014-10-01',
            value: 25.53
        },
        {
            time: '2014-11-03',
            value: 25.40
        },
        {
            time: '2014-12-01',
            value: 25.70
        },
        {
            time: '2015-01-01',
            value: 25.95
        },
        {
            time: '2015-02-02',
            value: 25.81
        },
        {
            time: '2015-03-02',
            value: 25.63
        },
        {
            time: '2015-04-01',
            value: 25.39
        },
        {
            time: '2015-05-01',
            value: 25.62
        },
        {
            time: '2015-06-01',
            value: 25.23
        },
        {
            time: '2015-07-01',
            value: 25.47
        },
        {
            time: '2015-08-03',
            value: 25.18
        },
        {
            time: '2015-09-01',
            value: 25.30
        },
        {
            time: '2015-10-01',
            value: 25.68
        },
        {
            time: '2015-11-02',
            value: 25.63
        },
        {
            time: '2015-12-01',
            value: 25.57
        },
        {
            time: '2016-01-01',
            value: 25.55
        },
        {
            time: '2016-02-01',
            value: 25.05
        },
        {
            time: '2016-03-01',
            value: 25.61
        },
        {
            time: '2016-04-01',
            value: 25.91
        },
        {
            time: '2016-05-02',
            value: 25.84
        },
        {
            time: '2016-06-01',
            value: 25.94
        },
        {
            time: '2016-07-01',
            value: 26.19
        },
        {
            time: '2016-08-01',
            value: 26.06
        },
        {
            time: '2016-09-01',
            value: 25.65
        },
        {
            time: '2016-10-03',
            value: 25.80
        },
        {
            time: '2016-11-01',
            value: 25.06
        },
        {
            time: '2016-12-01',
            value: 25.20
        },
        {
            time: '2017-01-02',
            value: 25.70
        },
        {
            time: '2017-02-01',
            value: 25.78
        },
        {
            time: '2017-03-01',
            value: 25.90
        },
        {
            time: '2017-04-03',
            value: 26.02
        },
        {
            time: '2017-05-01',
            value: 26.02
        },
        {
            time: '2017-06-01',
            value: 26.39
        },
        {
            time: '2017-07-03',
            value: 26.30
        },
        {
            time: '2017-08-01',
            value: 26.14
        },
        {
            time: '2017-09-01',
            value: 26.39
        },
        {
            time: '2017-10-02',
            value: 26.12
        },
        {
            time: '2017-11-01',
            value: 25.81
        },
        {
            time: '2017-12-01',
            value: 25.82
        },
        {
            time: '2018-01-01',
            value: 26.06
        },
        {
            time: '2018-02-01',
            value: 25.78
        },
        {
            time: '2018-03-01',
            value: 25.75
        },
        {
            time: '2018-04-02',
            value: 25.72
        },
        {
            time: '2018-05-01',
            value: 25.75
        },
        {
            time: '2018-06-01',
            value: 26.58
        },
        {
            time: '2018-07-02',
            value: 26.14
        },
        {
            time: '2018-08-01',
            value: 25.86
        },
        {
            time: '2018-09-03',
            value: 25.67
        },
        {
            time: '2018-10-01',
            value: 25.82
        },
        {
            time: '2018-11-01',
            value: 25.41
        },
        {
            time: '2018-12-03',
            value: 25.77
        },
        {
            time: '2019-01-01',
            value: 25.35
        },
        {
            time: '2019-02-01',
            value: 25.79
        },
        {
            time: '2019-03-01',
            value: 25.77
        },
        {
            time: '2019-04-01',
            value: 25.90
        },
        {
            time: '2019-05-01',
            value: 26.23
        },
    ];

    var yearData = [{
            time: '2006-01-02',
            value: 24.89
        },
        {
            time: '2007-01-01',
            value: 25.50
        },
        {
            time: '2008-01-01',
            value: 23.90
        },
        {
            time: '2009-01-01',
            value: 15.40
        },
        {
            time: '2010-01-01',
            value: 22.00
        },
        {
            time: '2011-01-03',
            value: 23.73
        },
        {
            time: '2012-01-02',
            value: 24.84
        },
        {
            time: '2013-01-01',
            value: 25.26
        },
        {
            time: '2014-01-01',
            value: 24.98
        },
        {
            time: '2015-01-01',
            value: 25.95
        },
        {
            time: '2016-01-01',
            value: 25.55
        },
        {
            time: '2017-01-02',
            value: 25.70
        },
        {
            time: '2018-01-01',
            value: 26.06
        },
        {
            time: '2019-01-01',
            value: 26.23
        },
    ];

    var seriesesData = new Map([
        ['1D', dayData],
        ['1W', weekData],
        ['1M', monthData],
        ['1Y', yearData],
    ]);

    var switcherElement = createSimpleSwitcher(intervals, intervals[0], syncToInterval);


    var container = document.createElement('div');
    document.body.appendChild(container);

    var chartWidth = 600;
    var chartHeight = 300;

    var chart = LightweightCharts.createChart(container, {
        width: chartWidth,
        height: chartHeight,
        grid: {
            vertLines: {
                color: 'rgba(42, 46, 57, 0)',
            },
            horzLines: {
                color: 'rgba(42, 46, 57, 0.6)',
            },
        },
        priceScale: {
            scaleMargins: {
                top: 0.3,
                bottom: 0.25,
            },
            borderVisible: false,
        },
        layout: {
            backgroundColor: '#fff',
            textColor: '#000',
        },
        timeScale: {
            borderVisible: false,
        },
        crosshair: {
            horzLine: {
                visible: false,
            },
        },
    });

    document.querySelector('.coin-main-linear-diagram-content.mobile').appendChild(container);



    var areaSeries = null;

    function syncToInterval(interval) {
        if (areaSeries) {
            chart.removeSeries(areaSeries);
            areaSeries = null;
        }
        areaSeries = chart.addAreaSeries({
            topColor: 'transparent',
            bottomColor: 'transparent',
            lineColor: 'rgba(76, 1, 224, 0.8)',
            lineWidth: 2,
        });
        areaSeries.setData(seriesesData.get(interval));
    }

    syncToInterval(intervals[0]);

    var currentBarBtnWidth = 27;
    var currentBarBtnHeight = 27;

    var button = document.createElement('div');
    button.className = 'go-to-realtime-button';
    button.style.left = (chartWidth - currentBarBtnWidth - 60) + 'px';
    button.style.top = (chartHeight - currentBarBtnHeight - 30) + 'px';
    button.style.color = '#4c525e';
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"></path></svg>';
    document.querySelector('.coin-main-linear-diagram-goto.mobile').appendChild(button);

    var timeScale = chart.timeScale();
    chart.subscribeVisibleTimeRangeChange(function() {
        var buttonVisible = timeScale.scrollPosition() < 0;
        button.style.display = buttonVisible ? 'block' : 'none';
    });

    button.addEventListener('click', function() {
        timeScale.scrollToRealTime();
    });

    button.addEventListener('mouseover', function() {
        button.style.background = 'rgba(250, 250, 250, 1)';
        button.style.color = '#000';
    });

    button.addEventListener('mouseout', function() {
        button.style.background = 'rgba(250, 250, 250, 0.6)';
        button.style.color = '#4c525e';
    });


    var legend = document.createElement('div');
    legend.classList.add('legend');
    document.querySelector('.coin-main-linear-diagram-legend.mobile').appendChild(legend);

    var firstRow = document.createElement('div');
    firstRow.innerText = 'ETC USD 7D VWAP';
    legend.appendChild(firstRow);

    function pad(n) {
        var s = ('0' + n);
        return s.substr(s.length - 2);
    }

    chart.subscribeCrosshairMove((param) => {
        if (param.time) {
            const price = param.seriesPrices.get(areaSeries);
            firstRow.innerText = 'ETC USD 7D VWAP' + '  ' + price.toFixed(2);
        } else {
            firstRow.innerText = 'ETC USD 7D VWAP';
        }
    });



    function businessDayToString(businessDay) {
        return businessDay.year + '-' + businessDay.month + '-' + businessDay.day;
    }

    var toolTipWidth = 100;
    var toolTipHeight = 80;
    var toolTipMargin = 15;

    var toolTip = document.createElement('div');
    toolTip.className = 'floating-tooltip-2';
    container.appendChild(toolTip);

    // update tooltip
    chart.subscribeCrosshairMove(function(param) {
        if (!param.time  || param.point.x < 0 || param.point.x > chartWidth || param.point.y < 0 || param.point.y > chartHeight) {
            toolTip.style.display = 'none';
            return;
        }

        var dateStr = LightweightCharts.isBusinessDay(param.time) ?
            businessDayToString(param.time) :
            new Date(param.time * 1000).toLocaleDateString();

        var valueStr = param.seriesPrices.get(volumeSeries);

        toolTip.style.display = 'block';
        var price = param.seriesPrices.get(areaSeries);
        toolTip.innerHTML = '<div style="color: rgba(255, 70, 70, 1)">Apple Inc.</div>' +
            '<div style="font-size: 24px; margin: 4px 0px">' + Math.round(price * 100) / 100 + '</div>' + '<div>' + '<span>Volume</span> ' + valueStr + '</div>' + '<div>' + dateStr + '</div>';

        var y = param.point.y;

        var left = param.point.x + toolTipMargin;
        if (left > chartWidth - toolTipWidth) {
            left = param.point.x - toolTipMargin - toolTipWidth;
        }

        var top = y + toolTipMargin;
        if (top > chartHeight - toolTipHeight) {
            top = y - toolTipHeight - toolTipMargin;
        }

        toolTip.style.left = left + 'px';
        toolTip.style.top = top + 'px';
    });

    var volumeSeries = chart.addHistogramSeries({
        color: '#26a69a',
        lineWidth: 2,
        priceFormat: {
            type: 'volume',
        },
        overlay: true,
        scaleMargins: {
            top: 0.8,
            bottom: 0,
        },
    });

    volumeSeries.setData([{
            time: '2018-10-19',
            value: 19103293.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-22',
            value: 21737523.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-23',
            value: 29328713.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-24',
            value: 37435638.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-25',
            value: 25269995.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-10-26',
            value: 24973311.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-10-29',
            value: 22103692.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-30',
            value: 25231199.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-10-31',
            value: 24214427.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-01',
            value: 22533201.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-02',
            value: 14734412.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-05',
            value: 12733842.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-06',
            value: 12371207.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-07',
            value: 14891287.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-08',
            value: 12482392.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-09',
            value: 17365762.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-12',
            value: 13236769.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-13',
            value: 13047907.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-14',
            value: 18288710.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-15',
            value: 17147123.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-16',
            value: 19470986.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-19',
            value: 18405731.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-20',
            value: 22028957.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-21',
            value: 18482233.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-23',
            value: 7009050.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-26',
            value: 12308876.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-27',
            value: 14118867.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-11-28',
            value: 18662989.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-29',
            value: 14763658.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-11-30',
            value: 31142818.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-03',
            value: 27795428.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-04',
            value: 21727411.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-06',
            value: 26880429.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-07',
            value: 16948126.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-10',
            value: 16603356.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-11',
            value: 14991438.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-12',
            value: 18892182.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-13',
            value: 15454706.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-14',
            value: 13960870.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-17',
            value: 18902523.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-18',
            value: 18895777.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-19',
            value: 20968473.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-20',
            value: 26897008.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-21',
            value: 55413082.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-24',
            value: 15077207.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2018-12-26',
            value: 17970539.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-27',
            value: 17530977.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-28',
            value: 14771641.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2018-12-31',
            value: 15331758.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-02',
            value: 13969691.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-03',
            value: 19245411.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-04',
            value: 17035848.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-07',
            value: 16348982.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-08',
            value: 21425008.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-09',
            value: 18136000.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-10',
            value: 14259910.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-11',
            value: 15801548.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-14',
            value: 11342293.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-15',
            value: 10074386.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-16',
            value: 13411691.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-17',
            value: 15223854.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-18',
            value: 16802516.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-22',
            value: 18284771.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-23',
            value: 15109007.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-24',
            value: 12494109.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-25',
            value: 17806822.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-28',
            value: 25955718.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-29',
            value: 33789235.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-01-30',
            value: 27260036.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-01-31',
            value: 28585447.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-01',
            value: 13778392.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-04',
            value: 15818901.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-05',
            value: 14124794.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-06',
            value: 11391442.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-07',
            value: 12436168.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-08',
            value: 12011657.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-11',
            value: 9802798.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-12',
            value: 11227550.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-13',
            value: 11884803.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-14',
            value: 11190094.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-15',
            value: 15719416.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-19',
            value: 12272877.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-20',
            value: 11379006.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-21',
            value: 14680547.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-22',
            value: 12534431.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-25',
            value: 15051182.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-26',
            value: 12005571.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-02-27',
            value: 8962776.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-02-28',
            value: 15742971.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-01',
            value: 10942737.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-04',
            value: 13674737.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-05',
            value: 15749545.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-06',
            value: 13935530.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-07',
            value: 12644171.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-08',
            value: 10646710.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-11',
            value: 13627431.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-12',
            value: 12812980.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-13',
            value: 14168350.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-14',
            value: 12148349.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-15',
            value: 23715337.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-18',
            value: 12168133.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-19',
            value: 13462686.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-20',
            value: 11903104.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-21',
            value: 10920129.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-22',
            value: 25125385.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-25',
            value: 15463411.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-26',
            value: 12316901.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-27',
            value: 13290298.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-03-28',
            value: 20547060.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-03-29',
            value: 17283871.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-01',
            value: 16331140.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-02',
            value: 11408146.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-03',
            value: 15491724.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-04',
            value: 8776028.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-05',
            value: 11497780.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-08',
            value: 11680538.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-09',
            value: 10414416.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-10',
            value: 8782061.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-11',
            value: 9219930.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-12',
            value: 10847504.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-15',
            value: 7741472.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-16',
            value: 10239261.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-17',
            value: 15498037.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-18',
            value: 13189013.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-22',
            value: 11950365.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-23',
            value: 23488682.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-24',
            value: 13227084.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-25',
            value: 17425466.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-04-26',
            value: 16329727.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-29',
            value: 13984965.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-04-30',
            value: 15469002.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-01',
            value: 11627436.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-02',
            value: 14435436.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-03',
            value: 9388228.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-06',
            value: 10066145.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-07',
            value: 12963827.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-08',
            value: 12086743.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-09',
            value: 14835326.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-10',
            value: 10707335.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-13',
            value: 13759350.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-14',
            value: 12776175.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-15',
            value: 10806379.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-16',
            value: 11695064.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-17',
            value: 14436662.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-20',
            value: 20910590.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-21',
            value: 14016315.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-22',
            value: 11487448.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-23',
            value: 11707083.00,
            color: 'rgba(255,82,82, 0.8)'
        },
        {
            time: '2019-05-24',
            value: 8755506.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
        {
            time: '2019-05-28',
            value: 3097125.00,
            color: 'rgba(0, 150, 136, 0.8)'
        },
    ]);

};


if (window.matchMedia("screen and (max-width: 1199px)").matches) {
LightweightChartMobile();  
} else {
LightweightChartDesktop();  
}