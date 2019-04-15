

function chart(values,labels, type, id){
    let data =[{
        values: values,
        labels: labels,
        sort: false,
        type: type,
        direction: 'clockwise',
        name: 'SDGs',
        marker: {
            colors:
                [
                    'rgb(235,28,45)',
                    'rgb(221,167,58)',
                    'rgb(76,159,56)',
                    'rgb(199,33,47)',
                    'rgb(239,64,45)',
                    'rgb(39,191,230)',
                    'rgb(251,196,18)',
                    'rgb(163,28,68)',
                    'rgb(242,106,46)',
                    'rgb(224,20,131)',
                    'rgb(248,157,42)',
                    'rgb(191,141,44)',
                    'rgb(64,127,70)',
                    'rgb(31,151,212)',
                    'rgb(89,186,71)',
                    'rgb(19,106,159)',
                    'rgb(20,73,107)'
                ]
        }
    }];
    let layout = {
        title: "Number of Sustainability Related Research with Respect to the SDGs"
    }

    Plotly.newPlot(id, data, layout, {showSendToCloud:true})
}