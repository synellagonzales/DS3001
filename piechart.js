$(function () {
    $('#generate_btn').click(function () {
        genPie();
    });
});

var row = 0;
var json = [

{
    "Name": "Department 1",
    "Projects": 2
}, {
    "Name": "Department 2",
    "Projects": 1
}, {
    "Name": "Department 3",
    "Projects": 6
}, {
    "Name": "Department 4",
    "Projects": 4
}

];

function genTable() {


    $(document).ready(function () {

        var tr;
        for (var i = 0; i < json.length; i++) {
            row++;
            tr = $('<tr/>');
            tr.append("<td>" + "<input type=\"checkbox\" id=\"check" + row + "\" />" + "</td>");
            tr.append("<td>" + json[i].Name + "</td>");
            tr.append("<td>" + json[i].Projects + "</td>");
            //tr.append("<td" + " data-graph-name=\"" + json[i].Name + "\">"+ json[i].Projects + "</td>");
            $('table').append(tr);

        }
    });
}

function genPie() {

    Highcharts.visualize = function (table, options) {
        // the categories
        options.xAxis.categories = [];
        $('tbody th', table).each(function (i) {
            options.xAxis.categories.push(this.innerHTML);
        });

        // the data series
        options.series = [{
            data: []
        }];

        $.each($(':checked'), function (index, item) {
            //Get the tds of this checked item row
            var tds = $(item).parents('tr').first().children('td');
            var name = $(tds[1]).html();
            var projects = parseFloat($(tds[2]).html());
            options.series[0].data.push([name, projects]);
        });

        var chart = new Highcharts.Chart(options);
    }

    var table = document.getElementById('datatable'),
        options = {
            chart: {
                renderTo: 'container',
                type: 'pie'
            },
            title: {
                text: 'Pie Chart'
            },
            xAxis: {},
            yAxis: {
                title: {
                    text: 'Projects'
                }
            },
            tooltip: {
                formatter: function () {

                    return '<b>' + this.series.name + '</b><br/>' + this.y + ' ' + this.point.name;
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function () {
                            return '<b>' + this.point.name + '</b>: ' + this.percentage.toFixed(2) + ' %';
                        }
                    }
                }
            }
        };

    Highcharts.visualize(table, options);

}


genTable();