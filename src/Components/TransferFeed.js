import React from 'react';
import styled from 'styled-components';

import { Table, A } from "./Basics"

import { useQuery } from 'graphql-hooks'

function TransferFeed(props) {
  const { data } = useQuery(`
    query { 
      transfers {
        height
        hash
        ownerPubKey
        nextOwnerPubKey
        signature
        blindedMessage
        timestamp
      }
    }`
  );

  return <Table {...props} type={"top"} hover={1}>
    <div className="object data-label">
      <div className="attribute">Height</div>
      <div className="attribute">Timestamp</div>
      <div className="attribute" >Hash</div>
    </div>
      {
        data && data.transfers.map(transfer => {
          return <div className="object" key={transfer.hash}>
              <div className="attribute" data-label="Height">{transfer.height}</div>
              <div className="attribute" data-label="Timestamp">{new Date(parseInt(transfer.timestamp)).toLocaleString('en-GB', { timeZoneName: 'short' })}</div>
              <div className="attribute word-break" data-label="Hash"><A to={`/transfer/${transfer.hash}`}>{transfer.hash}</A></div>
            </div>
        })
      }
  </Table>
}

export default styled(TransferFeed)`
  display: ${props => props.show ? 'table' : 'none' };
`