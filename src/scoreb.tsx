import React from 'react';

type ScorebType={
    count:number
}
export function Scoreb(props:ScorebType){
    return(
        <div>
            {props.count}
        </div>
    )
}
