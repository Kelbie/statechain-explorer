import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { A, Table } from "./Basics";

function Transfer(props) {

  return <div {...props}>
    <A to={`/transfer/${props.data.hash}`} className="transfer-hash">{props.data.hash}</A>
    <div className="transfer">
      <div className="input">
        {
          props.data.ownerPubKey === null ? <div className="root">ROOT</div> : 
          <A to={`/user/${props.data.ownerPubKey}`} className="owner-pub-key">{props.data.ownerPubKey}</A>
        }
        <Table className="details" type="side" hover={0}>
          <div className="object">
            <div className="attribute word-break" data-label="Signature">{props.data.signature}</div>
            <div className="attribute word-break" data-label="Blinded Message">{props.data.blindedMessage}</div>
          </div>
        </Table>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
      <div className="output">
        <A to={`/user/${props.data.nextOwnerPubKey}`} className="next-owner-pub-key">{props.data.nextOwnerPubKey}</A>
      </div>
    </div>
    <div className="fee-container"><div className="fee">0 SAT</div></div>
  </div>
}

export default styled(Transfer)`
  display: flex;
  flex-direction: column;
  background: #F7F7F7;
  border: solid 2px #EFEFEF;
  padding: 16px;
  .transfer-hash {
    font-weight: bold;
    font-size: 16px;
    padding: 16px 0px;
  }

  .root, .owner-pub-key, .next-owner-pub-key {
    display: block;
    font-size: 14px;
    margin: 8px 0px;
  }

  .transfer {
    width: 100%;
    display: flex;
    margin-top: 8px;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }


    svg {
      @media only screen and (max-width: 600px) {
        transform: rotate(90deg);
      }
      
      align-self: center;
      path {
        fill: #29A4E5;
      }
    }
  }

  .input, .output {
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    overflow: hidden;
    background: #ffffff;
    border: solid 2px #EFEFEF;
    padding: 8px;
    border-radius: 8px;
    height: min-content;
    
    @media only screen and (max-width: 600px) {
      overflow: visible;
    }

    > ${Table} {
      margin-top: 8px;
      box-shadow: none;
      font-size: 12px;
    }

  }

  .input {
    margin-right: 8px;
  }

  .output {
    margin-left: 8px;
  }

  @media only screen and (max-width: 600px) {
    overflow: visible;
    .input {
      margin-right: 0px;
      margin-bottom: 8px;
    }
    .output {
      margin-left: 0px;
      margin-top: 8px;
    }
  }

  .fee-container {
    margin-top: 8px;
    text-align: right;

    .fee {
      display: inline-block;
      max-width: max-content;
      font-size: 14px;
      font-weight: bold;
      color: #E58729;
    }
  }
`;
