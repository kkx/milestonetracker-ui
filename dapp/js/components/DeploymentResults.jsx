/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Button, Panel } from 'react-bootstrap';

class DeploymentResults extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div className="well deployment-results">
        {
          this.props.deploymentResults.map((result) => {
            return(
              <div>
                {
                  result.contract &&
                  <p key={ result.contract }>
                    <span>{ result.contract }</span><br />
                    <span> Contract Address:
                      <a href={ `${ this.props.domain }${ result.address }` } target="_blank">{ result.address }</a>
                    </span><br />
                    <span> Transaction Hash:
                      <a href={ `${ this.props.domain }${ result.transactionHash }` } target="_blank">{ result.transactionHash }</a>
                    </span><br />
                    <span>
                      {
                        !this.state[result.contract]
                          ? <Button onClick={ ()=> this.setState({ [result.contract]: !this.state[result.contract] })}>View Abi</Button>
                          : <Button onClick={ ()=> this.setState({ [result.contract]: !this.state[result.contract] })}>Hide Abi</Button>
                      }
                      <Panel collapsible expanded={ this.state[result.contract] }>
                        <p><code>
                          { JSON.stringify(result.ABI) }
                        </code></p>
                      </Panel>
                    </span>
                  </p>
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}

DeploymentResults.propTypes = {
    deploymentResults: PropTypes.bool.array,
    deploymentResults: PropTypes.bool.string,
};

const mapStateToProps = ({ deploymentResults }) => ({ deploymentResults });

export default connect(mapStateToProps)(DeploymentResults);
