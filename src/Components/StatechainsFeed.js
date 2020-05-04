import React from 'react';
import styled from 'styled-components';

import { Table, A } from "./Basics"

import { useQuery } from 'graphql-hooks'

function StatechainsFeed(props) {
  const { data } = useQuery(`
    query { 
      statechains {
        serverPubKey
        height
        timestamp
      }
    }`
  );

  return <Table {...props} type="top" hover={1}>
    <div className="object data-label">
      <div className="attribute">Height</div>
      <div className="attribute">Server Pub Key</div>
      <div className="attribute" >Last Transfer</div>
    </div>
      {
        data && data.statechains.map(statechain => {
          return <div className="object" key={statechain.serverPubKey}>
              <div className="attribute" data-label="Height">{statechain.height}</div>
              <div className="attribute word-break" data-label="Server Pub Key"><A to={`/statechain/${statechain.serverPubKey}`}>{statechain.serverPubKey}</A></div>
              <div className="attribute" data-label="Last Transfer">{new Date(parseInt(statechain.timestamp)).toLocaleString('en-GB', { timeZoneName: 'short' })}</div>
            </div>
        })
      }
  </Table>
}

export default styled(StatechainsFeed)`
  display: ${props => props.show ? 'table' : 'none' };
`;