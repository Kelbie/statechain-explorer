import React from 'react';
import styled from 'styled-components';

import { Table, H1, A } from "./Components/Basics"

import Transfer from "./Components/Transfer";

import { useQuery } from 'graphql-hooks'

function UserPubKey(props) {
  const { loading, error, data } = useQuery(`
    query {
      user(userPubKey: "${props.match.params.user_pub_key}") {
        userPubKey
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
    <H1>User</H1>

    <Table className="user-pub-key-details" type="side" hover={0}>
      <div className="object">
        <div className="attribute word-break" data-label="User Public Key"><A to={`/user/${data.user.userPubKey}`} className="user-pub-key">{data.user.userPubKey}</A></div>
        <div className="attribute" data-label="Federation">statechain.info</div>
        <div className="attribute word-break" data-label="# of Transfers">{data.user.transfers.length}</div>
      </div>
    </Table>

    <H1>Transfers</H1>

    <div className="transfers">
      {
        data.user.transfers.map(transfer => {
          return <Transfer key={transfer.hash} data={transfer}></Transfer>
        })
      }
    </div>

  </div>
}

export default styled(UserPubKey)`
  width: 100%;
  max-width: 1000px;
  margin: auto;

  .transfers > * {
    margin-bottom: 16px;
  }
`;
