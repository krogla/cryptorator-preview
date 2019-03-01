// test data
var graphicData = [
  {
    datetime: Date.UTC(2012, 5, 22, 9, 0),
    course: 300,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 10, 0),
    course: 400,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 11, 0),
    course: 500,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 12, 0),
    course: 600,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 13, 0),
    course: 700,
    winners: 10,
    userWin: false
  },
  {
    datetime: Date.UTC(2012, 5, 22, 13, 35),
    course: 700,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 13, 46),
    course: 900,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 14, 0),
    course: 350,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 14, 23),
    course: 250,
    winners: 10,
    userWin: true
  }
];
var graphicDataBtc = [
  {
    datetime: Date.UTC(2012, 5, 22, 9, 0),
    course: 700,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 10, 0),
    course: 400,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 11, 0),
    course: 600,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 12, 0),
    course: 900,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 13, 0),
    course: 1200,
    winners: 10,
    userWin: false
  },
  {
    datetime: Date.UTC(2012, 5, 22, 13, 35),
    course: 560,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 13, 46),
    course: 320,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 14, 0),
    course: 800,
    winners: 10,
    userWin: true
  },
  {
    datetime: Date.UTC(2012, 5, 22, 14, 23),
    course: 746,
    winners: 10,
    userWin: true
  }
];

// test bounce data
var graphicBounceData = {
  datePay: Date.UTC(2012, 5, 22, 14, 0),
  payTo: Date.UTC(2012, 5, 22, 15, 0),
  pays: [220,2300,24000]
};

var graphicBounceDataBtc = {
  datePay: Date.UTC(2012, 5, 22, 14, 0),
  payTo: Date.UTC(2012, 5, 22, 15, 0),
  pays: [700, 2000]
};

var ethGraphOptions = {
  backgroundColor: "#333333",
  plotLinesColor: "#656565",
  lineGraph : {
    lineColor: "#518dcf",
    markerColor: "#518dcf",
    markerBorderDefault: "#FFFFFF",

    markerColorPayedColor: "#FFFFFF",
    markerBorderPayedHour: "#518dcf",
    markerSize: 7,

    tickFont: 'Formular'
  },
  bounceGraph: {
    lineColor: "#656565",
    fontSize: "12px"
  }
}
var btcGraphOptions = {
  backgroundColor: "#333333",
  plotLinesColor: "#656565",
  lineGraph : {
    lineColor: "#ff9500",
    markerColor: "#ff9500",
    markerBorderDefault: "#FFFFFF",

    markerColorPayedColor: "#FFFFFF",
    markerBorderPayedHour: "#ff9500",
    markerSize: 7,

    tickFont: 'Formular'
  },
  bounceGraph: {
    lineColor: "#656565"
  }
}

// returns object
// object.line = line data
// object.bounce = data for bounce
// object.ticks = plot lines in graphic
function mapData(data, bounceData, options) {
  var lineData = data.map(function(item) {
    var marker = {
      enabled: false,
      states: {
        hover: {
          enabled: false
        }
      } 
    };

    if(isZeroHour(item.datetime)) {
      marker = {
        enabled: true,
        radius: options.lineGraph.markerSize,
        fillColor: options.lineGraph.markerColor,
        lineColor: options.lineGraph.markerBorderDefault,
        lineWidth: 3,
        symbol: 'round'
      }

      // for pay to and date pay markers has another border color
      if(item.datetime === bounceData.datePay || item.datetime === bounceData.payTo) {
        marker.lineColor = options.lineGraph.markerBorderPayedHour;
        marker.fillColor = options.lineGraph.markerColorPayedColor;
      }
    }

    return {
      x: item.datetime,
      y: item.course,
      winners: item.winners,
      userWin: item.userWin,
      marker: marker
    };
  });
  // plot lines
  var plotLines = data
    .filter(item => isZeroHour(item.datetime)) // filter for all points on hour
    .map(function(item) {
    return {
      color: options.plotLinesColor,
      width: 1,
      value: item.datetime,
      dashStyle: "LongDash",
    };
  });

  if(bounceData && bounceData.payTo) {
    plotLines.push({
      color: options.plotLinesColor,
      width: 1,
      value: bounceData.payTo,
      dashStyle: "LongDash",
    });
  }

  var hourPayData = data.find(a => a.datetime === bounceData.datePay);
  var polygonData = [];
  polygonData.push({ 
    x: hourPayData.datetime, 
    y: hourPayData.course, 
    color: options.bounceGraph.lineColor,
    marker: { enabled: false }
  });

  var bounces = null;
  if(bounceData && bounceData.pays) {
    bounces = bounceData.pays.sort((a,b) => b - a).map(function(item) {
      return {
        x: bounceData.payTo,
        y: item,
        color: options.bounceGraph.lineColor,
        dataLabels: {
          enabled: true,
          color: "#FFFFFF",
          align: 'left',
          x: 57,
          y: 11,
          style: {
            color: "#FFFFFF",
            fontSize: options.bounceGraph.fontSize,
            textOutline: "none",
            textShadow: false
          },
          formatter: function() {
            return "$" + this.y;
          }
        },
        marker: {
          enabled: true,
          radius: 7,
          fillColor: "#FFFFFF",
          lineColor: "#FFFFFF"
        },
        symbol: 'round'
      };
    });
  }
  polygonData = polygonData.concat(bounces);

  // polygon is line chart.
  // this code added first as last point
  polygonData.push(polygonData[0]);

  polygonData[0].dataLabels = {
    enabled: true,
    color: "#FFFFFF",
    align: 'right',
    x: -15,
    y: 12,
    style: {
      color: "#FFFFFF",
      fontSize: options.bounceGraph.fontSize,
      textOutline: "none",
      textShadow: false
    },
    formatter: function() {
        return this.y + " USD";
    }
  }

  return {
    line: lineData,
    bounce: polygonData,
    ticks: plotLines
  };
}

// create graph when document load
$(document).ready(function() {
  // map server data to custom format
  createChart(graphicData, graphicBounceData, ethGraphOptions, 'chart_container_eth');
  createChart(graphicDataBtc, graphicBounceDataBtc, btcGraphOptions, 'chart_container_btc');
});


function isZeroHour(milliseconds) {
  return new Date(milliseconds).getMinutes() == 0;
}

function createChart(serverData, bounceData, options, container) {
  var data = mapData(serverData, bounceData, options);
  Highcharts.chart(container, {
    legend: { enabled: false },
    title: { text: null },

    credits: {
      enabled: false
    },
    // if need custom font - change 'serif' and uncomment string
    chart: { 
      // style: { fontFamily: 'serif' }
      marginRight: 50,
    },

    yAxis: {
      gridLineColor: 'transparent',
      title: { text: null },
      labels: { enabled: false },
      minorTickLength: 0,
      tickLength: 0
    },
    xAxis: {
      type: 'datetime',
      plotLines: data.ticks,
      tickInterval: 3600 * 1000, // tick every hour,
      lineColor: "transparent",
      minorTickLength: 0,
      tickLength: 0,
      minorGridLineWidth: 0,
      labels: {
        style: {
          fontFamily: options.lineGraph.tickFont
        }
      }
    },
    tooltip: {
      useHTML: true,
      backgroundColor: 'none',
      borderRadius: 0,
      borderWidth: 0,
      xDateFormat: '%d %b %Y',
      shadow: false,
      formatter: function () {
        console.log(this);
        if(!isZeroHour(this.key)) {
          return null;
        }

        var headerColor = "#FF0000";
        var userText = "Проигрыш"
        if(this.point.options.userWin) {
          headerColor = "#06f309";
          userText = "Победа"
        }

        return '<div class="chart-tooltip"><div class="chart-tooltip_wrap"><div class="chart-tooltip_header" style="color:' + headerColor + ';">' + userText + '</div><div class="chart-tooltip_data">+' + this.point.options.winners + ' игроков</div></div></div>';
      }
    },
    title: { text: null },
    subtitle: { text: null },
    exporting: { enabled: false },
    series: [{
        name: 'polygon',
        type: 'line',
        data: data.bounce,
        color: options.bounceGraph.lineColor,
        enableMouseTracking: false,
        dashStyle: 'LongDash',
        lineWidth: 1
      },
      {
        name: 'courseLine',
        type: 'areaspline',
        lineColor: options.lineGraph.lineColor,
        color: 'none',
        borderColor: "#FFFFFF",
        data: data.line,
        marker: { enabled: false }
      }
    ]
  });
}