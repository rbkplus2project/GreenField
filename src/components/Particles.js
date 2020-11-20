import React, { Component } from 'react';
import Particles from 'react-particles-js';
           
class Particle extends Component {

    render() {
      this.r=Math.floor(Math.random()*16777215).toString(16);
        return (
          <div id="particles">
            <Particles
              params={{
                background: {
                  color: {
                    value: "#000000",
                  },
                },
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse"
                    }
                  },
                  modes: {
                    push: {
                      quantity: 2,
                    },
                    repulse: {
                      distance: 222,
                      duration: 2,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#"+this.r,
                  },
                  links: {
                    color: "#"+this.r,
                    distance: 222,
                    width: 2,
                    opacity: 0.7
                  },
                  move: {
                    speed: 7,
                  },
                  number: {
                    value: 77,
                  },
                  size: {
                    value: 7,
                  },
                },
              }}
            />
            </div>
        )
      }
    }

export default Particle;
