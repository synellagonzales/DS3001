
Highcharts.chart('container', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Genre: Alternative',
        x: -50
    },

    pane: {
        size: '75%'
    },

    xAxis: {
        categories: ['Danceability', 'Energy', 'Loudness', 'Mode',
            'Speechiness', 'Acousticness', 'Instrumentalness', 'Liveness', 'Valence', 'Tempo'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 1
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: [{
        name: 'Average Alternative',
        data: [0.541, 0.632, 0.854, 0.634, 0.090, 0.242, 0.110, 0.166, 0.397, 0.435],
        pointPlacement: 'on',
        color: 'red'
    }, {
        name: 'id: 64MmobYNviePoiaINMrbMn',
        data: [0.753, 0.761, 0.914, 1, 0.014, 0.088, 0.544, 0.161, 0.409, 0.429],
        pointPlacement: 'on',
        color: 'purple'
    }]

});
