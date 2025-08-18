import React from 'react';
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const CounterPage=()=>{
      const [counterState,setCounterState]=useState(false)
      return (
        <div className="counter-wrap">
        <div className="counter-top">
          <ScrollTrigger
            onEnter={() => setCounterState(true)}
            onExit={() => setCounterState(false)}
          >
            <div className="counter-second">
              <div className="counter-third">
                <h2>
                  {counterState && (
                    <CountUp start={0} end={30} duration={5.5}></CountUp>
                  )}
                  +
                </h2>
                <p> Experts</p>
              </div>
              <div className="counter-fourth">
                <h2>
                  {" "}
                  {counterState && (
                    <CountUp start={0} end={20} duration={5.5}>
                      {" "}
                    </CountUp>
                  )}
                  +
                </h2>
                <p> Clients</p>
              </div>
              <div className="counter-fifth">
                <h2>
                  {counterState && (
                    <CountUp start={0} end={30} duration={5.5}></CountUp>
                  )}
                  +
                </h2>
                <p> Connected Partners</p>
              </div>
              <div className="counter-sixth">
                <h2>
                  {counterState && (
                    <CountUp start={0} end={30} duration={5.5}></CountUp>
                  )}
                  k
                </h2>
                <p> Hours Of Delivery</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        </div>
      );
    };
    export default CounterPage;
    