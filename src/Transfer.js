import React from 'react';
import styled from 'styled-components';

import { Table, H1, A } from "./Components/Basics"

import TransferObject from "./Components/Transfer";

import { useQuery } from 'graphql-hooks'

function Transfer(props) {
  const { loading, error, data } = useQuery(`
    query {
      transfer(hash: "${props.match.params.transfer_hash}") {
        statechainPubKey
        height
        hash
        ownerPubKey
        nextOwnerPubKey
        signature
        blindedMessage
        timestamp
      }
    }`);

  if (loading) { return 'Loading...' };
  if (error) { return 'Something Bad Happened' };

  return <div {...props}>
    <H1>Transfer</H1>
    <Table className="transfer-details" type="side" hover={0}>
      <div className="object">
        <div className="attribute word-break" data-label="Hash"><A to={`/transfer/${data.transfer.hash}`}>{data.transfer.hash}</A></div>
        <div className="attribute" data-label="Height">{data.transfer.height}</div>
        <div className="attribute word-break" data-label="Included in Statechain"><A to={`/statechain/${data.transfer.statechainPubKey}`}>{data.transfer.statechainPubKey}</A></div>
        <div className="attribute" data-label="Created">{new Date(parseInt(data.transfer.timestamp)).toLocaleString('en-GB', { timeZoneName: 'short' })}</div>
        <div className="attribute word-break" data-label="From"><A to={`/user/${data.transfer.ownerPubKey}`} className="owner-pub-key">{data.transfer.ownerPubKey}</A></div>
        <div className="attribute word-break" data-label="To"><A to={`/user/${data.transfer.nextOwnerPubKey}`} className="owner-pub-key">{data.transfer.nextOwnerPubKey}</A></div>
      </div>
    </Table>

    <TransferObject data={data.transfer} />

  </div>
}

export default styled(Transfer)`
  width: 100%;
  max-width: 1000px;
  margin: auto;

  ${TransferObject} {
    margin-top: 16px;
  }

  .transfers > * {
    margin-bottom: 16px;
  }

`;
