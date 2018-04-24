$(function () {
    $('#generate_btn').click(function () {
        genSpider();
    });
});

function genSpider() {

    Highcharts.visualize = function (table, options) {

        // the data series
        options.series = [];

        $.each($(':checked'), function (index, item) {
            //Get the tds of this checked item row
            var tds = $(item).parents('tr').first().children('td');
            var name = $(tds[1]).html();
            var genre_predicted = validation_data[name].genre_predicted;
            var songData = {
                name: name,
                data: getSongAudioFeatures(name),
                pointPlacement: 'on',
                color: 'red'
            };
            var genreData = {
                name: genre_predicted,
                data: getGenreAudioFeatures(genre_predicted),
                pointPlacement: 'on',
                color: 'purple'
            }

            options.series.push(songData);
            options.series.push(genreData);
        });

        var chart = new Highcharts.Chart(options);
    }

    var table = document.getElementById('datatable');
    var options = {
            chart: {
                renderTo: 'container',
                polar: true,
                type: 'line'
            },
            title: {
                text: 'Song Audio Features'
            },
            xAxis: {
                categories: audio_features,
                tickmarkPlacement: 'on',
                lineWidth: 0
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0,
                max: 1,
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.original}</b><br/>'
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical'
            }
        };

    Highcharts.visualize(table, options);

}
