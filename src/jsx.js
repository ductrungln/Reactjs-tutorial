import React from 'react';

const jsx = () => {
    const element = <div id = "root">Hello world</div>;
    const elementR = React.createElement("div",{id:"root"},"Hello World");
    const element2 = (
        <div>
            <span>Hello</span><span>World</span>
        </div>
    );
    const element2R = React.createElement("div",{
       children: [
        React.createElement("span",null,"Hello"),
        "",
        React.createElement("span",null,"Wolrd"),
       ],
    });
    return (
        <div>
            <div className='heading' id='heading'>
                This is heading
            </div>
            <div className='heading2'></div>
        </div>
        
    );
};

export default jsx;