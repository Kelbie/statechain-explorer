import React from 'react';
import styled from 'styled-components';

import { Table } from "./Basics"

import { useQuery } from 'graphql-hooks'


function FederationFeed(props) {
  const { data } = useQuery(`
    query { 
      statechains {
        height
      }
      transfers {
        height
      }
    }`
  );

  return <Table {...props} type="top" hover={1}>
      <div className="object data-label">
        <div className="attribute">Name</div>
        <div className="attribute"># of Statechains</div>
        <div className="attribute" ># of Transfers</div>
      </div>
      <div className="object">
        <div className="attribute" data-label="Name">statechain.info</div>
        <div className="attribute" data-label="# of Statechains">{data && data.statechains.length}</div>
        <div className="attribute" data-label="# of Transfers">{data && data.transfers.length}</div>
      </div>
  </Table>
}

export default styled(FederationFeed)`
  &::before {
    background: red;
    width: 10px;
    height: 10px;
  }


  display: ${props => props.show ? 'table' : 'none' };
`