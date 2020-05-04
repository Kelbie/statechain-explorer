import React from 'react';
import styled from 'styled-components';

import { Table, H1, A } from "./Components/Basics"

import Transfer from "./Components/Transfer";

import { useQuery } from 'graphql-hooks'

function Statechain(props) {
  const { loading, error, data } = useQuery(`
    query {
      statechain(serverPubKey: "${props.match.params.server_public_key}") {
        serverPubKey
        height
        timestamp
        transfers {
          height
          hash
          ownerPubKey
          nextOwnerPubKey
          signature
          blindedMessage
          timestamp
        }
      }
    }`);

  if (loading) { return 'Loading...' };
  if (error) { return 'Something Bad Happened' };

  return <div className={props.className}>
    <H1>Statechain</H1>

    <Table className="statechain-details" type="side" hover={0}>
      <div className="object">
        <div className="attribute word-break" data-label="Server Public Key"><A to={`/statechain/${data.statechain.serverPubKey}`} href="" className="server-pub-key">{data.statechain.serverPubKey}</A></div>
        <div className="attribute" data-label="Federation">statechain.info</div>
        <div className="attribute" data-label="Height">{data.statechain.height}</div>
        <div className="attribute" data-label="Created">{new Date(parseInt(data.statechain.timestamp)).toLocaleString('en-GB', { timeZoneName: 'short' })}</div>
      </div>
    </Table>

    <H1>Transfers</H1>

    <div className="transfers">
      {
        data.statechain.transfers.map(transfer => {
          return <Transfer key={transfer.hash} data={transfer}></Transfer>
        })
      }
    </div>

  </div>
}

export default styled(Statechain)`
  width: 100%;
  max-width: 1000px;
  margin: auto;

  .transfers > * {
    margin-bottom: 16px;
  }

`;
