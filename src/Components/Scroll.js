import React from 'react'
import './Scroll.css'
const Scroll = (props) => {
                            return(
                                <div className = 'hide-scrollbar' style = { { overflowY: 'scroll', border: '1px transparent', height: '800px'} }>
                                    {props.children}
                                </div>
                            );
                          };


export default Scroll;