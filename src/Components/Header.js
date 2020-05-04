import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header(props) {
  return <div {...props}>
    <Link to="/" className="header">Statechain Explorer</Link>
  </div>
}

export default styled(Header)`
  text-align: center;
  margin: 64px;
  .header {
    font-size: 28px;
    cursor: pointer;
    color: #414141;
  }

  .transfer-count {
    font-size: 16px;
    color: #414141;
  }

  .search {
    display: flex;
    width: 100%;
    max-width: 500px;
    height: 50px;
    margin: auto;
    margin-top: 32px;
    input {
      padding: 8px;
      width: 100%;
      background: #F7F7F7;
      border: solid 2px #EFEFEF;
      border-right: none;
    }
    button {
      background: #F7F7F7;
      border: solid 2px #EFEFEF;
      border-left: none;
      padding: 16px;
      font-size: 14px;
      cursor: pointer;
      > svg {
        > path {
          fill: #29A4E5;
        }
      }
    }
  }

`;
