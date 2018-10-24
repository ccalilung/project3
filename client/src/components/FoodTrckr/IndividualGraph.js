import React from 'react'


const IndividualGraph = (props) => {
<Plot
            data={[
                {
                y: props.graphValues,
                x: props.graphAxis,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'red'},
                name: props.graphName
              }
            ]}
            layout={ {xaxis:{autotick:false,ticklen:1}, title:'Food Trckr'}}
          />

}

export default IndividualGraph;