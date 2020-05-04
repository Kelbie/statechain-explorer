import React, { useState, Suspense } from 'react';
import styled from 'styled-components';

const FederationFeed = React.lazy(() => import("./Components/FederationFeed"));
const StatechainsFeed = React.lazy(() => import("./Components/StatechainsFeed"));
const TransferFeed = React.lazy(() => import("./Components/TransferFeed"));

function Home(props) {
  const [options, setOptions] = useState(0);
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className={props.className}>
      <div className="settings">
        <div className="options">
          <button className={`${options === 0 ? 'active' : ''}`} onClick={(e) => {
            setOptions(0)
          }}>Federations</button>
          <button className={`${options === 1 ? 'active' : ''}`} onClick={(e) => {
            setOptions(1)
          }}>Statechains</button>
          <button className={`${options === 2 ? 'active' : ''}`} onClick={(e) => {
            setOptions(2)
          }}>Transfers</button>
        </div>
      </div>
      { filterActive ? 
        <div className="filter">
            
        </div> : ""
      }
      <Suspense fallback={<></>}>
        { options === 0 ? 
          <FederationFeed show={options === 0 ? 1 : 0}></FederationFeed>
          : ""
        }
        {
          options === 1 ? 
          <StatechainsFeed show={options === 1 ? 1 : 0}></StatechainsFeed>
          : ""
        }
        {
          options === 2 ?
          <TransferFeed show={options === 2 ? 1 : 0}></TransferFeed>
          : ""
        }
      </Suspense>
    </div>
  );
}

export default styled(Home)`
  width: 100%;
  max-width: 800px;
  margin: auto;

  button {
    /* remove button styles */
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .settings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .options {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    color: #909090;
    
    @media only screen and (max-width: 550px) {
      margin: auto;
      flex-direction: column;
    }

    > * {
      margin-right: 16px;
      cursor: pointer;

    }

    > .active {
      color: #414141;
      text-decoration: underline;
    }
  }

  .filter-button {
    color: #909090;
    font-weight: bold;
  }

  .filter {
    height: 100px;
    width: 100%;
    background: #F7F7F7;
    margin-bottom: 16px;
  }
`;
