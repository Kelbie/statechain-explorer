import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styled from "styled-components";

import Home from "./Home";
import Transfer from "./Transfer";
import Statechain from "./Statechain";
import UserPubKey from "./UserPubKey";

import Header from "./Components/Header";

import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: 'https://api.statechain.info/graphql'
})

function Router(props) {
  return (
    <div {...props}>
      <ClientContext.Provider value={client}>
        <BrowserRouter>
            <Header />  
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/transfer/:transfer_hash" exact component={Transfer} />
              <Route path="/statechain/:server_public_key" exact component={Statechain} />
              <Route path="/user/:user_pub_key" exact component={UserPubKey} />
            </Switch>
        </BrowserRouter>
      </ClientContext.Provider>
    </div>
  );
}

export default styled(Router)`
  font-family: "Inconsolata";
  margin: 16px;
  margin-bottom: 64px;

  > * {
    box-sizing: border-box;
  }
`;
