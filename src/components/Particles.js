import Particles from 'react-particles-js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
           
// Creates Particles animated background
// Creates Random Color Hex Value
class Particle extends Component {
    render() {
        return (
          <div id="particles">
            <Particles
              params={{
                background: {
                  color: {
                    value: this.props.colors[6],
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
                      quantity: 7,
                    },
                    repulse: {
                      distance: 222,
                      duration: 2,
                    },
                  },
                },
                particles: {
                  color: {
                    value: this.props.colors[7],
                  },
                  links: {
                    color: this.props.colors[8],
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

// Redux 
const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
}
export default connect(mapStateToProps)(Particle);
