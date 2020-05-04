import React from 'react';

import { Link } from "react-router-dom";
import styled from "styled-components";

function TableComponent(props) {
  return <div {...props}>
    {props.children}
  </div>
}

export const Table = styled(TableComponent)`
  color: #414141;
  width: 100%;

  display: table;
  border-collapse: collapse;

  .word-break {
    white-space: normal;
    word-break: break-all;
  }
  
  .data-label {
    font-weight: bold;
    white-space: nowrap;
    cursor: auto !important;
    box-shadow: none !important;
    background: #f7f7f7 !important;
  }

  .object { 
    width: 100%;
    display: table-row;
    border: solid 2px #EFEFEF;

    &:nth-child(odd) {
      background: #f7f7f7;
    }

    &:nth-child(even) {
      background: #ffffff;
    }

    ${props => props.hover ? `
      &:hover {
        // cursor: pointer;
        background: #F1F9FE;
        box-shadow: inset 0 0 10px 0px rgb(41, 164, 229, 0.25);

        // a {
        //   text-decoration: underline;
        // }
      }
    `: ""}
  }

  .attribute {
    display: table-cell;
    padding: 16px;
  }

  ${props => props.type === "top" ? "@media only screen and (max-width: 550px) {" : ""}
      
    
        display: flex;
        .attribute {
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: right;
          
          &:nth-child(odd) {
            background: ${props => props.type === "side" ? "#f7f7f7" : ""};
          }

          &:nth-child(even) {
            background: ${props => props.type === "side" ? "#ffffff" : ""};
          }
        }

        .data-label {
          display: none;
        }
        
        .attribute {
          padding: 16px;

          &::before {
            content: attr(data-label);
            font-weight: bold;
            text-align: left;
            word-break: break-word;
          }
        }
      }
    ${props => props.type === "top" ? "}" : ""}
  
`

export const H1 = styled.h1`
  color: #414141;
  font-size: 24px;
`

export const A = styled(Link)`
  color: #29A4E5;
  text-decoration: none;
  word-wrap: break-word;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;